<template>
  <router-link
    to="/"
    class="swiper-slide author gap-1 d-flex flex-column align-items-center"
  >
    <div
      class="rounded-circle avatar-container"
      :style="{ 'background-image': `url('${author.avatar_image}')` }"
    ></div>
    <span>{{ author.name }}</span>
    <b>{{ author.workCount | workPhrase }}</b>
  </router-link>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "author-avatar",
  props: ["author"],
  components: {
    RouterLink,
  },

  filters: {
    workPhrase(value) {
      if (!value) return;
      return `${value} obras`;
    },
  },
};
</script>

<style lang="scss">
a {
  text-transform: none;
  text-decoration: none;
  color: black;
}
.avatar-container {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 90px;
  width: 90px;
}

.author {
  max-width: 100px;
}
</style>
