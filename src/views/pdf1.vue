<template>
  <div class="box">
    <a href="/">返回首页</a>
    <iframe :src="$route.query.url" class="iframe"></iframe>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$router.push({
      path: "pdf1",
      query: {
        url:
          "/pdf-dist/web/viewer.html?file=/xf.pdf"
      }
    });
  }
};
</script>

<style scoped>
.iframe {
  width: 100%;
  height: 100vh;
  border: 0;
  overflow: hidden;
  box-sizing: border-box;
}
</style>