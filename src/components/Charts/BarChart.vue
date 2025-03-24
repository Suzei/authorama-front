<template>
  <bar id="bar-chart" :data="chartData"></bar>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import { Bar } from "vue-chartjs";
ChartJS.register(Title, BarElement, CategoryScale, LinearScale);

export default {
  name: "bar-chart",
  props: ["labels", "data"],
  components: {
    Bar,
  },

  data: () => {
    return {
      chartData: {
        labels: ["January", "February", "March", "1", "2", "3", "4"],
        datasets: [{ data: [40, 20, 12, 19, 20, 21, 22] }],
      },
    };
  },
};
</script>

<style></style>
