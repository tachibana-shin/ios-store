import Vue from 'vue'
import VueRouter from 'vue-router'
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

import Error404 from '../pages/404.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/lite',
    component: Lite,
    children: [
      {
        path: 'game',
        component: LiteGame
      },
      {
        path: 'app',
        component: LiteApp
      }
    ]
  },
  {
    path: '/lite/topapp/:name',
    component: LiteTopApp
  },
  {
    path: '/lite/info/app/:id',
    component: AppInfo_Page
  },
  {
    path: '/lite/search',
    component: LiteSearch
  },
  {
    path: '/feedback',
    component: Feedback,
    meta: {
      hiddenTab: true
    }
  },
  {
    path: '/bind',
    component: Bind,
    meta: {
      hiddenTab: true
    }
  },
  {
    path: '/blog',
    component: Blog,
    meta: {
      hiddenTab: true
    }
  },
  {
    path: '*',
    component: Error404
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
