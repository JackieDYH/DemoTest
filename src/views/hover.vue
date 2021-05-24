<!--
 * @version: 
 * @Description: file content
 * @Author: Jackie
 * @Date: 2021-05-24 21:47:41
 * @LastEditors: Jackie
 * @LastEditTime: 2021-05-24 22:46:11
-->
<template>
  <div class="hv">
    <p>图片hover效果展示</p>
    <ul class="ullist">
      <li class="img1">
        <img src="../assets/image/icon/ic1.png" alt="" />
      </li>
      <li class="img2">
        <img src="../assets/image/icon/ic2.png" alt="" />
      </li>
      <li class="img3">
        <img src="../assets/image/icon/ic3.png" alt="" />
      </li>
    </ul>
    <hr>
    <ul class="ullist2">
        <li v-for="(item,index) of imgList" :key="index" @mouseover="changeIndex(index)" @mouseout="changeIndexBack(index)">
            <img :src="item.tp" alt="" v-show="!item.show"/>
            <img :src="item.tp1" alt="" v-show="item.show"/>
            <div class="tips" v-show="item.show">
              <!-- <router-link :to="item.url">你好厉害</router-link> -->
              <a :href="item.url" target="_blank">你好厉害</a>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
          {
              tp:require('../assets/image/icon/ic1.png'),
              tp1:require('../assets/image/icon/ic1-1.png'),
              url:'https://www.baidu.com/',
              show:false,
          },
          {
              tp:require('../assets/image/icon/ic2.png'),
              tp1:require('../assets/image/icon/ic2-1.png'),
              url:'https://www.baidu.com/',
              show:false,
          },
          {
              tp:require('../assets/image/icon/ic3.png'),
              tp1:require('../assets/image/icon/ic3-1.png'), 
              url:'https://www.baidu.com/',
              show:false,
          }
      ],
    };
  },
  mounted() {},
  methods: {
      changeIndex(e){
          console.log(e,"移入");
          this.imgList[e].show = !this.imgList[e].show
      },
      changeIndexBack(e){
          console.log(e,"移除");
          this.imgList[e].show = !this.imgList[e].show
      },
  },
};
</script>

<style lang="less" scoped>
.ullist2{
    display: flex;
    .tips{
      padding: 20px 10px;
      background-color: aqua;
    }
}
.ullist {
    display: flex;
  .img1:hover img {
    content: url(../assets/image/icon/ic1-1.png);
  }
  .img2:hover img {
    content: url(../assets/image/icon/ic2-1.png);
  }
  .img3:hover img {
    content: url(../assets/image/icon/ic3-1.png);
  }
}
</style>