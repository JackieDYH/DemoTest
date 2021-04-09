// 图片放大预览

<template>
  <viewer :images="photo">
    <!-- photo 一定要一个数组，否则报错 -->
    <img
      v-for="(src, index) in photo"
      :src="src"
      :key="index"
      :onerror="errorImg"
    />
  </viewer>
</template>

<script>
export default {
    data(){
        return{
            photo:[
                require('../assets/image/img01.jpg'),
                require('../assets/image/img02.jpg'),
                require('../assets/image/img03.jpg'),
            ]
        }
    },
    methods:{
      errorImg(e){
        console.log(e,'errimg');
      }
    }
};
</script>

<style>
</style>