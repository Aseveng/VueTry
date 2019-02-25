import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Navigation from '@/views/Navigation'
import table from '@/views/Tab'
import Top from '@/views/Top'
import Admin from '@/views/Admin'
import Registe from '@/views/registe'
import is404 from '@/components/common/404'
import Head from '@/views/Head'
import Sidebar from '@/views/Sidebar'
import home from '@/views/home'
import tag from '@/views/Tag'
import vuexGetter from '@/views/vuexGetter'
import vuexGetterToo from '@/views/vuexGetterToo'
// import message from '@/views/message'
import vuexTest from '@/views/vuexTest'
import photo from '@/views/photo-view'
import Canteen1 from '@/views/Canteen/Canteen1'
import ShoppingCart from '@/views/ShoppingCart'
import UserInfo from '@/views/UserInfo'
import OrderDetail from '@/views/OrderDetail'
import mealDetail from '@/views/mealDetail'

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
      path: '/login',
      name: Login,
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
    },

    {
      path: '/home',
      component: home,
      children: [
        {
          path: '/table',
          name: table,
          component: table,
          children: [
            {
              path: '/Canteen1',
              name: Canteen1,
              component: Canteen1
            },
            {
              path: '/Canteen2',
              name: Canteen1,
              component: Canteen1
            },
            {
              path: '/Canteen3',
              name: Canteen1,
              component: Canteen1
            },
            {
              path: '/Canteen4',
              name: Canteen1,
              component: Canteen1
            },
            {
              path: '/Canteen5',
              name: Canteen1,
              component: Canteen1
            },
            {
              path: '/Canteen6',
              name: Canteen1,
              component: Canteen1
            }
          ]
        },
        {
          path: '/ShoppingCart',
          name: ShoppingCart,
          component: ShoppingCart
        },
        {
          path: '/UserInfo',
          name: UserInfo,
          component: UserInfo
        },
        {
          path: '/OrderDetail',
          name: OrderDetail,
          component: OrderDetail
        },
        {
          path: '/mealDetail',
          name: mealDetail,
          component: mealDetail
        }
      ]
    },
    {
      path: '/navigation',
      name: 'navigation',
      meta: { title: '食堂' },
      component: Navigation,
      children: [
        {
          path: 'table',
          name: table,
          component: table,
          children: [
            {
              path: 'Canteen1',
              name: Canteen1,
              component: Canteen1
            }
          ]
        },
        {
          path: 'Admin',
          name: 'Admin',
          component: Admin
        }
      ]
    },
    {
      path: '/top',
      name: 'top',
      component: Top
    },
    {
      path: '/vuexTest',
      name: vuexTest,
      component: vuexTest
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
    },
    {
      path: '/vuexGetter',
      component: vuexGetter
    },
    {
      path: '/vuexGetterToo',
      component: vuexGetterToo
    },
    {
      path: '/photo',
      component: photo
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

    //   // {
    //   //   path: '/vuexTest',
    //   //   component: vuexTest
    //   // }
    // ]
  ]
})
