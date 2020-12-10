<template>
  <div class="image">
    <!-- 懒加载 -->
    <img class="preview" v-lazy="img" />

    <div v-for="(item, index) in imags" :key="index">
      <div class="progressive">
        <img class="preview" v-progressive="item.preview" :src="item.src" />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("../assets/image/img03.jpg"),
      imags: [
        {
          src: require("../assets/image/img01.jpg"), //小
          preview: require("../assets/image/img02.jpg"), //大
        },
        {
            src:require('../assets/image/img01.jpg'),
            preview:require('../assets/image/img03.jpg'),
        }
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.preview {
  width: 100%;
}
</style>