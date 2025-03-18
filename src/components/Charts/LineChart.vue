<template>
  <line-chart-component id="chart-line" :data="chartData"></line-chart-component>
</template>

<script>
import { Chart as ChartJS, LineElement, CategoryScale, PointElement } from "chart.js";

import { Line as LineChart } from "vue-chartjs";
ChartJS.register(LineElement, CategoryScale, PointElement);

export default {
  name: "line-chart",
  components: {
    LineChartComponent: LineChart,
  },

  data: () => {
    return {
      chartData: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 39, 10, 40, 39, 80, 40],
          },
        ],
      },
    };
  },
};
</script>

<style></style>
