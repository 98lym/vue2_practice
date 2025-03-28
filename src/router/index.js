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
      {
        path: 'threeDimensionalPieChart',
        name: 'threeDimensionalPieChart',
        component: () => import('@/views/eCharts/components/ThreeDimensionalPieChart'),
      },
    ],
  },
  {
    path: '/selector',
    component: () => import('@/views/selector'),
  },
  {
    path: '/flowChart',
    component: () => import('@/views/flowChart'),
  },
  {
    path: '/coordinate',
    component: () => import('@/views/coordinate'),
  },
  {
    path: '/largeScreen',
    component: () => import('@/views/largeScreen'),
  },
]

const router = new VueRouter({
  routes,
})
export default router
