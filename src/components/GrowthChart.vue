<template>
  <div class="linechart">
    <line-chart :chartData="chartData" :options="options" />
  </div>
</template>

<style scoped>
.linechart {
  background-color: #f5f5f5;
  max-width: 800px;
  margin: 30px auto;
}
</style>

<script>
import LineChart from "./LineChartRenderer.js";

export default {
  components: {
    LineChart
  },

  props: {
    chartData: null,
    options: null
  }
};
</script>
