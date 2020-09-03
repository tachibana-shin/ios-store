import Vue from "vue"
import App from "./App.vue"
import router from "./router/index.js"
import VueLoadingOverlay from "vue-loading-overlay"
import VueProgressBar from "vue-progressbar"
import axios from "axios"

Vue.use(VueLoadingOverlay)
Vue.use(VueProgressBar, {
   color: 'rgb(143, 255, 199)',
   failedColor: "#f00",
   height: '5px'
})

Vue.prototype.$axios = axios

new Vue({
   el: "#app",
   router,
   template: "<App/>",
   components: { App }
})