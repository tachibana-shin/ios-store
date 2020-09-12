import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import VueProgressBar from 'vue-progressbar'
import axios from 'axios'
import vImg from 'v-img'
import Lazyload from 'vue-lazyload'
import eruda from 'eruda'

eruda.init()

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

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
