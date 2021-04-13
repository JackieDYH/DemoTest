<template>
  <div class="box">
    <div class="recommendPage">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <br />
    <Slider :sliders="sliders" />
    <br />
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      bannerList: [
        {
          id: 6,
          image:
            "https://le-cube.oss-cn-shanghai.aliyuncs.com/banner/banner_show_01.png",
          title: "新手教程",
          des:
            "活动期间，在【Lecube】专区抽块，每周直播时长≥45小时，有效开播天数≥5天，综合人气作品排名前5名即可获得惊喜福利奖励！",
          link: "https://mixmarvel.gitbook.io/lecube-1/",
          target: "_blank",
        },
        {
          id: 7,
          image:
            "https://le-cube.oss-cn-shanghai.aliyuncs.com/banner/banner_show_02.png",
          title: "FAQ",
          des:
            "活动期间，在【Lecube】专区抽块，每周直播时长≥45小时，有效开播天数≥5天，综合人气作品排名前5名即可获得惊喜福利奖励！",
          link: "https://mixmarvel.gitbook.io/lecube-1/0-4",
          target: "_blank",
        },
        {
          id: 8,
          image:
            "https://le-cube.oss-cn-shanghai.aliyuncs.com/banner/banner_show_03.png",
          title: "质押挖矿",
          des:
            "活动期间，在【Lecube】专区抽块，每周直播时长≥45小时，有效开播天数≥5天，综合人气作品排名前5名即可获得惊喜福利奖励！",
          link: "https://mixmarvel.gitbook.io/lecube-1/kuai-chi/2-1",
          target: "_blank",
        },
        {
          id: 9,
          image:
            "https://le-cube.oss-cn-shanghai.aliyuncs.com/banner/banner_show_04.png",
          title: "作品拼搭",
          des:
            "活动期间，在【Lecube】专区抽块，每周直播时长≥45小时，有效开播天数≥5天，综合人气作品排名前5名即可获得惊喜福利奖励！",
          link:
            "https://mixmarvel.gitbook.io/lecube-1/chuang-zuo-zhong-xin/3-1",
          target: "_blank",
        },
        {
          id: 26,
          image:
            "https://le-cube.oss-cn-shanghai.aliyuncs.com/banner/banner_show_01.png",
          title: "抽奖活动",
          des: "大奖属于你",
          link: "http://lecube-dev.mixmarvel.com/prizePool?id=6",
          target: "_selt",
        },
      ],
      swiperOption: {
        loop: true,
        slidesPerView: 3, //数量
        spaceBetween: 30, //间距
        slidesPerGroup: 1, //分几组
        direction: "horizontal", //设置水平还是垂直vertical
        autoplay: {
          delay: 3000, //延迟时长
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },

      sliders: {
        data: [
          {
            src:
              "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg", //图片地址
            url: "https://www.baidu.com", //链接跳转地址
          },
          {
            src:
              "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg", //图片地址
            url: "https://www.baidu.com", //链接跳转地址
          },
          {
            src:
              "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1689053532,4230915864&fm=26&gp=0.jpg", //图片地址
            url: "https://www.baidu.com", //链接跳转地址
          },
        ], //传入图片地址和链接跳转地址，必选
        interval: 3000, //轮播动画时间，可选（默认3000ms）
        target: "_blank", //跳转方式，可选（默认_self）
        width: "800px", //图片宽度，可选（默认800px）
        height: "400px", //图片高度，可选（默认400px）
        name: "fade", //轮播图动画方式，可选（默认move）左右滑动（move）和淡入淡出（fade）
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style scoped >
.recommendPage .swiper-container {
  position: relative;
  width: 100%;
  height: 600px;
  background: pink;
}
.recommendPage .swiper-container .swiper-slide {
  width: 100%;
  line-height: 600px;
  background: yellowgreen;
  color: #000;
  font-size: 16px;
  text-align: center;
}
</style>
