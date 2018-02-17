<template>
  <div class="chart-container">
    <div id="weatherData" style="min-width:300px;min-height:300px"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
// import Echarts modulde to reduce the bundle size
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

export default {
  name: 'Chart.vue',
  data() {
    return {
      weatherChart: null,
      weatherConfig: {
        title: {
          text: 'Weather'
        },
        tooltip: {
        },
        legend: {
          data: ['Temperature']
        },
        xAxis: {
          type: 'time'
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          type: 'line',
          data: []
        }, {
          type: 'line',
          data: []
        }],
        weather: null
      }
    }
  },
  mounted: function () {
    this.weatherChart = echarts.init(document.getElementById('weatherData'))
    this.weatherChart.setOption(this.weatherConfig)
  }
}
</script>

<style scoped>

</style>
