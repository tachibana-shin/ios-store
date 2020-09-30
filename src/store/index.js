import Vuex from 'vuex'
import Vue from 'vue'
import createStorage from 'vuex-persistedstate'
import i18n from '../i18n'

Vue.use(Vuex)

const store = new Vuex.Store({
   state: {
      darkMode: false,
      language: navigator.language
   },
   plugins: [
      createStorage({
         paths: ["darkMode", "language"]
      })
   ],
   mutations: {
      setDarkMode(state, value) {
         state.darkMode = value
      },
      setLanguage(state, value) {
         state.language = value
         i18n.localeAsync = value
      }
   }
})

i18n.localeAsync = store.state.language

export default store