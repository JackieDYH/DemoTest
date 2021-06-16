<!--
 * @version: 
 * @Description: file content
 * @Author: Jackie
 * @Date: 2021-06-15 10:49:54
 * @LastEditors: Jackie
 * @LastEditTime: 2021-06-16 16:24:42
-->
<template>
  <div class="home">
    <Header></Header>
  </div>
</template>

<script>
import Header from "../components/header.vue";
// @ is an alias to /src
import mixin from "@/common/mixin.js";
import { debounce } from "lodash"; // 防抖 组件中引用
// vuex状态管理
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "Home",
  mixins: [mixin], //vue 混用 分发 Vue 组件中的可复用功能
  components: { Header},
  data() {
    return {
      list1: "内容list1",
      time: "1623740137", //秒
    };
  },
  mounted() {
    console.log(
      "公共utils方法-是否在微信内打开",
      this.$utils.deviceMethod.isWeiXin()
    );
    // this.get();
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["userInfo"]),
  },
  methods: {
    ...mapActions(["setAdeminUserSync"]),
    vuexasync(id) {
      // this.setAdeminUserSync({a:id})
      if(this.user == '666666'){
        this.$store.commit("setAdminUser", "方法实现 同步方法");
      }else{
        this.setAdminUser('666666');
      }
    },
    ...mapMutations(['setAdminUser']),
    // 滚动获取数据
    refresh() {
      console.log("下拉刷新");
    },
    infinite(event) {
      console.log("上拉加载");
      this.get2();
    },
    // 防抖
    get2: debounce(async function () {
      let k = await this.$axios.getList_API();
      console.log(k, "防抖版");
    }, 1000),

    async get() {
      //  let k = await this.$axios.postList_API({id:'222'});
      // let k =  this.$axios.getList_API().then(res=>{console.log(res);});
      let k = await this.$axios.getList_API();
      // let k = await this.$axios.getList2_API({id:'6452',dyh:'0520'});
      console.log(k, 999666);
    },
  },
};
</script>
<style lang='scss' scoped>
h1 {
  //h1为要应用的地方，也可以使用类名和id等其他选择器
  animation-name: flash; //flash为要使用的动画效果名，在这里不需要加animate前缀
  animation-duration: 3s; //这里设定完成该动画的时间
  /*animation:turn 1s linear infinite;*/
  font-size: 10px;
}
.wrap {
  position: relative;
  width: 50px;
  height: 80px;
  overflow-y: scroll;
  margin: 0 auto;
  border: 1px solid #3d3d3d;
  font-size: 6px;
}
</style>
