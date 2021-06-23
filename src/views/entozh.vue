<!--
 * @version: 
 * @Description: file content
 * @Author: Jackie
 * @Date: 2021-06-23 15:06:16
 * @LastEditors: Jackie
 * @LastEditTime: 2021-06-23 15:14:45
-->
<template>
  <div class="wrap">
    <button @click="btn('cn')" class="btn">中文/cn</button>
    <button @click="btn('us')" class="btn">英文/us</button>
    <hr>
    <button @click="btns('cn')" class="btn">中文/cn</button>
    <button @click="btns('us')" class="btn">英文/us</button>
    <p class="pm">{{$t("home.dyh")}}-{{$t("home.neirong")}}</p>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$t)
  },
  methods: {
    btns(t){
      // 不刷新页面直接改变语言
      console.log(t);
      switch(t){
        case 'cn': this.$i18n.locale = 'cn'; break;
        case 'us': this.$i18n.locale = 'us'; break;
        default : this.$i18n.locale = 'cn';
      }
    },
    btn(t) {
      console.log("获取",t);
      localStorage.setItem("language", t);
      // 刷新当前页面
      window.location.reload();
      // this.$router.go(0);
    },
  },
};
</script>

<style lang="less" scoped>
.pm{
  font-size: 26px;
}
.btn{
  font-size: 28px;
}
</style>