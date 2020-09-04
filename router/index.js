import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../pages/Home.vue"
import Lite from "../pages/Lite.vue"

const routes = [
   {
      path: "/",
      component: Home
   },
   {
      path: "/lite",
      component: Lite
   }
]
Vue.use(VueRouter)

export default new VueRouter({
   mode: "history",
   routes,
   scrollBehavior(from, to, save) {
      return save || { x: 0, y: 0 }
   }
})