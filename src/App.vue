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

    </div>
    <router-view />
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
