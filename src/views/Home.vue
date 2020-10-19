<template>
  <div class="home">
    <img
      class="animate__animated animate__fadeInDown"
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1 class="animate__animated animate__bounce">An animated element</h1>
    <a-button type="primary" loading>Loading</a-button>
    <a-button type="primary">Primary</a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">Dashed</a-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="less" scoped>
</style>