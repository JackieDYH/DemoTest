<template>
    <Slider :sliders="sliders"  />
</template>

<script>


export default {
  data() {
    return {
     sliders: {
        data: [
          {
            src: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg', //图片地址
            url: 'https://www.baidu.com' //链接跳转地址
          },
          {
            src: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg', //图片地址
            url: 'https://www.baidu.com' //链接跳转地址
          },
          {
            src: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1689053532,4230915864&fm=26&gp=0.jpg', //图片地址
            url: 'https://www.baidu.com' //链接跳转地址
          }
        ],//传入图片地址和链接跳转地址，必选
        interval: 3000, //轮播动画时间，可选（默认3000ms）
        target: '_blank', //跳转方式，可选（默认_self）
        width:"1200px",//图片宽度，可选（默认800px）
        height:"600px",//图片高度，可选（默认400px）
        name: 'fade' //轮播图动画方式，可选（默认move）左右滑动（move）和淡入淡出（fade）
      }
    };
  }
};
</script>

<style>
</style>