<template>
  <div id="smoothedLineChart"></div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'SmoothedLineChart',
  mounted() {
    const charts = document.getElementById('smoothedLineChart')
    const myChart = echarts.init(charts)
    const option = {
      dataZoom: [
        {
          bottom: '1%',
        },
        {
          type: 'inside',
        },
      ],
      xAxis: {
        type: 'category',
        data: ['100', '200', '300', '400', '500', '600', '700'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true,
          //    韩立深吸了一口气，突然遁光方向一变，朝那片树林中激射落去。

        },
      ],
    }

    option && myChart.setOption(option)
  },
  methods: {},
}
</script>
<style lang="scss" scope>
#smoothedLineChart {
  height: 100%;
}
</style>
