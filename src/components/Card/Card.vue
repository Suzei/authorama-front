<template>
  <div class="fadeIn col-12 w-100 row p-4 border-2 shadow bg-white">
    <slot>
      <h4><i :class="icon"></i>{{ card_title }}</h4>
    </slot>
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
