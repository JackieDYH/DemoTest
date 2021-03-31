<template>
  <div class="wrap">
    <button @click="btn">获取信息</button>
  </div>
</template>

<script>
export default {
  methods: {
    btn() {
      console.log("获取",this.web3js);
    },
  },
};
</script>

<style lang="less" scoped>
</style>