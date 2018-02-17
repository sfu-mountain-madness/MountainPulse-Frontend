import Vue from 'vue'
import Router from 'vue-router'
import Moment from '@/components/Moment'
import Statistic from '@/components/Statistic'
import Collection from '@/components/Collection'
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
      path: '/chart',
      name: 'Chart',
      component: Chart
    },
    {
      path: '/moments',
      name: 'moments',
      component: Moment
    },
    {
      path: '/statistic',
      name: 'statistic',
      component: Statistic
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection
    }
  ]
})
