import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Listen from '@/components/Listen'
import Vfor from '@/components/Vfor'
import RouteTest from '@/components/RouteTest'
import home from '@/components/Aaa'
import about from '@/components/Bbb'
import User from '@/components/User'
import Navigation from '@/components/Navigation'
// import MainNavbar from '@/components/main-navbar'
import Main from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: Main,
      component: Main
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
    },
    {
      path: '/user/:id',
      component: User
    },
    {
      path: '/navigation',
      component: Navigation
    }
  ]
})
