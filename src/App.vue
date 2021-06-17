<!--
 * @version: 
 * @Description: file content
 * @Author: Jackie
 * @Date: 2021-06-15 10:49:54
 * @LastEditors: Jackie
 * @LastEditTime: 2021-06-17 11:08:34
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
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

<style lang="scss">
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
    font-size: 10px;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  [data-dpr="2"] a{
    font-size: 40px;
    color: red;
  }
}
</style>
<style>
@import url("./assets/css/common.css");
@import url("./assets/css/flex.css");
/* body{
  width: 750px;
  height: 1136px;
} */
</style>
