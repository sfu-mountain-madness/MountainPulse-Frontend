<template>
  <div class='chart-container'>
    <div id='weatherData' style='min-width:90%;min-height:350px'></div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import echarts from 'echarts'
// import Echarts modulde to reduce the bundle size
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
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
          data: ['Temperature', 'Humidity'],
          x: 'left'
        },
        axisPointer: {
          link: { xAxisIndex: 'all' }
        },
        grid: [{
          left: 50,
          right: 50,
          height: '20%'
        }, {
          left: 50,
          right: 50,
          top: '60%',
          height: '20%'
        }],
        xAxis: [{
          type: 'time',
          boundaryGap: false
        },
        {
          // show: false,
          gridIndex: 1,
          type: 'time',
          boundaryGap: false
          // position: 'top'
        }],
        yAxis: [{
          name: 'temperature(`C)',
          type: 'value'
        },
        {
          gridIndex: 1,
          name: 'humidity(%)',
          type: 'value'
          // inverse: true
        }],
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
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
          },
          {
            type: 'inside',
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
          }
        ],
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
          name: 'temperature',
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
        },
        {
          name: 'humidity',
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
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: []
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
          date,
          humidity
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
        const humi = data.weather.map(item => {
          return [item.date, item.humidity]
        })
        this.weatherConfig.series[0].data = temp
        this.weatherConfig.series[1].data = humi
        if (this.weatherChart) {
          this.weatherChart.setOption(this.weatherConfig)
        }
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
