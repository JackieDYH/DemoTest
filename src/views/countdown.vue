/*
 * 倒计时
 * @author： Jacke
 */
<template>
  <div class="FlipClock">
    <Flipper ref="flipperYear1" />
    <Flipper ref="flipperYear2" />
    <Flipper ref="flipperYear3" />
    <Flipper ref="flipperYear4" />
    <em>year</em>
    <Flipper ref="flipperHour1" />
    <Flipper ref="flipperHour2" />
    <em>:</em>
    <Flipper ref="flipperMinute1" />
    <Flipper ref="flipperMinute2" />
    <em>:</em>
    <Flipper ref="flipperSecond1" />
    <Flipper ref="flipperSecond2" />
  </div>
</template>

<script>
import Flipper from "../components/Flipper.vue";
export default {
  name: "FlipClock",
  data() {
    return {
      timer: null,
      flipObjs: [],
      endtime: "1629849386398"
    };
  },
  components: {
    Flipper,
  },
  methods: {
    // 初始化数字
    init() {
      let now = new Date().getTime();
      let nowTimeStr = this.getcountDown(this.endtime, now, "dayHHMMSS");
      for (let i = 0; i < this.flipObjs.length; i++) {
        this.flipObjs[i].setFront(nowTimeStr[i]);
      }
    },
    // 开始计时
    run() {
      this.timer = setInterval(() => {
        let now = new Date().getTime();
        let nowTimeStr = this.getcountDown(this.endtime, now-1000, "dayHHMMSS");
        let nextTimeStr = this.getcountDown(this.endtime, now, "dayHHMMSS");
        for (let i = 0; i < this.flipObjs.length; i++) {
          if (nowTimeStr[i] === nextTimeStr[i]) {
            continue;
          }
          this.flipObjs[i].flipDown(nowTimeStr[i], nextTimeStr[i]);
        }
      }, 1000);
    },
    // 正则格式化日期
    formatDate(date, dateFormat) {
      /* 单独格式化年份，根据y的字符数量输出年份
     * 例如：yyyy => 2019
            yy => 19
            y => 9
     */
      if (/(y+)/.test(dateFormat)) {
        dateFormat = dateFormat.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      }
      // 格式化月、日、时、分、秒
      let o = {
        "m+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "i+": date.getMinutes(),
        "s+": date.getSeconds(),
      };
      for (let k in o) {
        if (new RegExp(`(${k})`).test(dateFormat)) {
          // 取出对应的值
          let str = o[k] + "";
          /* 根据设置的格式，输出对应的字符
           * 例如: 早上8时，hh => 08，h => 8
           * 但是，当数字>=10时，无论格式为一位还是多位，不做截取，这是与年份格式化不一致的地方
           * 例如: 下午15时，hh => 15, h => 15
           */
          dateFormat = dateFormat.replace(
            RegExp.$1,
            RegExp.$1.length === 1 ? str : this.padLeftZero(str)
          );
        }
      }
      return dateFormat;
    },
    // 日期时间补零
    padLeftZero(str) {
      return ("00" + str).substr(str.length);
    },
    // 倒计时事件
    getcountDown(value, nowTime, format) {
      // let nowTime = (new Date().getTime()) / 1000; // 当前时间 秒
      value = Number(value);
      if (value == 0 || value == "" || !value || value <= nowTime) {
        return "-";
      }
      if (isNaN(value)) {
        return "";
      }

      value-=1000;
      let timediff = Math.round((value - nowTime) / 1000); //获取时间差
      let day = parseInt(timediff / 60 / 60 / 24);
      let hr = parseInt((timediff / 60 / 60) % 24);
      let min = parseInt((timediff / 60) % 60);
      let sec = parseInt(timediff % 60);

    //   day = day > 9 ? day : "0" + day;
      day = '000' + day;
      day = day.substring(day.length-4);
      hr = hr > 9 ? hr : "0" + hr;
      min = min > 9 ? min : "0" + min;
      sec = sec > 9 ? sec : "0" + sec;
      // 返回值
      switch (format) {
        case "dayHH:MM:SS":
          return `${day}day ${hr}:${min}:${sec}`;
          break;
        case "dayHHMMSS":
          return `${day}${hr}${min}${sec}`;
          break;
        default:
          return { day, hr, min, sec };
          break;
      }
    },
  },
  mounted() {
    this.flipObjs = [
      this.$refs.flipperYear1,
      this.$refs.flipperYear2,
      this.$refs.flipperYear3,
      this.$refs.flipperYear4,
      this.$refs.flipperHour1,
      this.$refs.flipperHour2,
      this.$refs.flipperMinute1,
      this.$refs.flipperMinute2,
      this.$refs.flipperSecond1,
      this.$refs.flipperSecond2,
    ];
    this.init();
    this.run();
  },
};
</script>

<style>
.FlipClock {
  text-align: center;
}
.FlipClock .M-Flipper {
  margin: 0 3px;
}
.FlipClock em {
  display: inline-block;
  line-height: 102px;
  font-size: 66px;
  font-style: normal;
  vertical-align: top;
}
</style>
