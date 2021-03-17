<template>
  <div class="linechart">
    <v-tabs v-model="tab" background-color="white" fixed-tabs>
      <v-tab v-for="name in tabNames" :key="name">
        {{ name }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="obj in chartData" :key="obj.name">
        <v-card flat>
          <line-chart :chartData="obj.dataset" :options="obj.options" />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
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
    chartData: null
  },

  data() {
    return {
      tab: null,
      tabNames: ["น้ำหนักต่อส่วนสูง", "ส่วนสูงต่ออายุ", "น้ำหนักต่ออายุ"]
    };
  }
};
</script>
