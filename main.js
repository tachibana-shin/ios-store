import Vue from "vue"
import App from "./App.vue"
import router from "./router/index.js"

import VueProgressBar from "vue-progressbar"
import axios from "axios"


Vue.prototype.$axios = axios; 

Vue.use(VueProgressBar, {
   color: 'rgb(0, 132, 240)',
   failedColor: "#f00",
   height: 5
})


new Vue({
   el: "#app",
   router,
   template: "<App/>",
   components: { App }
})