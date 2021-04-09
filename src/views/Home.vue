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
          <a-menu-item key="setting:1"> Option 1 </a-menu-item>
          <a-menu-item key="setting:2"> Option 2 </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3"> Option 3 </a-menu-item>
          <a-menu-item key="setting:4"> Option 4 </a-menu-item>
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
    <p class="animate__animated animate__bounce">
      当前运行环境:<strong>{{ env }}编译环境</strong>
      <a-button type="dashed" @click="copy(env)">复制环境</a-button>
    </p>
    <a-button type="primary" loading>Loading</a-button>
    <a-button type="primary">Primary</a-button>
    <a-button>Default</a-button>
    <a-button
      type="dashed"
      v-clipboard:copy="code"
      v-clipboard:success="copyAddress"
      v-clipboard:error="copyAddressError"
      >Dashed</a-button
    >
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// 导入公共方法
import mixin from "@/common/mixin.js";

// import { Notify, Toast } from 'vant';

export default {
  name: "Home",
  mixins: [mixin],//vue 混用 分发 Vue 组件中的可复用功能
  components: {
    HelloWorld,
  },
  data() {
    return {
      current: ["mail"],
      env: "未设置运行环境",
      code: "20200829-20210324-20210329",
    };
  },
  mounted() {
    console.log(process.env.VUE_APP_NODE_ENV, "运行环境");
    this.env = process.env.VUE_APP_NODE_ENV;
  },
  methods: {
    // 复制到剪贴板
    copy(e) {
      console.log(e);
      this.$clipboard(e);
      // Toast.success('复制成功');
      this.copyAddress();
    },

    // 混用 复用公共代码
    // 若要从写方法，在这里写和公共方法同名的方法名即可重写该方法
    // 复制
    // copyAddress(e) {
    //   console.log(e, "copyAddress");
    //   Toast.success('复制成功');
    // },

    // copyAddressError(e) {
    //   console.log(e, "copyAddressError");
    //   Notify({ type: 'warning', message: '复制失败' });
    // },
  },
};
</script>

<style lang="less" scoped>
</style>