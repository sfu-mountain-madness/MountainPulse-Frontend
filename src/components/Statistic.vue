<template>
  <div class='chart-container'>
    <div id='weatherData' style='min-width:300px;min-height:300px'></div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import echarts from 'echarts'
// import Echarts modulde to reduce the bundle size
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

export default {
  name: 'Statistic',
  data() {
    return {
      weatherChart: null,
      weatherLimit: 10,
      weatherConfig: {
        title: {
          text: 'Weather'
        },
        tooltip: {
          trigger: 'axis'
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
          symbol: 'triangle',
          symbolSize: 10,
          lineStyle: {
            normal: {
              color: 'green',
              width: 2,
              type: 'dashed'
            }
          },
          itemStyle: {
            normal: {
              borderWidth: 2,
              borderColor: '#77777',
              color: '#b3b3ff'
            }
          },
          data: []
        }],
        weather: null
      }
    }
  },
  mounted: function () {
    this.weatherChart = echarts.init(document.getElementById('weatherData'))
    this.weatherChart.setOption(this.weatherConfig)
    // this.weatherChart.on('click', function (params) {
    //   console.log('clicked')
    //   // change the line style
    //   this.dispatchAction({
    //     type: 'highlight',
    //     seriesIndex: params.seriesIndex
    //   })
    //   this.dispatchAction({
    //     type: 'downlight',
    //     seriesIndex: params.seriesIndex
    //   })
    // })
  },
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
        console.log(data)
        const temp = data.weather.map(item => {
          return [item.date, item.temp]
        })
        this.weatherConfig.series[0].data = temp
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
