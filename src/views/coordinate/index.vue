<template>
  <div>
    <div>
      <input id="input" type="text" placeholder="输入任意角度" />
      <button @click="submit">确定</button>
    </div>
    <canvas id="css"></canvas>
  </div>
</template>
<script>
export default {
  name: 'canvas_',
  data() {
    return {
      ccs: null,
      ccsContext: null,
    }
  },
  created() {
    this.main()
  },
  methods: {
    main() {
      this.ccs = document.querySelector('#css')
      // 设置画布的宽高
      this.ccs.width = 200
      this.ccs.height = 200
      this.ccsContext = this.ccs.getContext('2d')
      this.ccsContext.translate(this.ccs.width / 2, this.ccs.height / 2) // 使画布的起点向左移动 this.ccs.width / 2 像素，向下移动 this.ccs.height / 2 像素，使其起点位于画布中心
      // 画直线
      this.drawLine(this.ccsContext, 0, 0, this.ccs.width / 2, 0) // x轴正半轴
      this.drawLine(this.ccsContext, 0, 0, -this.ccs.width / 2, 0) // x轴负半轴
      this.drawLine(this.ccsContext, 0, 0, 0, this.ccs.height / 2) // y轴正半轴
      this.drawLine(this.ccsContext, 0, 0, 0, -this.ccs.height / 2) // y轴负半轴
      this.fillTriangle(this.ccsContext, this.ccs.width / 2 - 10, 5, this.ccs.width / 2, 0, this.ccs.width / 2 - 10, -5) // x轴箭头
      this.fillTriangle(
        this.ccsContext,
        5,
        this.ccs.height / 2 - 10,
        0,
        this.ccs.height / 2,
        -5,
        this.ccs.height / 2 - 10
      ) // y轴箭头
    },
    drawLine(canvasContext, x0, y0, x1, y1, color) {
      canvasContext.beginPath()
      canvasContext.moveTo(x0, -y0)
      canvasContext.lineTo(x1, -y1) // 画笔的终点，第一个参数表示向左移动 xx 像素，，第二个参数表示向下移动 yy 像素
      canvasContext.strokeStyle = color // 该样式需写在.stroke前面
      canvasContext.stroke()
    },
    fillTriangle(canvasContext, x0, y0, x1, y1, x2, y2, color) {
      canvasContext.beginPath()
      canvasContext.moveTo(x0, -y0)
      canvasContext.lineTo(x1, -y1)
      canvasContext.lineTo(x2, -y2)
      canvasContext.closePath()
      canvasContext.fillStyle = color
      canvasContext.fill()
    },
    drawAngles(angles, r = 30) {  
  // 遍历每个角度  
  angles.forEach(angle => {  
    this.drawAngle(angle, r);  
  });  
} ,
    drawAngle(angle = 30, r = 30) {
      // 画角度线
      this.drawLine(
        this.ccsContext,
        0,
        0,
        (this.ccs.height / 2) * Math.sin(this.getHud(angle)),
        (this.ccs.width / 2) * Math.cos(this.getHud(angle)),
        'red'
      )

      let l = Math.sqrt(25 + (this.ccs.height / 2 - 10) * (this.ccs.height / 2 - 10))
      let pAngle = 3

      this.fillTriangle(
        this.ccsContext,
        l * Math.sin(this.getHud(angle - pAngle)),
        l * Math.cos(this.getHud(angle - pAngle)),
        l * Math.sin(this.getHud(angle + pAngle)),
        l * Math.cos(this.getHud(angle + pAngle)),
        (this.ccs.height / 2) * Math.sin(this.getHud(angle)),
        (this.ccs.width / 2) * Math.cos(this.getHud(angle)),
        'red'
      ) // 角度线箭头

      // 画弧度
      // this.ccsContext.beginPath()
      // this.ccsContext.arc(0, 0, 20, this.hypotenuse(this.ccs.width / 2, 90 - angle), 1.5 * Math.PI, true)
      //画文字
      this.ccsContext.font = '10px Arial'
      //计算文字位置
      let radians = angle * (Math.PI / 90) //角度转弧度
      this.ccsContext.fillText(angle + '°', r * Math.sin(radians / 2) - 5, -(r * Math.cos(radians / 2) - 5))
      this.ccsContext.stroke()
    },
    hypotenuse(r, angle) {
      return (2 - angle / 180) * Math.PI
    },
    //换算角度对应的弧度
    getHud(angle) {
      return (angle / 180) * Math.PI
    },
    submit() {
      // this.ccsContext.clearRect(0, 0, this.ccs.width, this.ccs.height) //清除整个画布
      this.main() // 重新绘制直角坐标系
      // let value = document.getElementById('input').value * 1
      const angles = [120, 240, 360];  
      this.drawAngles(angles, 30); // 画角
    },
  },
}
</script>
<style lang="less" scope></style>
