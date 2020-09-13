import i18n from 'vue-i18n'
import filters from 'vue-i18n-filters'
import Vue from 'vue'

Vue.use(i18n)
Vue.use(filters)

const messages = {
   en: {
      "NO_MORE": "No More",
      "MORE": "More",
      "INST": "Install",
      "developer": "Developer",
      "category": "Category",
      "updated": "Updated",
      "compatibility": "Compatibility",
      "languages": "Languages",
      "account": "Account",
      "GUIDE_BLOCK": {
         "INST" : "Installation",
	 "VERIFICATION": "Verification"
      },
      "HEADER": {
         "DOWNLOAD_VIP": "Download VIP",
	 "LITE": "Tutuapp Lite",
	 "WELCOME": "Welcome",
	 "LOGIN": "Login",
	 "BIND_YOUR_UIID": "Bind your UIID",
	 "PURCHASE_VIP": "Purchase VIP",
         "HOME": "Home",
	 "DOWNLOAD_APP_VIP": "Download Tutuapp VIP",
	 "IOS_APPS_AND_GAMES": "iOS Apps & Games",
	 "FEEDBACK": "Feedback",
	 "CONTACT": "Contact",
	 "BLOG": "Blog",
	 "LOGOUT": "Log Out"
      },
      "HOME": {
         "INST_GUIDE": "Installation Guide",
	 "VIP_FEATURE": "VIP Features",
	 "CHECK_MORE_VIP_APPS": "Check more VIP apps &gt;",
	 "HOT": "Hot"
      },
      "LITE_FOOTER": {
         "HOME": "Home",
	 "GAMES": "Games",
	 "APPS": "Apps",
	 "SEARCH": "Search"
      },
      "APP_INFO": {
         "INFORMATION": "Information",
	 "SCREENSHOT": "Screenshot",
	 "INTERTING": "Interting",
	 "DOWNLOAD": "Download"
      },
      "BIND": {
         "TEXT1": "Please login with TutuApp account to verify and get your UDID to complete the binding.",
	 "VERIFY": "Verify",
	 "TEXT2": "Enter item number to verify &gt;",
         "TEXT3": "Login TutuApp to verify &gt;",
	 "TIPS": "Tips",
	 "TEXT4": "This function is ONLY for the users who have already had VIP account before. People who purchased now don't need to bind just download is okay.",
	 "TEXT5": "The users who have already had VIP account can use TutuApp VIP after the verification.",
	 "TEXT6": "If you have other issues please contact us.",
	 "FAQ": "FAQ",
	 "TITLE_TEXT7": "How to bind your UDID ?",
	 "TEXT7": "Method 1: Please login with TutuApp account to verify and get your UDID to complete the binding.\nMethod 2: Please enter item number to verify and get your UDID to complete the binding."
      },
      "BLOG": {
         "HOT": "Hot",
	 "GAMES_GUIDE": "Games Guide",
	 "NEW": "New"
      },
      "FEEDBACK": {
         "FEEDBACK_TYPE": "Feedback Type",
	 "DESCRIPTION": "Description",
	 "SCREENSHOT": "Screenshot",
	 "SUBMIT": "Submit",
	 "PLC1": "Input Type Feedback",
	 "PLC2": "Please describe your problem or suggestion in as much detail as possible",
	 "EMAIL": "Email",
	 "PLC3": "Your Email"
      }
   },
   vi: {
     "HOME": {
         "INST_GUIDE": "Hướng dẫn cài đặt",
         "VIP_FEATURE": "VIP Features",
         "CHECK_MORE_VIP_APPS": "Kiểm tra các ứng dụng VIP khác &gt;",
     }
   }
}

export default new i18n({
  locale: "en",
  fallbackLocale: "en",
  messages
})
