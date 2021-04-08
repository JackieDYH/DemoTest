<template>
  <div class="home">
    <!-- 导航 -->
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="mail"> <a-icon type="mail" />One </a-menu-item>
      <a-menu-item key="app" disabled>
        <a-icon type="appstore" />Two
      </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="setting" />Submenu</span
        >
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">
            Option 3
          </a-menu-item>
          <a-menu-item key="setting:4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay">
        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
          >to Link</a
        >
      </a-menu-item>
    </a-menu>

    <img
      class="animate__animated animate__zoomInDown"
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1 class="animate__animated animate__bounce">An animated element</h1>
    <p class="animate__animated animate__bounce">当前运行环境:<strong>{{env}}编译环境</strong></p>
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
  },
  data() {
    return {
      current: ["mail"],
      env:'未设置运行环境',
    };
  },
  mounted(){
    console.log(process.env.VUE_APP_NODE_ENV,'运行环境')
    this.env = process.env.VUE_APP_NODE_ENV;
  }
};
</script>

<style lang="less" scoped>
</style>