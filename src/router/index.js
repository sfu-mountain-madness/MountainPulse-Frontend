import Vue from 'vue'
import Router from 'vue-router'
import BurnabyMountain from '@/components/BurnabyMountain'
import Chart from '@/components/Chart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      redirect: '/burnaby-mountain'
    },
    {
      path: '/burnaby-mountain',
      name: 'BurnabyMountain',
      component: BurnabyMountain
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart
    }
  ]
})
