<template>
  <div class='chart-container'>
    <div id='weatherData' style='min-width:90%;min-height:300px'></div>
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
      weatherLimit: 30,
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
          type: 'time',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value'
        },
        toolbox: {
          left: 'center',
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: [{
          startValue: '2018-02-06'
        }, {
          type: 'inside'
        }],
        visualMap: {
          top: 10,
          right: 10,
          show: false,
          pieces: [{
            gt: 0,
            lte: 5,
            color: '#096'
          }, {
            gt: 5,
            lte: 10,
            color: '#ffde33'
          }, {
            gt: 10,
            lte: 15,
            color: '#ff9933'
          }, {
            gt: 15,
            lte: 20,
            color: '#cc0033'
          }, {
            gt: 20,
            lte: 25,
            color: '#660099'
          }, {
            gt: 30,
            color: '#7e0023'
          }],
          outOfRange: {
            color: '#999'
          }
        },
        series: [{
          type: 'line',
          symbol: 'circle',
          symbolSize: 5,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          itemStyle: {
            normal: {
              borderWidth: 1,
              borderColor: '#77777',
              color: '#b3b3ff'
            }
          },
          data: []
          // markLine: {
          //   silent: true,
          //   data: [{
          //     yAxis: 0
          //   }, {
          //     yAxis: 3
          //   }, {
          //     yAxis: 6
          //   }, {
          //     yAxis: 8
          //   }, {
          //     yAxis: 10
          //   }]
          // }
        }],
        weather: null
      }
    }
  },
  mounted: function () {
    this.weatherChart = echarts.init(document.getElementById('weatherData'))
    this.weatherChart.setOption(this.weatherConfig)
    let self = this
    window.addEventListener(
      'onorientationchange' in window ? 'orientationchange' : 'resize', function () {
        console.log('event happened')
        self.weatherChart.resize()
      }
    )
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
.chart-container {
  padding-top: 40px;
  display: flex;
  justify-content: center;
}
</style>
