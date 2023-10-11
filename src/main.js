import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index'
Vue.config.productionTip = false // 生产模式下禁用 Vue.js 的警告提示信息。

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
