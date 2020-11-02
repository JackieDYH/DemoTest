<template>
  <div span="8" class="left" @mousewheel.prevent="rollImg">
    <img :src="imgUrl" alt="" class="img" ref="imgDiv" @mousedown="move" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl:
        "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1604279122&di=dd5fbc4c325f2d9bac424120463773c2&src=http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg"
    };
  },
  methods: {
    // 拖动图片
    move(e) {
      e.preventDefault();
      // 获取元素
      var left = document.querySelector(".left");
      var img = document.querySelector(".img");
      var x = e.pageX - img.offsetLeft;
      var y = e.pageY - img.offsetTop;
      // 添加鼠标移动事件
      left.addEventListener("mousemove", move);
      function move(e) {
        img.style.left = e.pageX - x + "px";
        img.style.top = e.pageY - y + "px";
      }
      // 添加鼠标抬起事件，鼠标抬起，将事件移除
      img.addEventListener("mouseup", function() {
        left.removeEventListener("mousemove", move);
      });
      // 鼠标离开父级元素，把事件移除
      left.addEventListener("mouseout", function() {
        left.removeEventListener("mousemove", move);
      });
    },
    // 缩放图片
    rollImg() {
      /* 获取当前页面的缩放比 若未设置zoom缩放比，则为默认100%，即1，原图大小 */

      var zoom = parseInt(this.$refs.imgDiv.style.zoom) || 100;
      /* event.wheelDelta 获取滚轮滚动值并将滚动值叠加给缩放比zoom wheelDelta统一为±120，其中正数表示为向上滚动，负数表示向下滚动 */

      zoom += event.wheelDelta / 12;
      /* 最小范围 和 最大范围 的图片缩放尺度 */

      if (zoom >= 80 && zoom < 500) {
        this.$refs.imgDiv.style.zoom = zoom + "%";
      }
      return false;
    }
  }
};
</script>

<style scoped>
.left {
  position: relative;
  width: 800px;
  height: 460px;
  background-color: #fff;
  padding: 20px;
  float: left;
  overflow: hidden;
}
.img {
  position: absolute;
  top: 5px;
  left: 7px;
  max-width: 923px;
  max-height: 460px;
  cursor: move;
}
</style>