<template>
  <div class="page-container">
    <div class="main">
      <pdf
        :src="src"
        :page="currentPage"
        @progress="loadedRatio = $event"
        @loaded="loadPdfHandler"
        @num-pages="pageCount = $event"
        @page-loaded="currentPage = $event"
        ref="wrapper"
        class="pdf"
      ></pdf>
    </div>
    <ul class="footers">
      <li
        :class="{ select: idx == 0 }"
        @touchstart="idx = 0"
        @touchend="idx = -1"
        @click="scaleD"
      >
        <p class="more-p">放大</p>
      </li>
      <li
        :class="{ select: idx == 1 }"
        @touchstart="idx = 1"
        @touchend="idx = -1"
        @click="scaleX"
      >
        <p class="small-p">缩小</p>
      </li>
      <li
        :class="{ select: idx == 2 }"
        @touchstart="idx = 2"
        @touchend="idx = -1"
        @click="changePdfPage(0)"
      >
        <p class="up-p">上一页</p>
      </li>
      <li
        :class="{ select: idx == 3 }"
        @touchstart="idx = 3"
        @touchend="idx = -1"
        @click="changePdfPage(1)"
      >
        <p class="down-p">下一页</p>
      </li>
      <li>
        <p>当前第{{ currentPage }}页/共{{ pageCount }}页</p>
      </li>
      <li class="home">
        <a href="/">返回首页</a>
      </li>
    </ul>
  </div>
</template>
 
<script>
import pdf from "vue-pdf";
export default {
  data() {
    return {
      currentPage: 1, // 当前页码
      pageCount: 0, // 总页码
      scale: 100,
      idx: -1,
      loadedRatio: 0,
      src:"/xf.pdf",//文件放public中
      // src:"https://dakaname.oss-cn-hangzhou.aliyuncs.com/file/2018-12-28/1546003237411.pdf"
    };
  },
  created() {
    this.src = pdf.createLoadingTask(this.src); // 处理一下跨域
  },
  components: {
    pdf
  },
  methods: {
    // 改变PDF页码,val传过来区分上一页下一页的值,0上一页,1下一页
    changePdfPage(val) {
      if (val === 0 && this.currentPage > 1) {
        this.currentPage--;
      }
      if (val === 1 && this.currentPage < this.pageCount) {
        this.currentPage++;
      }
      console.log(this.currentPage);
      console.log(this.pageCount);
    },
    goBack() {
      this.$router.go(-1);
    },
    // pdf加载时
    loadPdfHandler(e) {
      this.currentPage = 1; // 加载的时候先加载第一页
    },
    //放大
    scaleD() {
      this.scale += 5;
      this.$refs.wrapper.$el.style.width = parseInt(this.scale) + "%";
    },

    //缩小
    scaleX() {
      if (this.scale == 100) {
        return;
      }
      this.scale += -5;
      this.$refs.wrapper.$el.style.width = parseInt(this.scale) + "%";
    }
  }
};
</script>
 
<style scoped>
.home{
  margin-left: 30px;
}
.home a{
  font-size: 16px;
  color: #fff;
}
.pdf{
  width: 60%;
  margin: 0 auto;
}
.main {
  overflow: hidden;
}
.footers {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  z-index: 100;
  color: #fff;
  border-top: 1px solid #f0f0f0;
  background: rgba(0,0,0,.4);
  line-height: 30px;
  height: 30px;
}
.li {
  text-align: center;
  flex: 1;
  padding: 5px;
  cursor: pointer;
}
.ul {
  list-style: none;
}
.more-p {
  /* border-right: 1px solid #f0f0f0; */
  margin-right: 40px;
  margin-left: 40px;
  cursor: pointer;
}
.small-p {
  margin-right: 40px;
  cursor: pointer;
}
.up-p {
  margin-right: 40px;
  cursor: pointer;
}
.down-p {
  border-radius: 0 none;
  cursor: pointer;
  margin-right: 50px;
}
</style>