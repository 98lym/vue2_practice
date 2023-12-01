<template>
  <div class="e-charts">
    <div class="menu">
      <div
        class="modules"
        v-for="{ key, name, implication } in routers"
        :key="key"
        :class="{ selected: currentModule === name }"
        @click="goModules(name)"
      >
        {{ implication }}
      </div>
    </div>
    <div class="router">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { routers } from './config'
export default {
  name: 'ECharts',
  data() {
    return {
      routers,
      currentModule: '',
    }
  },
  created() {
    this.currentModule = this.$route.name
  },
  methods: {
    goModules(name) {
      if (name === 'goHome') return this.$router.push('/home')
      this.currentModule = name
      // TODO: catch处理重复跳转相同路由导致报错的问题
      this.$router.push({ name }).catch((error) => {
        if (error.name === 'NavigationDuplicated') return
      })
    },
  },
}
</script>
<style lang="scss" scope>
.e-charts {
  height: 100%;
  display: flex;
  box-sizing: border-box; // 将 padding 和 border 包含在元素的总宽度和高度内，从而不影响元素的大小
  padding: 20px;
  .menu {
    flex: 1.5;
    flex-direction: column;
    .modules {
      margin: 0 10px 20px 0;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border-radius: 4px;
      cursor: pointer;
      background-color: skyblue;
    }
    .selected {
      background-color: #007bff;
    }
  }
  .router {
    flex: 8.5;
  }
}
</style>
