import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false // 生产模式下禁用 Vue.js 的警告提示信息。

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
