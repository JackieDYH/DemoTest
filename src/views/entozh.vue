<template>
  <div class="wrap">
    <button @click="btn('cn')" class="btn">中文/cn</button>
    <button @click="btn('us')" class="btn">英文/us</button>
    <p class="pm">{{$t("home.dyh")}}-{{$t("home.neirong")}}</p>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$t)
  },
  methods: {
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