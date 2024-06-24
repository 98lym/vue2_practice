<template>
  <div id="container"></div>
</template>
<script>
import { Graph } from '@antv/g6'
import { data } from './config'
export default {
  name: 'flowChart',
  mounted() {
    const graph = new Graph({
      container: 'container',
      autoFit: 'view',
      data,
      node: {
        type: 'rect',
        style: {
          size: [60, 30],
          radius: 8,
          labelText: (d) => d.id,
          labelPlacement: 'center',
          ports: [{ placement: 'top' }, { placement: 'bottom' }],
        },
        palette: {
          field: (d) => d.combo,
        },
      },
      edge: {
        type: 'polyline',
        radius: 20,
        style: {
          lineWidth: 2,
          endArrow: true,
          stroke: '#87e8de',
        },
      },
      combo: {
        type: 'rect',
        // padding: [10, 20, 30, 40],
        style: {
          radius: 8,
          fill: 'gray',
          // labelText: (d) => d.id,
          stroke: '#e6e6e6',
          collapsedLineDash: [5, 5],
        },
      },
      layout: {
        type: 'antv-dagre',
        ranksep: 50,
        nodesep: 5,
        sortByCombo: true,
      },
      // behaviors: ['drag-element', 'drag-canvas', 'zoom-canvas'],
    })

    
    graph.render()
  },
}
</script>
<style lang="less" scope></style>
