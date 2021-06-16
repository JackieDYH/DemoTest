<!--
 * @version: 
 * @Description: file content
 * @Author: Jackie
 * @Date: 2021-06-16 15:42:48
 * @LastEditors: Jackie
 * @LastEditTime: 2021-06-16 18:22:53
-->
<template>
  <div class="herder">
    <div class="button" @click="changeAccountButton">切换账户</div>
    <div class="button" @click="connectButton">登录</div>
  </div>
</template>

<script>
import mixin from "@/common/mixin.js";
import lecubecore from "@/common/lecubecore.js";
export default {
  mixins: [mixin, lecubecore],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    connectButton() {
      this.connectAccount();
    },
    changeAccountButton() {
      this.changeAccountData();
    },
  },
};
</script>

<style lang='scss' scoped>
.button{
    font-size: 10px;
}
</style>