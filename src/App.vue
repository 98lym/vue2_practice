<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // background: url('@/assets/ceremonial2.jpg') no-repeat;
  // background-size: 100%;
}
// TODO: 背景磨砂效果
/* #app::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('@/assets/ceremonial2.jpg') no-repeat;
  background-size: 100%;
  filter: blur(8px);
  opacity: 0.6;
  z-index: -1;
} */
</style>
