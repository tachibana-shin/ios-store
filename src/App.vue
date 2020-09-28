<template>
   <div id="app">
      <vue-progress-bar />
      <transition name="swipeY.top:ease">
         <Header-App @show-menu="NavListShow = true" v-show="HeaderAppShow" @input="HeaderAppShow = $event" />
      </transition>
      <transition name="fade:ease">
         <backdrop-mark v-if="NavListShow || HowToInstallShow || LoadingSnipper || ModalDownload" />
      </transition>
      <transition name="howtoinstall">
         <how-to-install v-if="HowToInstallShow" @close="HowToInstallShow = false" />
      </transition>
      <transition name="howtoinstall">
         <modal-download v-if="ModalDownload" @close="ModalDownload = false" :items="ModalDownloadItem" />
      </transition>
      <transition name="fade:ease">
         <loading-snipper v-if="LoadingSnipper" />
      </transition>
      <nav-list-wrapper :class="{ active: NavListShow }" @hide-menu="NavListShow = false" @show-installation-guide="HowToInstallShow = true" />
      <router-view />
   </div>
</template>
<style lang="scss" scoped>
   #app {
      padding-top: 13.867vw;

      .fade\:ease-enter-active,
      .fade\:ease-leave-active {
         transition: all .666s ease;
      }

      .fade\:ease-enter,
      .fade\:ease-leave-to {
         opacity: 0;
      }

      .swipeY\.top\:ease-enter-active {
         animation: swipeYTopEnter .2s ease;

         @keyframes swipeYTopEnter {
            from {
               transform: translateY(-100%);
            }

            to {
               transform: translateY(0);
            }
         }
      }

      .swipeY\.top\:ease-leave-active {
         animation: swipeYTopLeave .2s ease;

         @keyframes swipeYTopLeave {
            from {
               transform: translateY(0);
            }

            to {
               transform: translateY(-100%);
            }
         }
      }

      .howtoinstall-enter-active {
         animation: howtoinstallshow .666s ease;

         @keyframes howtoinstallshow {
            from {
               transform: scale(0);
               opacity: 0;
            }

            50% {
               transform: scale(1.1);
            }

            to {
               transform: scale(1);
               opacity: 1;
            }
         }
      }

      .howtoinstall-leave-active {
         animation: howtoinstallhide .666s ease;

         @keyframes howtoinstallhide {
            from {
               transform: scale(1) translateY(0);
            }

            to {
               transform: scale(0) translateY(-30px);
            }
         }
      }

      .fade-enter-active,
      .fade-leave-active {
         transition: opacity .75s ease;
      }

      .fade-enter,
      .fade-leave-active {
         opacity: 0;
      }

      .child-view {
         position: absolute;
         transition: all .75s cubic-bezier(.55, 0, .1, 1);
      }

      .slide-left-enter,
      .slide-right-leave-active {
         opacity: 0;
         -webkit-transform: translate(30px, 0);
         transform: translate(30px, 0);
      }

      .slide-left-leave-active,
      .slide-right-enter {
         opacity: 0;
         -webkit-transform: translate(-30px, 0);
         transform: translate(-30px, 0);
      }

   }
</style>
<script>
   import HeaderApp from "./components/Header.vue"
   import NavListWrapper from "./components/Nav.List-Wrapper.vue"
   import BackdropMark from "./components/Backdrop.vue"
   export default {
      components: {
         HeaderApp,
         NavListWrapper,
         BackdropMark,
         HowToInstall: () => import("./components/HowToInstall.vue"),
         LoadingSnipper: () => import("./components/Loading-Snipper.vue"),
         ModalDownload: () => import("./components/Modal.Download.vue")
      },
      data: () => ({
         NavListShow: false,
         HeaderAppShow: true,
         HowToInstallShow: false,
         LoadingSnipper: false,
         ModalDownload: false,
         ModalDownloadItem: []
      }),
      mounted() {
         //  [App.vue specific] When App.vue is finish loading finish the progress bar
         this.$Progress.finish()
         this.$root.$on("loading-snipper", (e) => this.LoadingSnipper = e)
         this.$root.$on("Modal.Download", ({ items, state }) => {
            this.ModalDownload = state
            this.ModalDownloadItem = items
         })
      },
      created() {
         //  [App.vue specific] When App.vue is first loaded start the progress bar
         this.$Progress.start()
         //  hook the progress bar to start before we move router-view
         this.$router.beforeEach((to, from, next) => {
            //  does the page we want to go to have a meta.progress object
            if (to.meta.progress !== undefined) {
               let meta = to.meta.progress
               // parse meta tags
               this.$Progress.parseMeta(meta)
            }
            //  start the progress bar
            this.$Progress.start()
            //  continue to next page
            window.document.title = to.meta.title()
            // change title page
            next()
         })
         //  hook the progress bar to finish after we've finished moving router-view
         this.$router.afterEach((to, from) => {
            //  finish the progress bar
            this.$Progress.finish()
         })
      }
   }
</script>