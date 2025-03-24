<template>
  <div class="fadeIn h-100 col-12 w-100 col-6 p-4 border-2 shadow bg-white">
    <h4 class="d-flex gap-2"><i :class="icon"></i>{{ card_title }}</h4>
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: "card-component",
  props: ["card_title", "icon"],
  data: () => {
    return {};
  },
};
</script>

<style>
.fadeIn {
  animation: fadeIn 1s ease-in-out;
}
</style>
