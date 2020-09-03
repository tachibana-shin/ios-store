<template>
   <div id="app">
      <vue-progress-bar />
      <Header-App @show-menu="NavListShow = true" />
      <transition name="fade:ease">
         <backdrop-mark v-if="NavListShow" />
      </transition>
      <nav-list-wrapper :class="{ active: NavListShow }" @hide-menu="NavListShow = false" />
      <router-view />
   </div>
</template>
<style lang="scss" scoped>
   #app {

      .notification-content {
         word-wrap: wrap !important;
      }

      .fade\:ease-enter-active,
      .fade\:ease-leave-active {
         transition: all .666s ease;
      }

      .fade\:ease-enter,
      .fade\:ease-leave-to {
         opacity: 0;
      }

   }
</style>
<script>
   import HeaderApp from "./components/Header.vue"
   import NavListWrapper from "./components/Nav.List-Wrapper.vue"
   import BackdropMark from "./components/Backdrop.vue"
   export default {
      components: { HeaderApp, NavListWrapper, BackdropMark },
      data: () => ({
         NavListShow: false
      }),
      mounted() {
         //  [App.vue specific] When App.vue is finish loading finish the progress bar
         this.$Progress.finish()
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