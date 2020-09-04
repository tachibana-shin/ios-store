import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../pages/Home.vue"
import Lite from "../pages/Lite.vue"
import LiteGame from "../pages/Lite.Game.vue"
import LiteApp from "../pages/Lite.App.vue"

const routes = [
   {
      path: "/",
      component: Home
   },
   {
      path: "/lite",
      component: Lite,
      children: [
         {
            path: "game",
            component: LiteGame
         },
         {
            path: "app",
            component: LiteApp
         }
      ]
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