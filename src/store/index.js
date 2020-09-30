import Vuex from 'vuex'
import Vue from 'vue'
import createStorage from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      darkMode: false
   },
   plugins: [
      createStorage({
         paths: ["darkMode"]
      })
	],
   mutations: {
      setDarkMode(state, value) {
         state.darkMode = value
      }
   }
})