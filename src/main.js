import cssVars from 'css-vars-ponyfill'

cssVars({
   watch: true,
   rootElement: document
})

import eruda from 'eruda'
eruda.init()

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueProgressBar from 'vue-progressbar'
import axios from 'axios'
import vImg from 'v-img'
import Lazyload from 'vue-lazyload'
import i18n from './i18n'
import VueScrollTo from "vue-scrollto"
import VueTouchScroll from "vue-touch-scroll"

Vue.prototype.$axios = axios

Vue.use(VueProgressBar, {
   color: 'rgb(0, 132, 240)',
   failedColor: '#f00',
   height: 5
})
Vue.use(vImg, {
   altAsTitle: true,
   sourceButton: true,
   thumbnails: true
})
Vue.use(Lazyload)
Vue.use(VueScrollTo)
Vue.use(VueTouchScroll)

new Vue({
   el: '#app',
   router,
   store,
   i18n,
   template: '<App/>',
   components: { App }
})