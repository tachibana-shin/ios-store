import Vue from "vue"
import App from "./App.vue"
import router from "./router/index.js"

import VueProgressBar from "vue-progressbar"
import axios from "axios"

Vue.use(VueProgressBar, {
   color: 'rgb(0, 132, 240)',
   failedColor: "#f00",
   height: 5
})

Vue.prototype.$axios = axios

new Vue({
   el: "#app",
   router,
   template: "<App/>",
   components: { App }
})