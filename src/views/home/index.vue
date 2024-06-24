<template>
  <div class="home">
    <div class="modules" v-for="{ key, name } in routers" :key="key" @click="goModules(name)">{{ name }}</div>
  </div>
</template>
<script>
import { routers } from './config'
export default {
  name: 'Home_',
  data() {
    return {
      routers,
    }
  },
  methods: {
    goModules(path) {
      this.$router.push(`./${path}`)
    },
  },
}
</script>
<style lang="scss" scope>
.home {
  display: flex;
  height: 100%;
  box-sizing: border-box; // 将 padding 和 border 包含在元素的总宽度和高度内，从而不影响元素的大小
  padding: 20px;
  background: url('@/assets/ceremonial2.jpg') no-repeat;
  background-size: cover;
  .modules {
    min-width: 100px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    cursor: pointer;
    user-select: none;
    border-radius: 20px;
    margin-right: 20px;
    background-color: skyblue;
    z-index: 99;
  }
  .modules:hover {
    box-shadow: 2px 2px 4px 2px black;
  }
}
// TODO: 背景磨砂效果
.home::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('@/assets/ceremonial2.jpg') no-repeat;
  background-size: cover;
  filter: blur(8px);
  opacity: 0.6;
}
</style>
