import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ["options"],
  mounted() {
    //https://stackoverflow.com/questions/40086575/chart-js-draw-mathematical-function/40128171
    //process mathematical function and put results in data[]
    this.addPlugin({
      id: "plot-function",
      beforeInit: function(chart) {
        // We get the chart data
        var data = chart.config.data;

        // For every dataset ...
        for (var i = 0; i < data.datasets.length - 1; i++) {
          // For every label ...
          for (var j = 0; j < data.labels.length; j++) {
            // We get the dataset's function and calculate the value
            var fct = data.datasets[i].function,
              x = data.labels[j],
              y = fct(x);
            // Then we add the value to the dataset data
            data.datasets[i].data.push(y);
          }
        }
      }
    });
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options);
  }
};
