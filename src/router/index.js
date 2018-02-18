import Vue from 'vue'
import Router from 'vue-router'
import Moment from '@/components/Moment'
import Statistic from '@/components/Statistic'
import Distribution from '@/components/Distribution'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      redirect: '/tweets'
    },
    {
      path: '/tweets',
      name: 'tweets',
      component: Moment
    },
    {
      path: '/history',
      name: 'history',
      component: Statistic
    },
    {
      path: '/sensors',
      name: 'sensors',
      component: Distribution
    }
  ]
})
