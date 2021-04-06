<template>
  <div class="sb">
    <input @click="fly" type="button" value="起来" />
    <input @click="stop" type="button" value="稳住" />
    <h4 @click="bt" ref="kk">{{ msg }}</h4>
    <marquee scrollamount="3">我在滚动中行走</marquee>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "发育中发育中发育中......",
      intervarID: null
    };
  },
  mounted() {},
  methods: {
    bt() {
        console.log(this.$refs.kk.innerHTML);
    },
    fly() {
      var that = this;
      if (that.intervarID != null) {
        return;
      } else {
        that.intervarID = setInterval(() => {
          //截取到头到第一个字符串
          var start = that.msg.substring(0, 1);
          //截取到后面所有到字符串
          var end = that.msg.substring(1);
          //重新拼接得到新到字符串，并赋值给msg
          that.msg = end + start;
        }, 400);
      }
    },
    stop() {
      clearInterval(this.intervarID);
      this.intervarID = null;
    }
  }
};
</script>

<style scoped>
.sb{
  font-size: 100px;
}
</style>