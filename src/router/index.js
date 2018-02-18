import Vue from 'vue'
import Router from 'vue-router'
import Moment from '@/components/Moment'
import Statistic from '@/components/Statistic'
import Collection from '@/components/Collection'
import Distribution from '@/components/Distribution'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      redirect: '/moment'
    },
    {
      path: '/moment',
      name: 'moment',
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
    },
    {
      path: '/distribution',
      name: 'distribution',
      component: Distribution
    }
  ]
})
