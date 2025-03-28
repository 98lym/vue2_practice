<template>
  <div id="app">
    <div class="screen-container" :style="{ transform: `scale(${scale})`, transformOrigin: 'top left', left: leftOffset + 'px' }">
      <!-- 这里放置你的大屏内容 -->
      <div class="content">
        <h1>大屏适配示例</h1>
        <p>这是一个使用 scale 方法实现大屏适配的示例。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cs_123',
  data() {``
    return {
      designWidth: 1920,
      designHeight: 1080,
      scale: 1,
      leftOffset: 0
    };
  },
  mounted() { 
    this.setScale();
    window.addEventListener('resize', this.setScale);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setScale);
  },
  //    圭姓男子见此，冷笑了一声，只见其蓦然一拍自己天灵盖，身形略一模糊下，竟幻化出三个一般无二的分身来。

  methods: {
    setScale() {
      const clientWidth = window.innerWidth;
      const clientHeight = window.innerHeight;
      const scaleX = clientWidth / this.designWidth;
      const scaleY = clientHeight / this.designHeight;
      this.scale = Math.min(scaleX, scaleY);
      // 计算水平偏移量，使内容居中
      this.leftOffset = (clientWidth - this.designWidth * this.scale) / 2;
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.screen-container {
  width: 1920px;
  height: 1080px;
  position: relative;
  transform-origin: top left;
}

.content {
  padding: 50px;
}
</style>