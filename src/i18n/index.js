import Vuei18n from 'vue-i18n'
import filters from 'vue-i18n-filters'
import Vue from 'vue'
import enUS from './languages/en-US.json'

Vue.use(Vuei18n)
Vue.use(filters)

const i18n = new Vuei18n({
   locale: "en-US",
   fallbackLocale: "en-US",
   messages: {
      "en-US": enUS
   }
})

const loadedLanguages = ["en-US"]

function loadLanguageAsync(lang) {
   // If the same language
   if (i18n.locale === lang) {
      return Promise.resolve(i18n.locale = lang)
   }

   // If the language was already loaded
   if (loadedLanguages.includes(lang)) {
      return Promise.resolve(i18n.locale = lang)
   }

   // If the language hasn't been loaded yet
   return import(`./languages/${lang}.json`)
      .then(messages => {
         i18n.setLocaleMessage(lang, messages)
         loadedLanguages.push(lang)
         i18n.locale = lang
      })
}

Object.defineProperty(i18n, "localeAsync", {
   get() {
      return i18n.locale
   },
   set(e) {
      loadLanguageAsync(e)
   }
})

export default i18n