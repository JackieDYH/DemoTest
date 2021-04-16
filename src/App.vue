<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/about2">About2</router-link> |
      <router-link to="/vxetable">vxe-table</router-link> |
      <router-link to="/eltable">el-table</router-link> |
      <router-link to="/map">map</router-link> |
      <router-link to="/map2">map2</router-link> |
      <router-link to="/map3">map3</router-link> |
      <router-link to="/map4">map4</router-link> |
      <router-link to="/lunbo">lunbo</router-link> |
      <router-link to="/img">img</router-link> |
      <router-link to="/pic">pic</router-link> |
      <router-link to="/pdf1">pdf1</router-link> |
      <router-link to="/pdf2">pdf2</router-link> |
      <router-link to="/pmd">跑马灯效果</router-link> |
      <router-link to="/image">图片加载</router-link> |
      <router-link to="/antv">antv图表</router-link> |
      <router-link to="/imgyl">图片预览</router-link> |
      <router-link to="/entozh">entozh</router-link> |
    </div>
    <!-- 是否被缓存 缓存不活动的组件实例，而不是销毁它们-->
    <!-- keep-alive用于保存组件的渲染状态 -->
    <!-- 
      <keep-alive :include="whiteList" :exclude="blackList" :max="amount"></keep-alive>
        include定义缓存白名单，keep-alive会缓存命中的组件；exclude定义缓存黑名单，被命中的组件将不会被缓存；max定义缓存组件上限，超出上限使用LRU的策略置换缓存数据
     -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
// 公共样式文件
<style>
@import url("./assets/css/common.css");
@import url("./assets/css/flex.css");
</style>
