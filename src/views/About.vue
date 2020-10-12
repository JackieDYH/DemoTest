<template>
  <video
    id="myVideo"
    style="background-color: black; width:100%;height:100%"
    autoplay
  ></video>
</template>
<script>
import {
  getLiftAlarmVedioUrl,
  getLiftAudioTalkData,
  getLiftRealVedioUrl
} from "../utils/api.js";

export default {
  name: "AlarmVedioModal",
  props: {},
  data() {
    return {
      player: null,
      rtcEngine: "",
      url: "",
      isLive: true,
      visible: false,
      okText: "发起语音对讲",
      toSn: "",
      fromSn: "xinfu2019",
      talkType: 0, //是否正在发起语音对讲 0 未发起 1已发起 2发起或者挂起中
      record: "",
      type: 1,
      videoCode: localStorage.getItem("code")||'',
    };
  },
  watch: {
    videoCode: {
      videoCode(newName, oldName) {
        console.log(newName,'newName更新');
        this.open(newName);
      },
      deep: true,
      // immediate: true
    }
  },
  mounted() {
    // this.videoCode = '31103101142012120221';

    // this.open(this.$route.params.code,0);
    this.open(this.videoCode);
    // this.open("31103101142012120221");

    this.$bus.$on("handleclick", i => {
      console.log(i, "视频");
      // this.videoCode = i;
      // this.videoCode = localStorage.getItem("code");
      // this.open("31103101142011120213");
    });
  },
  beforeDestroy() {
    console.log("beforeDestroy");
    this.handleCancel();
  },
  methods: {
    open(record, type) {
      this.record = record;
      this.type = type;
      this.visible = true;
      this.talkType = 0;
      this.okText = "发起语音对讲";
      this.toSn = "";
      this.setVedioUrl(true);
    },
    setVedioUrl(isInitPlay) {
      let isHttps = "https:" === document.location.protocol;
      // 查看告警视频
      // if(1 === this.type){
      //   this.isLive = false;
      //   getLiftAlarmVedioUrl({alarmCode:this.record.vedioSource,isHttps:isHttps}).then((res)=>{
      //     if(res.success){
      //       this.url = res.message;
      //       console.log("获得的urlCode为",this.url);
      //       if(isInitPlay){
      //         this.startPlay();
      //       }else{
      //         this.player.flvSrc.url = this.url;
      //         this.player.resume();
      //       }
      //     }
      //   });
      // }else{
      //查看实时视频
      this.isLive = true;
      getLiftRealVedioUrl({ registerCode: this.record, isHttps: isHttps }).then(
        res => {
          if (res.success) {
            this.url = res.message;
            console.log("获得的urlCode为", this.url);
            if (isInitPlay) {
              this.startPlay();
            } else {
              this.player.flvSrc.url = this.url;
              this.player.resume();
            }
          }
        }
      );
      // }
    },
    handleOk() {
      console.log("发起语音对讲");
      if (this.type === 1) {
        this.$message.info("实时视频才能发起语音对讲！");
        return;
      }
      if (this.talkType === 1) {
        //当前已发起语音对讲，需要挂起语音对讲
        this.hangupAudioTalk();
      } else if (this.talkType === 0) {
        //当前未发起语音对讲，需要开启语音对讲
        this.startAudioTalk();
      }
    },
    startAudioTalk() {
      this.talkType = 2;
      this.okText = "请稍等...";
      if (!this.rtcEngine || this.rtcEngine === "") {
        let isHttps = "https:" === document.location.protocol;
        getLiftAudioTalkData({ registerCode: this.record.equipOutCode }).then(
          res => {
            if (res.success) {
              console.log("获得的发起语音信息为", res.result);
              const snList = res.result.equipSns;
              if (snList) {
                this.toSn = snList[0];
                if (isHttps) {
                  this.create(res.result.wssUrl);
                } else {
                  this.create(res.result.wsUrl);
                }
                console.log("toSn=" + this.toSn);
                this.callAudioTalk();
              } else {
                console.log("发起对讲失败");
                this.talkType = 0;
                this.okText = "发起语音对讲";
              }
            }
          }
        );
      } else {
        this.callAudioTalk();
      }
    },
    callAudioTalk() {
      try {
        if (!this.rtcEngine || this.rtcEngine === "") {
          console.log("发起对讲失败");
          this.talkType = 0;
          this.okText = "发起语音对讲";
        } else {
          //call
          this.rtcEngine.joinChannel("1");
          console.log("实际发起的toSN=" + this.toSn);
          this.rtcEngine.inviteUserJoinChannel(this.toSn, "1");
          console.log("call完成，准备监听");
          setTimeout(() => {
            this.rtcEngine.muteUser(this.fromSn, false);
            this.rtcEngine.muteUser(this.toSn, false);
          }, 2000);
          this.talkType = 1;
          this.okText = "挂断";
        }
      } catch (e) {
        this.talkType = 0;
        this.okText = "发起语音对讲";
      }
    },
    hangupAudioTalk() {
      try {
        this.talkType = 2;
        this.okText = "请稍等...";
        if (this.rtcEngine && this.rtcEngine !== "") {
          this.rtcEngine.leaveChannel();
          this.talkType = 0;
          this.okText = "发起语音对讲";
        } else {
          console.log("挂起对讲失败");
          this.talkType = 1;
          this.okText = "挂断";
        }
      } catch (e) {
        this.talkType = 1;
        this.okText = "挂断";
      }
    },
    create(signalServer) {
      let rtcConfig = {
        mode: ZLRtcEngine.Constant.ChannelMode.IPCRtc,
        server: { url: signalServer },
        username: this.fromSn,
        password: "123456"
      };

      this.rtcEngine = ZLRtcEngine.create(rtcConfig);

      this.rtcEngine.on(ZLRtcEngine.Constant.Events.INIT, function(error) {
        console.log("ZLRtcEngine init " + JSON.stringify(error));
      });

      this.rtcEngine.on(ZLRtcEngine.Constant.Events.JOIN_CHANNEL, function(
        error
      ) {
        console.log("ZLRtcEngine join channel " + JSON.stringify(error));
      });

      this.rtcEngine.on(ZLRtcEngine.Constant.Events.LEAVE_CHANNEL, function(
        error
      ) {
        console.log("ZLRtcEngine leave channel " + JSON.stringify(error));
      });

      this.rtcEngine.on(
        ZLRtcEngine.Constant.Events.INVITE_USER_JOIN_CHANNEL,
        function(user, error) {
          console.log(
            `ZLRtcEngine invite user ${user} join channel  ${JSON.stringify(
              error
            )}`
          );
        }
      );

      this.rtcEngine.on(ZLRtcEngine.Constant.Events.USER_JOIN, function(
        user,
        error
      ) {
        console.log(`ZLRtcEngine user ${user} join ${JSON.stringify(error)}`);
      });

      this.rtcEngine.on(ZLRtcEngine.Constant.Events.MESSAGE, function(msg) {
        console.log("ZLRtcEngine on msg");
      });

      this.rtcEngine.init();
    },
    stopTalk() {
      console.log("断开语音对讲");
      try {
        if (this.rtcEngine !== "") {
          this.rtcEngine.leaveChannel();
        }
      } catch (e) {}

      ZLRtcEngine.destroy();
      this.rtcEngine = null;
    },
    handleCancel() {
      console.log("关闭窗口");
      this.stopPlay();
      this.stopTalk();
      this.visible = false;
    },
    startPlay() {
      this.stopPlay();

      let videoElement = document.getElementById("myVideo");

      let config = {
        url: this.url, //资源地址
        isLive: this.isLive, //实时预览：true ， 回放：false
        enableFullScreen: true, //是否双击全屏
        enableFillWindow: false //是否视频铺满窗口
      };

      this.player = zlplayer.createPlayer(videoElement, config);
      this.player.on("error", this.onPlayerError);
      this.player.play();
    },
    stopPlay() {
      console.log(this.player);
      if (this.player != null) {
        console.log("停止播放");
        this.player.stop();
      }
      this.player = null;
    },
    onPlayerError(type, reason, desc) {
      let that = this;
      switch (type) {
        case "NetworkError":
          if (desc.code === -1) {
            alert("网络错误");
          } else if (desc.code === -999) {
            alert("网络错误， 流中断");
            //this.setVedioUrl(false);
          } else if (desc.code === 401) {
            alert(`${desc.msg} : 鉴权失败`);
          } else if (desc.code === 404) {
            alert("资源不存在, 设备不在线");
          }
          break;
        case "MediaError":
          if (reason === "NeedReplay") {
            alert("媒体异常，请重新播放");
            //this.setVedioUrl(false);
          }
          break;
      }
      that = null;
    }
  }
};
</script>

<style lang="less" scoped>
</style>
