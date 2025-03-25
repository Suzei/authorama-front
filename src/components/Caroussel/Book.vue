<template>
  <div class="swiper-slide swiper-book">
    <img :src="image" />
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "book-component",
  props: ["name", "image"],
  data: () => {
    return {
      work: null,
    };
  },
};
</script>

<style lang="scss">
.swiper-book {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;

  span {
    text-align: center;
    max-width: 100%;
    white-space: normal;
    word-wrap: break-word;
  }

  img {
    width: 100%;
    height: 300px;
  }
}
</style>
