<template>
  <div class="swiper-slide d-flex flex-column align-items-center">
    <div
      class="rounded-circle avatar-container"
      :style="{ 'background-image': `url('${avatar_image}')` }"
    ></div>
    <span>J.R Tolkien</span>
  </div>
</template>

<script>
export default {
  name: "author-avatar",
  props: ["avatar_image"],
};
</script>

<style lang="scss">
.avatar-container {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 90px;
  width: 90px;
}
</style>
