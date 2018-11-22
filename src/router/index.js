import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import Login from '@/views/Login'
import Navigation from '@/views/Navigation'
import Tab from '@/views/Tab'

Vue.use(Router)
// const _import = require('./import-' + process.env.NODE_ENV)
// // 全局路由 无需嵌套上下左右布局
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
const phone = { template: '<div>phone</div>' }
const tablet = { template: '<div>tablet</div>' }
const computer = { template: '<div>computer</div>' }

export default new Router({
  routes: [
    {
      path: '/home', // 下面这个属性也不少，因为，我们是先进入home页面，才能进入子路由
      component: home, // 子路由
      children: [
        {
          path: 'phone',
          component: phone
        },
        {
          path: 'tablet',
          component: tablet
        },
        {
          path: 'computer',
          component: computer
        }
      ]
    },
    {
      path: '/',
      component: Login
    },
    {
      path: '/navigation',
      component: Navigation,
      children: [
        {
          path: 'tab',
          component: Tab
        }
      ]
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
