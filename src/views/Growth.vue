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
      labels: [
        65,
        70,
        75,
        80,
        85,
        90,
        95,
        100,
        105,
        110,
        115,
        120,
        125,
        130,
        135,
        140,
        145,
        150,
        155,
        160,
        165,
        170,
        175,
        180
      ],
      datasets: [
        {
          order: 1,
          label: "อ้วน",
          //xAxisID: "bg-axis",
          data: [],
          function: function(x) {
            return (
              1.366806395185e-8 * x ** 5 +
              -9.5653247391115e-6 * x ** 4 +
              0.00253690390284887 * x ** 3 +
              -0.315154151226634 * x ** 2 +
              18.7458214444664 * x +
              -420.217111460421
            );
          },
          borderColor: "rgba(194, 139, 188, 1)",
          backgroundColor: "rgba(194, 139, 188, 1)",
          fill: "end",
          pointRadius: 0
        },

        {
          order: 1,
          label: "เริ่มอ้วน",
          //xAxisID: "bg-axis",
          data: [],
          function: function(x) {
            return (
              1.366806395185e-8 * x ** 5 +
              -9.5653247391115e-6 * x ** 4 +
              0.00253690390284887 * x ** 3 +
              -0.315154151226634 * x ** 2 +
              18.7458214444664 * x +
              -420.217111460421
            );
          },
          borderColor: "rgba(220, 193, 219, 1)",
          backgroundColor: "rgba(220, 193, 219, 1)",
          fill: 2,
          pointRadius: 0
        },

        {
          order: 1,
          label: "ท้วม",
          //xAxisID: "bg-axis",
          data: [],
          function: function(x) {
            return (
              3.31931320429852e-9 * x ** 5 +
              -2.98842511430644e-6 * x ** 4 +
              0.000927788622808723 * x ** 3 +
              -0.126283564449059 * x ** 2 +
              8.0758771227547 * x +
              -188.388755013751
            );
          },
          borderColor: "rgba(86, 180, 85, 1)",
          backgroundColor: "rgba(86, 180, 85, 1)",
          fill: 3,
          pointRadius: 0
        },

        {
          order: 1,
          label: "สมส่วน",
          //xAxisID: "bg-axis",
          data: [],
          function: function(x) {
            return (
              1.69932659832885e-10 * x ** 5 +
              -9.08936052721919e-7 * x ** 4 +
              0.000404177745509363 * x ** 3 +
              -0.0635562291365824 * x ** 2 +
              4.47615690235467 * x +
              -109.263078029879
            );
          },
          borderColor: "rgba(163, 207, 154, 1)",
          backgroundColor: "rgba(163, 207, 154, 1)",
          fill: 5,
          pointRadius: 0
        },

        {
          order: 1,
          label: "มัธยฐาน",
          //xAxisID: "bg-axis",
          data: [],
          function: function(x) {
            return (
              -1.0861816700514e-8 * x ** 5 +
              6.17939851033381e-6 * x ** 4 +
              -0.00134016632171863 * x ** 3 +
              0.141338208384202 * x ** 2 +
              -7.0796242380919 * x +
              141.056657986877
            );
          },
          borderColor: "rgba(255, 105, 97, 1)",
          backgroundColor: "rgba(255, 105, 97, 1)",
          fill: false,
          borderDash: [5, 10],
          pointRadius: 0
        },

        {
          order: 1,
          label: "ค่อนข้างผอม",
          //xAxisID: "bg-axis",
          data: [],
          function: function(x) {
            return (
              -6.64298976489714e-9 * x ** 5 +
              3.84042510400667e-6 * x ** 4 +
              -0.000842085704339437 * x ** 3 +
              0.0898898216508813 * x ** 2 +
              -4.51178915254834 * x +
              90.6637171701145
            );
          },
          borderColor: "rgba(207, 229, 201, 1)",
          backgroundColor: "rgba(207, 229, 201, 1)",
          fill: 6,
          pointRadius: 0
        },

        {
          order: 1,
          label: "ผอม",
          //xAxisID: "bg-axis",
          data: [],
          function: function(x) {
            return (
              -4.9304396905723e-9 * x ** 5 +
              2.85256005931363e-6 * x ** 4 +
              -0.000621031700138904 * x ** 3 +
              0.06576032092438 * x ** 2 +
              -3.23758175923896 * x +
              64.4960440391851
            );
          },
          borderColor: "rgba(249, 165, 27, 1)",
          backgroundColor: "rgba(249, 165, 27, 1)",
          fill: "origin",
          pointRadius: 0
        },

        {
          order: 0,
          label: "บันทึก",
          xAxisID: "fg-axis",
          data: [3, 4, 6, 8, 9, 10],
          borderColor: "rgba(255, 0, 0, 1)",
          fill: false
        }
      ]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        zoom: {
          pan: {
            // Boolean to enable panning
            enabled: true,

            // Panning directions. Remove the appropriate direction to disable
            // Eg. 'y' would only allow panning in the y direction
            mode: "xy"
          },
          // Container for zoom options
          zoom: {
            // Boolean to enable zooming
            enabled: true,

            // Zooming directions. Remove the appropriate direction to disable
            // Eg. 'y' would only allow zooming in the y direction
            mode: "xy"
          }
        }
      },
      scales: {
        xAxes: [
          {
            id: "bg-axis",
            type: "linear",
            position: "bottom",
            display: true,
            ticks: {
              min: 65,
              max: 180,
              stepSize: 5
            }
          },
          {
            id: "fg-axis",
            type: "linear",
            position: "bottom",
            display: false,
            ticks: {
              min: 65,
              max: 180,
              stepSize: 1
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 90
            }
          }
        ]
      }
    }
  })
};
</script>
