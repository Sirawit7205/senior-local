<template>
  <v-row class="ma-1">
    <v-col cols="8">
      <growth-chart :chartData="chartData" />
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
    chartData: {
      data1: {
        name: "น้ำหนักต่อส่วนสูง",
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
              //xAxisID: "fg-axis",
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
          }
        }
      },
      data2: {
        name: "ส่วนสูงต่ออายุ",
        dataset: {
          labels: [
            48,
            60,
            72,
            84,
            96,
            108,
            120,
            132,
            144,
            156,
            168,
            180,
            192,
            204,
            216
          ],
          datasets: [
            {
              order: 1,
              label: "สูง",
              //xAxisID: "bg-axis",
              data: [],
              function: function(x) {
                return (
                  2.86396017483551e-9 * x ** 5 +
                  -2.05689050294795e-6 * x ** 4 +
                  0.000542324906549704 * x ** 3 +
                  -0.06560975665901 * x ** 2 +
                  4.12726131666487 * x +
                  14.5994591957178
                );
              },
              borderColor: "rgba(194, 139, 188, 1)",
              backgroundColor: "rgba(194, 139, 188, 1)",
              fill: "end",
              pointRadius: 0
            },

            {
              order: 1,
              label: "ค่อนข้างสูง",
              //xAxisID: "bg-axis",
              data: [],
              function: function(x) {
                return (
                  2.86396017483551e-9 * x ** 5 +
                  -2.05689050294795e-6 * x ** 4 +
                  0.000542324906549704 * x ** 3 +
                  -0.06560975665901 * x ** 2 +
                  4.12726131666487 * x +
                  14.5994591957178
                );
              },
              borderColor: "rgba(86, 180, 85, 1)",
              backgroundColor: "rgba(86, 180, 85, 1)",
              fill: 2,
              pointRadius: 0
            },

            {
              order: 1,
              label: "ตามเกณฑ์",
              //xAxisID: "bg-axis",
              data: [],
              function: function(x) {
                return (
                  1.9498734490519e-9 * x ** 5 +
                  -1.48481261852098e-6 * x ** 4 +
                  0.000408976468984735 * x ** 3 +
                  -0.0512509002560258 * x ** 2 +
                  3.40642916910564 * x +
                  25.9888222362985
                );
              },
              borderColor: "rgba(163, 207, 154, 1)",
              backgroundColor: "rgba(163, 207, 154, 1)",
              fill: 4,
              pointRadius: 0
            },

            {
              order: 1,
              label: "มัธยฐาน",
              //xAxisID: "bg-axis",
              data: [],
              function: function(x) {
                return (
                  -2.32014627954379e-10 * x ** 5 +
                  -1.14385005317259e-7 * x ** 4 +
                  8.72793755202433e-5 * x ** 3 +
                  -0.0160813119166954 * x ** 2 +
                  1.58179724346008 * x +
                  55.3276577565887
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
              label: "ค่อนข้างเตี้ย",
              //xAxisID: "bg-axis",
              data: [],
              function: function(x) {
                return (
                  -2.69732445355004e-9 * x ** 5 +
                  1.51455221861004e-6 * x ** 4 +
                  -0.000313671597060951 * x ** 3 +
                  0.0295291519445572 * x ** 2 +
                  -0.842128476527616 * x +
                  96.9759440245142
                );
              },
              borderColor: "rgba(207, 229, 201, 1)",
              backgroundColor: "rgba(207, 229, 201, 1)",
              fill: 5,
              pointRadius: 0
            },

            {
              order: 1,
              label: "เตี้ย",
              //xAxisID: "bg-axis",
              data: [],
              function: function(x) {
                return (
                  -3.26122386673405e-9 * x ** 5 +
                  1.90872896869063e-6 * x ** 4 +
                  -0.000415827370085836 * x ** 3 +
                  0.041765930023465 * x ** 2 +
                  -1.53284123429997 * x +
                  109.466066107458
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
              //xAxisID: "fg-axis",
              data: [103, 110, 115, 123, 128, 130],
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
          }
        }
      },
      data3: {
        name: "น้ำหนักต่ออายุ",
        dataset: {
          labels: [
            48,
            60,
            72,
            84,
            96,
            108,
            120,
            132,
            144,
            156,
            168,
            180,
            192,
            204,
            216
          ],
          datasets: [
            {
              order: 1,
              label: "มากเกินเกณฑ์",
              //xAxisID: "bg-axis",
              data: [],
              function: function(x) {
                return (
                  1.33024717377039e-9 * x ** 5 +
                  -8.71581657026275e-7 * x ** 4 +
                  0.000201097386951477 * x ** 3 +
                  -0.0197180454614641 * x ** 2 +
                  1.11027605414993 * x +
                  -4.70379025183477
                );
              },
              borderColor: "rgba(194, 139, 188, 1)",
              backgroundColor: "rgba(194, 139, 188, 1)",
              fill: "end",
              pointRadius: 0
            },

            {
              order: 1,
              label: "ค่อนข้างมาก",
              //xAxisID: "bg-axis",
              data: [],
              function: function(x) {
                return (
                  1.33024717377039e-9 * x ** 5 +
                  -8.71581657026275e-7 * x ** 4 +
                  0.000201097386951477 * x ** 3 +
                  -0.0197180454614641 * x ** 2 +
                  1.11027605414993 * x +
                  -4.70379025183477
                );
              },
              borderColor: "rgba(86, 180, 85, 1)",
              backgroundColor: "rgba(86, 180, 85, 1)",
              fill: 2,
              pointRadius: 0
            },

            {
              order: 1,
              label: "ตามเกณฑ์",
              //xAxisID: "bg-axis",
              data: [],
              function: function(x) {
                return (
                  1.10681447412296e-9 * x ** 5 +
                  -7.75086279219554e-7 * x ** 4 +
                  0.000192437239365984 * x ** 3 +
                  -0.0206119214488482 * x ** 2 +
                  1.22744680138769 * x +
                  -9.17751483415105
                );
              },
              borderColor: "rgba(163, 207, 154, 1)",
              backgroundColor: "rgba(163, 207, 154, 1)",
              fill: 4,
              pointRadius: 0
            },

            {
              order: 1,
              label: "มัธยฐาน",
              //xAxisID: "bg-axis",
              data: [],
              function: function(x) {
                return (
                  8.33328464093082e-13 * x ** 5 +
                  -1.56982256281568e-7 * x ** 4 +
                  7.25412024883813e-5 * x ** 3 +
                  -0.0106666894862369 * x ** 2 +
                  0.786834848011703 * x +
                  -4.20197412959776
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
              label: "ค่อนข้างน้อย",
              //xAxisID: "bg-axis",
              data: [],
              function: function(x) {
                return (
                  -1.73609069762693e-9 * x ** 5 +
                  9.70406451665915e-7 * x ** 4 +
                  -0.00019799194022137 * x ** 3 +
                  0.0188054550785176 * x ** 2 +
                  -0.703059076833327 * x +
                  21.0655898786078
                );
              },
              borderColor: "rgba(207, 229, 201, 1)",
              backgroundColor: "rgba(207, 229, 201, 1)",
              fill: 5,
              pointRadius: 0
            },

            {
              order: 1,
              label: "น้อยกว่าเกณฑ์",
              //xAxisID: "bg-axis",
              data: [],
              function: function(x) {
                return (
                  -2.25325481361506e-9 * x ** 5 +
                  1.32042117339969e-6 * x ** 4 +
                  -0.00028582749459011 * x ** 3 +
                  0.0289236162594226 * x ** 2 +
                  -1.25570291888959 * x +
                  31.6598528509294
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
              //xAxisID: "fg-axis",
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
          }
        }
      }
    }
  })
};
</script>
