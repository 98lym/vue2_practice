<template>
  <div id="chart" style="width: 1200px; height: 400px"></div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'singleXAxisDualLineChart',
  mounted() {
    this.renderChart()
  },
  methods: {
    renderChart() {
      let chartElement = document.getElementById('chart')
      let chart = echarts.init(chartElement)
      // 生成1分钟一个点的日期数组
      let dates1Min = this.generateDates(1, 1440)
      // 生成两组时间段的数据数组
      let data15Mins = Array(1440).fill(null)
      for (let i = 0; i < dates1Min.length; i += 15) {
        data15Mins[i] = Math.floor(Math.random() * 1000)
      }
      let data1Min = this.generateData(dates1Min)

      let option = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['15分钟数据', '1分钟数据'],
        },
        dataZoom: [
          {
            bottom: '1%',
          },
          {
            type: 'inside',
          },
        ],
        xAxis: [
          {
            type: 'category',
            data: dates1Min, // 使用1分钟一个点的日期数组作为x轴数据
          },
        ],
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '15分钟数据',
            type: 'line',
            connectNulls: true, // 用于指定是否连接空值（null）点之间的线条
            data: data15Mins, // 使用15分钟一个点的数据数组作为折线数据
          },
          {
            name: '1分钟数据',
            type: 'line',
            data: data1Min, // 使用1分钟一个点的数据数组作为折线数据
            lineStyle: {
              type: 'dashed', // 或者可以改为 'dotted'
            },
          },
        ],
      }

      chart.setOption(option)
    },
    generateDates(interval, length) {
      let startDate = new Date() // 当前日期
      startDate.setHours(0, 0, 0) // 将小时、分钟和秒设置为0
      let dates = []
      for (let i = 0; i < length; i++) {
        let date = new Date(startDate.getTime() + i * interval * 60 * 1000)
        // 将日期转换为可读的时间字符串，不包含秒
        dates.push(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
      }
      return dates
    },
    generateData(dates) {
      return dates.map(() => Math.floor(Math.random() * 1000)) // 生成随机数据
    },
  },
}
</script>
<style lang="scss" scope></style>
