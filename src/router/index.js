import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/hello',
      name: 'test',
      component: Hello
    }
  ]
})
