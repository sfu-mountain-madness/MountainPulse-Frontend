<template>
  <div class="chart-container">
    <div id="weatherData" style="min-width:300px;min-height:300px"></div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import echarts from 'echarts'
// import Echarts modulde to reduce the bundle size
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

export default {
  name: 'Chart',
  data() {
    return {
      weatherChart: null,
      weatherLimit: 10,
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
  },
  methods: {},
  apollo: {
    weather: {
      query: gql`query Weather($limit: Int!){
        weather(limit:$limit){
          temp,
          date
        }
      }`,
      variables() {
        return {
          limit: this.weatherLimit
        }
      },
      update: function (data) {
        const temp = data.weather.map(item => {
          return [item.date, item.temp]
        })
        this.weatherConfig.series[0].data = temp
        console.log(temp)
        // if (this.weatherChart) {
        //   this.weatherChart.setOption(this.weatherConfig)
        // }
        this.weatherChart.setOption(this.weatherConfig)
        return data.weather
      }
    }
  }

}
</script>

<style scoped>

</style>
