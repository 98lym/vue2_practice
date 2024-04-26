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
    path: '/frostedMirror',
    component: () => import('@/views/frostedMirror'),
  },
  {
    path: '/eCharts',
    component: () => import('@/views/eCharts'),
    children: [
      {
        path: '',
        redirect: 'smoothedLineChart',
      },
      {
        path: 'smoothedLineChart',
        name: 'smoothedLineChart',
        component: () => import('@/views/eCharts/components/SmoothedLineChart'),
      },
      {
        path: 'roundedRingDiagram',
        name: 'roundedRingDiagram',
        component: () => import('@/views/eCharts/components/RoundedRingDiagram'),
      },
      {
        path: 'dualXAxisDualLineChart',
        name: 'dualXAxisDualLineChart',
        component: () => import('@/views/eCharts/components/DualXAxisDualLineChart'),
      },
      {
        path: 'singleXAxisDualLineChart',
        name: 'singleXAxisDualLineChart',
        component: () => import('@/views/eCharts/components/SingleXAxisDualLineChart'),
      },
    ],
  },
  {
    path: '/selector',
    component: () => import('@/views/selector'),
  },
]

const router = new VueRouter({
  routes,
})
export default router
