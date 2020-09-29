<template>
   <div class="header-nav">
      <div class="wrapper">
         <img class="menu" :src="require('@/assets/nav.ic.menu.svg')" @click="$emit('show-menu')">
         <img class="logo" :src="require('@/assets/nav.ic.logo.svg')">
         <img class="download" :src="require('@/assets/nav.ic.download.svg')">
      </div>
      <div class="tabs" v-if="!$route.meta.hiddenTab">
         <router-link tag="span" to="/" exact-active-class="active" class="left">
            {{ "HEADER.DOWNLOAD_VIP" | t }}
         </router-link>
         <div class="space"></div>
         <router-link tag="span" to="/lite" active-class="active" class="right">
            {{ "HEADER.LITE" | t }}
         </router-link>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   @import "~@/scss/variants";

   .header-nav {
      box-shadow: rgba(8, 13, 39, .05) 0 .533vw 2.133vw 0;
      position: fixed;
      top: 0;
      left: 0;
      transition: all .2 ease;
      z-index: 9999;
      width: 100%;

      .wrapper {
         width: 100%;
         height: 13.867vw;
         background-color: $white;
         position: relative;
         display: flex;
         align-items: center;
         justify-content: space-between;

         img.menu {
            width: 6.4vw;
            height: 6.4vw;
            margin-left: 4.267vw;
         }

         img.logo {
            height: 7.467vw;
         }

         img.download {
            width: 4.267vw;
            height: 5.867vw;
            margin-right: 4.267vw;
         }
      }

      .tabs {
         background-color: rgb(252, 253, 255);
         color: $color-blue-grey;

         font: {
            size: 3.733vmin;
            weight: 500;
         }

         ;
         position: relative;
         width: 100%;
         text-align: center;

         display: flex;
         align-items: center;
         height: 11.467vw;

         .left,
         .right {
            flex: {
               basis: 0;
               grow: 1;
               shrink: 1;
            }

            ;

            &.active {
               color: $colorMain;
               font-size: 4.267vmin;
            }
         }

         .space {
            background-color: $color-yellow-grey;
            height: 4.8vw;
            max-height: 100%;
            width: 1px;
         }
      }

   }
</style>
<script>
   export default {
      lastScrollPosition: 0,
      data: () => ({
         hide: false
      }),
      methods: {
         onScroll() {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            if (currentScrollPosition < 0) {
               return
            }
            if (Math.abs(currentScrollPosition - this.$options.lastScrollPosition) < 120) {
               return
            }
            this.$emit("input", currentScrollPosition < this.$options.lastScrollPosition)
            this.$options.lastScrollPosition = currentScrollPosition
         }
      },
      created() {
         window.addEventListener("scroll", this.onScroll)
      },
      beforeDestroyed() {
         window.removeEventListener("scroll", this.onScroll)
      }
   }
</script>