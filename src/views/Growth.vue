<template>
  <v-row class="ma-1">
    <v-col cols="8">
      <growth-chart :chartData="dataset" :options="options" />
    </v-col>

    <v-spacer />

    <v-col cols="4" align-self="center">
      <v-card height="80%"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.</v-card
      >
    </v-col>
  </v-row>
</template>

<script>
import GrowthChart from "../components/GrowthChart.vue";

export default {
  components: {
    GrowthChart
  },

  name: "Growth",

  data: () => ({
    dataset: {
      labels: [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110],
      datasets: [
        {
          order: 1,
          label: "Fat",
          data: [],
          function: function(x) {
            return (
              -5.9518225697293e-8 * x ** 5 +
              2.46907279656781e-5 * x ** 4 +
              -0.00395812764617212 * x ** 3 +
              0.30641197569641 * x ** 2 +
              -11.153781048658 * x +
              155.122016276914
            );
          },
          borderColor: "rgba(194, 139, 188, 1)",
          backgroundColor: "rgba(194, 139, 188, 1)",
          fill: 1,
          pointRadius: 0
        },

        {
          order: 1,
          label: "Plump",
          data: [],
          function: function(x) {
            return (
              -5.15795453924416e-8 * x ** 5 +
              2.13385276887837e-5 * x ** 4 +
              -0.00341493379138564 * x ** 3 +
              0.264120680898411 * x ** 2 +
              -9.59399177193072 * x +
              133.054999572298
            );
          },
          borderColor: "rgba(220, 193, 219, 1)",
          backgroundColor: "rgba(220, 193, 219, 1)",
          fill: 2,
          pointRadius: 0
        },

        {
          order: 1,
          label: "Good",
          data: [],
          function: function(x) {
            return (
              -4.85083960812869e-8 * x ** 5 +
              2.01037925493644e-5 * x ** 4 +
              -0.00322169194820089 * x ** 3 +
              0.249415540164954 * x ** 2 +
              -9.06123874594332 * x +
              125.577035289425
            );
          },
          borderColor: "rgba(86, 180, 85, 1)",
          backgroundColor: "rgba(86, 180, 85, 1)",
          fill: 3,
          pointRadius: 0
        },

        {
          order: 1,
          label: "Median",
          data: [],
          function: function(x) {
            return (
              -5.26647371830224e-8 * x ** 5 +
              2.14485275617631e-5 * x ** 4 +
              -0.00339316809288295 * x ** 3 +
              0.260280061790564 * x ** 2 +
              -9.43676892895437 * x +
              131.036954746852
            );
          },
          borderColor: "rgba(163, 207, 154, 1)",
          backgroundColor: "rgba(163, 207, 154, 1)",
          fill: 4,
          pointRadius: 0
        },

        {
          order: 1,
          label: "Slim",
          data: [],
          function: function(x) {
            return (
              -4.94646566184602e-8 * x ** 5 +
              1.98562403848158e-5 * x ** 4 +
              -0.00310262981534567 * x ** 3 +
              0.235488440469317 * x ** 2 +
              -8.46301039382853 * x +
              116.555612932656
            );
          },
          borderColor: "rgba(181, 215, 172, 1)",
          backgroundColor: "rgba(181, 215, 172, 1)",
          fill: 5,
          pointRadius: 0
        },

        {
          order: 1,
          label: "Very Slim",
          data: [],
          function: function(x) {
            return (
              -4.66666403118437e-8 * x ** 5 +
              1.86702967880461e-5 * x ** 4 +
              -0.00290670270412127 * x ** 3 +
              0.219712047396321 * x ** 2 +
              -7.85190519008216 * x +
              107.38223960749
            );
          },
          borderColor: "rgba(249, 165, 27, 1)",
          backgroundColor: "rgba(249, 165, 27, 1)",
          fill: "origin",
          pointRadius: 0
        },

        {
          order: 0,
          label: "Growth",
          data: [3, 4, 6, 8, 9, 10],
          borderColor: "rgba(255, 0, 0, 1)",
          fill: false
        }
      ]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  })
};
</script>
