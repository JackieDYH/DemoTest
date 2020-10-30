<template>
  <baidu-map
    class="bm-view"
    :center="{ lng: 121.335473, lat: 31.248048 }"
    :zoom="18"
  >
    <bm-marker
      :position="{ lng: 121.335473, lat: 31.248048 }"
      :dragging="true"
      animation="BMAP_ANIMATION_BOUNCE"
    >
      <bm-label content="你好！" :labelStyle="{ color: 'red', fontSize: '24px' }" :offset="{ width: -35, height: 30 }"/>
    </bm-marker>
  </baidu-map>
</template>

<script>
export default {};
</script>

<style scoped>
.bm-view {
    width: 100%;
    height: 400px;
  }
</style>