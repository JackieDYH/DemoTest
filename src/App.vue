<template>
  <div id="app">
    <div id="nav">
      <router-link :to="item.path" v-for="(item,index) of list" :key="index">{{item.name}}</router-link>
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
<script>
export default {
  data(){
    return{
      list:[
        {path:'/',name:'home'},
        {path:'/about',name:'about'},
        {path:'/about2',name:'about2'},
        {path:'/vxetable',name:'vxetable'},
        {path:'/eltable',name:'eltable'},
        {path:'/map',name:'map'},
        {path:'/map2',name:'map2'},
        {path:'/map3',name:'map3'},
        {path:'/lunbo',name:'lunbo'},
        {path:'/img',name:'img'},
        {path:'/pic',name:'pic'},
        {path:'/pdf1',name:'pdf1'},
        {path:'/pdf2',name:'pdf2'},
        {path:'/pmd',name:'跑马灯效果'},
        {path:'/image',name:'图片加载'},
        {path:'/antv',name:'antv图表'},
        {path:'/imgyl',name:'图片预览'},
        {path:'/entozh',name:'entozh'},
      ]
    }
  },

}
</script>


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
  a+a::before{
    content: ' | ';
  }
}
</style>
// 公共样式文件
<style>
@import url("./assets/css/common.css");
@import url("./assets/css/flex.css");
</style>
