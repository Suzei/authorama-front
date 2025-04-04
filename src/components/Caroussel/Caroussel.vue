<template>
  <div>
    <div ref="swiper" class="swiper">
      <div class="swiper-wrapper">
        <slot></slot>
        <!-- Slides -->
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
import { Swiper } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

export default {
  name: "carrousel-component",

  mounted() {
    new Swiper(this.$refs.swiper, {
      modules: [Navigation],
      slidesPerView: 3,
      spaceBetween: 8,
      autoplay: true,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },
};
</script>

<style lang="scss">
.swiper {
  margin: 0;
  display: flex;
  padding: 12px;
  overflow: hidden;
}

.swiper-wrapper {
  max-width: 450px;
}
</style>
