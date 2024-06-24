<template>
  <div>
    <button class="btn" @click="change">切换数据</button>
    <div class="parentContent" ref="parentContent">
      <div id="container" ref="container"></div>
    </div>
  </div>
</template>
<script>
import G6 from '@antv/g6'
import { data } from './config'
export default {
  name: 'as_asd',
  data() {
    return {
      flowData: data,
      graph: undefined, // new G6
      canvasWidth: 0, // 画布宽度
      canvasHeight: 0, // 画布高度
    }
  },
  created() {},
  mounted() {
    this.initSize()
    this.$nextTick(() => {
      this.getFlow()
    })
  },
  methods: {
    change() {
      let data = {
        nodes: [
          {
            comboId: 'combo1',
            id: 'node1',
            nodeId: '1000000346212222',
            anchorPoints: [
              [0.5, 1],
              [0.5, 0],
            ],
          },
          {
            comboId: 'combo1',
            id: 'node2',
            anchorPoints: [
              [0.5, 1],
              [0.5, 0],
            ],
          },
          {
            comboId: 'combo1',
            id: 'node3',
            anchorPoints: [
              [0.5, 1],
              [0.5, 0],
            ],
          },
        ],
        edges: [],
        combos: [
          {
            id: 'combo1',
            // fixSize:  [600,100]
          },
        ],
      }
      this.graph.changeData(data)
    },
    test() {
      console.log('asdsa')
    },
    initSize() {
      const self = this // 因为箭头函数会改变this指向，指向windows。所以先把this保存
      setTimeout(() => {
        // todo 浏览器窗口发生变化时
        window.onresize = function () {
          // todo 获取div parentContent 的宽度和高度
          this.canvasWidth = self.$refs.parentContent.clientWidth
          this.canvasHeight = self.$refs.parentContent.clientHeight
          // todo 修改画布的大小
          self.graph.changeSize(this.canvasWidth, this.canvasHeight)
          // todo 将图移动到画布中心位置
          self.graph.fitCenter()
        }
      }, 20)
    },
    getFlow() {
      const lineDash = [4, 2, 1, 2]
      G6.registerEdge('hvh', {
        draw(cfg, group) {
          const startX = cfg.startPoint.x
          const startY = cfg.startPoint.y
          const endX = cfg.endPoint.x
          const endY = cfg.endPoint.y
          const startPoint = { x: startX, y: startY }
          const endPoint = { x: endX, y: endY }
          // 计算垂直方向上的三分之一位置
          const thirdY = startY + (endY - startY) / 3
          // 判断是向左还是向右拐
          const isLeftTurn = startPoint.x > endPoint.x
          // 计算水平偏移量，即两个节点x坐标的差值
          const horizontalOffset = Math.abs(startPoint.x - endPoint.x)
          // 计算弧度开始的角度（这里只是一个示例值，你需要根据实际需要计算）
          const shape = group.addShape('path', {
            attrs: {
              path: [
                ['M', startPoint.x, startPoint.y], // 移动到起始点
                ['L', startPoint.x, thirdY], // 垂直移动到三分之一处
                // 根据isLeftTurn决定向左还是向右拐
                ...(isLeftTurn
                  ? [['L', startPoint.x - horizontalOffset, thirdY]] // 向左拐
                  : [['L', startPoint.x + horizontalOffset, thirdY]]), // 向右拐
                // 假设这里我们直接垂直向下到结束点（为了简化示例）
                ['L', endPoint.x, endPoint.y],
              ],
              stroke: 'steelblue',
              radius: 10,
              endArrow: true,
            },
            // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
            name: 'path-shape',
          })
          return shape
        },
        afterDraw(cfg, group) {
          // get the first shape in the group, it is the edge's path here=
          const shape = group.get('children')[0]
          let index = 0
          // Define the animation
          shape.animate(
            () => {
              index++
              if (index > 15) {
                index = 0
              }
              const res = {
                lineDash,
                lineDashOffset: -index,
              }
              // returns the modified configurations here, lineDash and lineDashOffset here
              return res
            },
            {
              repeat: true, // whether executes the animation repeatly
              duration: 3000, // the duration for executing once
            }
          )
        },
      })
      G6.registerNode(
        'dom-node',
        {
          draw: (cfg, group) => {
            group.addShape('text', {
              attrs: {
                text: '节点信息',
                fill: 'skyblue',
                x: 85,
                y: 0,
                fontWeight: 400,
                opacity: 0,
                shadowColor: 'blue',
              },
              name: 'circle-shape',
            })
            return group.addShape('dom', {
              attrs: {
                width: 120,
                height: 100,
                // 传入 DOM 的 html
                html: `
        <div class="custom-node">
      <img class="img"  src="${require('./imgs/dianwangdianbiao.svg')}" alt="" />
      <div class="data-box">
      <div class="title">PAP：<span class="span-data">2kwh</span></div>
      <div class="title">RAP：<span class="span-data">2kwh</span></div>
      </div>
    <div class="nodeId">${cfg.id}</div>
    </div>
          `,
              },
              name: 'dom-node-keyShape', // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
              draggable: true,
            })
          },
        },
        'single-node'
      )
      this.canvasWidth = this.$refs.parentContent.clientWidth
      this.canvasHeight = this.$refs.parentContent.clientHeight
      this.graph = new G6.Graph({
        container: 'container',
        width: this.canvasWidth,
        height: this.canvasHeight,
        modes: {
          default: [
            'drag-combo',
            'drag-node',
            'drag-canvas',
            {
              type: 'collapse-expand-combo',
              relayout: false,
            },
          ],
        },
        renderer: 'svg',
        defaultNode: {
          type: 'dom-node',
        },
        defaultEdge: {
          type: 'hvh',
        },
        groupByTypes: false,
        defaultCombo: {
          type: 'rect',
          style: {
            fill: '#efefef',
            radius: 8,
            lineWidth: 2,
            stroke: '#e6e6e6',
          },
        },
        layout: {
          type: 'dagre',
          ranksep: 50,
          nodesepFunc: (d) => {
            if (d.comboId === 'combo3') {
              return 20
            }
            return 20
          },
          controlPoints: true,
          sortByCombo: true,
        },
      })

      this.graph.data(this.flowData)

      this.graph.render()
      this.graph.on('node:click', (evt) => {
        console.log(evt, 'evt==')
        this.test()
      })
    },
  },
}
</script>
<style lang="scss" scope>
.btn {
  position: relative;
  z-index: 999;
}
.parentContent {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.custom-node {
  display: flex;
  justify-content: center;
  position: relative;
  .img {
    height: 70px;
  }
  .data-box {
    position: absolute;
    bottom: -15px;
    border-radius: 5px;
    background-color: #edfafb;
    border: 1px solid #999999;
    padding: 2px 3px;
    .title {
      font-size: 11px;
      color: #999999;
      .span-data {
        color: #39969a;
      }
    }
  }
  .nodeId {
    font-size: 14px;
    position: absolute;
    bottom: -33px;
  }
}
</style>
