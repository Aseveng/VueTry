import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Listen from '@/components/Listen'
import Vfor from '@/components/Vfor'
import RouteTest from '@/components/RouteTest'
import home from '@/components/Aaa'
import about from '@/components/Bbb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vfor',
      name: Vfor,
      component: Vfor
    },
    {
      path: '/listen',
      name: Listen,
      component: Listen
    },
    {
      path: '/RouteTest',
      name: RouteTest,
      component: RouteTest
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/about',
      component: about
    }
  ]
})
