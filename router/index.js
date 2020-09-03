import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../pages/Home.vue"

const routes = [
   {
      path: "/",
      component: Home
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