import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Hello from '@/components/Hello'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/hello',
      name: 'test',
      component: Hello
    },
    {
      path: '/search/:type',
      name: 'search',
      component: Search,
      props: (route) => ({ query: route.query.q })
    }
  ]
})
