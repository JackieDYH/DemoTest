<template>
  <div>
    你好{{msg}}
    <video
      id="videoElement"
      controls
      autoplay
      muted
      width="300px"
      height="200px"
    >HTML5 video</video>
    <button @click="play">播放</button>

    <!-- <video
      class="video-component"
      ref="videoElement"
      controls
      autoplay
    >Your browser is too old which doesn't support HTML5 video.</video>-->

    <!-- <video
      id="my-player"
      class="video-js vjs-default-skin vjs-big-play-centered"
      controls
      preload="auto"
      autoplay="autoplay"
      poster="//vjs.zencdn.net/v/oceans.png"
      width="500"
      height="400"
      data-setup="{}"
    >
      <source src="http://1011.hlsplay.aodianyun.com/demo/game.flv" type="rtmp/flv" />
    </video> -->

    <object
		classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
		codebase = "http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0"
		width = "640"
		height = "480"
		id = "VideoPlayer"
		align = "middle" 
		>
			<param name = "allowScriptAccess" value = "*" />
			<param name = "allowFullScreen" value = "true" />
			<!-- <param name = "movie" value = "flvplayer.swf?video=https://file.njshushuo.com/8d2164883f65d1f78180b3fcc159d282&autoplay=true" /> -->
			<param name = "quality" value = "high" />
			<param name = "bgcolor" value = "#ffffff" />
			<embed 
				src = "/static/flvplayer.swf"
				flashvars = "vcastr_file=https://file.njshushuo.com/8d2164883f65d1f78180b3fcc159d282&IsAutoPlay=1&IsContinue=1&DefaultVolume=0"
				quality = "high"
				bgcolor = "#000000"
				width = "500"
				height = "380"
				name = "VideoPlayer"
				align = "middle"
				allowScriptAccess = "*"
				allowfullscreen = "true"
				type = "application/x-shockwave-flash"
				pluginspage = "http://www.macromedia.com/go/getflashplayer" 
			/>
		</object>


  </div>
</template>

<script>
//需要安装
// import videojs from "video.js";
// import "video.js/dist/video-js.css";
// import "vue-video-player/src/custom-theme.css";
// import "videojs-flash";

// ==============================
import flvjs from "flv.js";
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      flvPlayer: null,
    };
  },
  mounted() {
    // ============================================
    //谷歌浏览器要专门去开启flash播放器，打包后查看和代码运行都需要重新设置flash为允许状态
    // 设置flash路径,用于在videojs发现浏览器不支持HTML5播放器的时候自动唤起flash播放器
    // videojs.options.flash.swf ="https://cdn.bootcss.com/videojs-swf/5.4.1/video-js.swf";
    // var player = videojs("my-player"); //my-player为页面video元素的id
    // player.play(); //播放

    // ============================================
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById("videoElement");
      this.flvPlayer = flvjs.createPlayer({
        type: "flv",
        isLive: true,
        hasAudio: false,
        url: "http://1011.hlsplay.aodianyun.com/demo/game.flv",
      });
      this.flvPlayer.attachMediaElement(videoElement);
      this.flvPlayer.load();
      this.flvPlayer.play();
    }
  },
  methods: {
    play() {
      this.flvPlayer.play();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
