<template>
  <card
    :card_title="last_release && 'Balanço'"
    :icon="last_release && 'bi bi-currency-dollar'"
  >
    <div class="row col-12">
      <div v-if="!last_release">
        <span>Último lançamento - As aventuras de Pi</span>
        <div class="d-flex flex-column">
          <h2 class="mb-0">{{ 3020 | formatCurrency }} - <span>A semana</span></h2>
          <div class="chart-bar">
            <bar-chart></bar-chart>
          </div>
        </div>
      </div>

      <div class="col-7" v-else>
        <h4>Não há balanço</h4>
        <p>
          Demonstre interesse em lançar uma obra e faça valer a pena seu investimento!
        </p>
        <button class="btn btn-primary">Lançar obra</button>
      </div>
    </div>
  </card>
</template>

<script>
import BarChart from "../Charts/BarChart.vue";
import Card from "./Card.vue";

export default {
  name: "balance-card",
  props: ["last_release"],
  components: {
    Card,
    BarChart,
  },
  data: () => {
    return {};
  },
};
</script>

<style></style>
