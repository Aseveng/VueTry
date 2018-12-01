import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Navigation from '@/views/Navigation'
import Tab from '@/views/Tab'
import Top from '@/views/Top'
import Admin from '@/views/Admin'
import Registe from '@/views/registe'
import is404 from '@/components/common/404'
import Head from '@/views/Head'
import Sidebar from '@/views/Sidebar'
import home from '@/views/home'
import tag from '@/views/Tag'

Vue.use(Router)
// const _import = require('./import-' + process.env.NODE_ENV)
// 全局路由 无需嵌套上下左右布局
// const globalRoutes = [
//   {
//     path: '/404',
//     component: _import('common/404'),
//     name: '404',
//     meta: { title: '404未找到' }
//   },
//   {
//     path: '/login',
//     component: _import('common/login'),
//     name: 'login',
//     meta: { title: '登录' }
//   }
// ]

// const mainRoutes = []
// const phone = { template: '<div>phone</div>' }
// const tablet = { template: '<div>tablet</div>' }
// const computer = { template: '<div>computer</div>' }

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/navigation',
      name: 'navigation',
      meta: { title: '系统主页' },
      component: Navigation,
      children: [
        {
          path: 'tab',
          name: Tab,
          component: Tab
        },
        {
          path: 'admin',
          component: Admin
        }
      ]
    },
    {
      path: '/top',
      name: 'Tab',
      component: Top
    },
    {
      path: '/registe',
      component: Registe
    },
    {
      path: '/404',
      component: is404
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/head',
      component: Head
    },
    {
      path: '/sidebar',
      component: Sidebar
    },
    {
      path: '/tag',
      component: tag
    }

    // routes: [
    //   {
    //     path: '/',
    //     name: vuexTest,
    //     component: vuexTest
    //   },
    //   {
    //     path: '/vfor',
    //     name: Vfor,
    //     component: Vfor
    //   },
    //   {
    //     path: '/listen',
    //     name: Listen,
    //     component: Listen
    //   },
    //   {
    //     path: '/RouteTest',
    //     name: RouteTest,
    //     component: RouteTest
    //   },
    //   {
    //     path: '/home',
    //     component: home
    //   },
    //   {
    //     path: '/about',
    //     component: about
    //   },
    //   {
    //     path: '/user/:id',
    //     component: User
    //   },
    //   {
    //     path: '/navigation',
    //     component: Navigation
    //   },
    //   {
    //     path: '/tab',
    //     component: Tab
    //   },
    //   {
    //     path: '/vuexGetter',
    //     component: vuexGetter
    //   }
    //   // {
    //   //   path: '/vuexTest',
    //   //   component: vuexTest
    //   // }
    // ]
  ]
})
