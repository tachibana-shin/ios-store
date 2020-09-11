import Vue from 'vue'
import VueRouter from 'vue-router'/*
import Home from '../pages/Home.vue'
import Bind from '../pages/Bind.vue'
import Feedback from '../pages/Feedback.vue'
import Blog from '../pages/Blog.vue'

import Lite from '../pages/Lite.vue'
import LiteGame from '../pages/Lite.Game.vue'
import LiteApp from '../pages/Lite.App.vue'
import LiteTopApp from '../pages/Lite.TopApp.vue'
import AppInfo_Page from '../pages/AppInfo_Page.vue'
import LiteSearch from '../pages/Lite.Search.vue'

import Error404 from '../pages/404.vue'*/

const routes = [
  {
    path: '/',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/lite',
    component: () => import('../pages/Lite.vue'),
    children: [
      {
        path: 'game',
        component: () => import('../pages/Lite.Game.vue')
      },
      {
        path: 'app',
        component: () => import('../pages/Lite.App.vue')
      }
    ]
  },
  {
    path: '/lite/topapp/:name',
    component: () => import('../pages/Lite.TopApp.vue')
  },
  {
    path: '/lite/info/app/:id',
    component: () => import('../pages/AppInfo_Page.vue')
  },
  {
    path: '/lite/search',
    component: () => import('../pages/Lite.Search.vue')
  },
  {
    path: '/feedback',
    component: () => import('../pages/Feedback.vue'),
    meta: {
      hiddenTab: true
    }
  },
  {
    path: '/bind',
    component: () => import('../pages/Bind.vue'),
    meta: {
      hiddenTab: true
    }
  },
  {
    path: '/blog',
    component: () => import('../pages/Blog.vue'),
    meta: {
      hiddenTab: true
    }
  },
  {
    path: '*',
    component: () => import('../pages/404.vue')
  }
]
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (from, to, save) {
    return save || { x: 0, y: 0 }
  }
})
