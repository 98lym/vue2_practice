import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/home'),
  },
  {
    path: '/todoList',
    component: () => import('@/views/todoList'),
  },
  {
    path: '/goECharts',
    component: () => import('@/views/eCharts'),
  },
]

const router = new VueRouter({
  routes,
})
export default router
