<template>
  <card card_title="Vendas" icon="bi bi-bar-chart">
    <line-chart></line-chart>
  </card>
</template>

<script>
import LineChart from "../Charts/LineChart.vue";
import Card from "./Card.vue";
export default {
  name: "book-chart",
  components: {
    Card,
    LineChart,
  },
};
</script>

<style></style>
