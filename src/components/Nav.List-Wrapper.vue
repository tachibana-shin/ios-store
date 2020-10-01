<template>
   <div class="nav.list-wrapper">
      <nav class="nav.list" @touchmove.prevent>
         <div class="content" v-touch-scroll:vertical="{ scrollbar: { render: false } }">
            <ul class="list" @click="$emit('hide-menu')">
               <router-link to="/" tag="li" exact-active-class="active" class="item" :class="{ active: homeRouterActive }">
                  <img class="icon" :src="require('@/assets/bar.ic.home.svg')">
                  <span> {{ "HEADER.HOME" | t }} </span>
               </router-link>
               <li class="item" @click="$emit('show-installation-guide')">
                  <img class="icon" :src="require('@/assets/bar.ic.download.svg')">
                  <span> {{ "HEADER.DOWNLOAD_APP_VIP" | t }} </span>
               </li>
               <li class="item">
                  <img class="icon" :src="require('@/assets/bar.ic.game.svg')">
                  <span> {{ "HEADER.IOS_APPS_AND_GAMES" | t }} </span>
               </li>
               <hr>
               <li class="item">
                  <img class="icon" :src="require('@/assets/bar.ic.contact.svg')">
                  <span> {{ "HEADER.CONTACT" | t }} </span>
               </li>
               <li class="contact">
                  <ul>
                     <li class="item-contact">
                        <a href="#"> Twitter </a>
                     </li>
                     <li class="item-contact">
                        <a href="#"> Instagram </a>
                     </li>
                     <li class="item-contact">
                        <a href="#"> Youtube </a>
                     </li>
                  </ul>
               </li>
               <hr>
               <router-link tag="li" to="/help" class="item" active-class="active">
                  <img class="icon" :src="require('@/assets/bar.ic.feedback.svg')">
                  <span> {{ "HEADER.HELP_AND_FEEDBACK" | t }} </span>
               </router-link>
               <router-link tag="li" to="/about" class="item" active-class="active">
                  <img class="icon" :src="require('@/assets/bar.ic.business.svg')">
                  <span> {{ "HEADER.ABOUT" | t }} </span>
               </router-link>
               <li class="item settings" @click.stop>
                  <language />
                  <darkmode-switcher :checked.sync="DARK_MODE" />
               </li>
               <li class="" v-if="false">
                  <button class="logout.button"> {{ "HEADER.LOGOUT" | t }} </button>
               </li>
            </ul>
         </div>
      </nav>
      <div class="space" @click="$emit('hide-menu')"></div>
   </div>
</template>
<style lang="scss" scoped>
   .nav\.list-wrapper {
      position: fixed;
      z-index: 9999;
      width: 100%;
      height: 100%;
      transition: all .666s ease;
      display: flex;
      transform: translateX(-100%);
      top: 0;
      left: 0;

      &.active {
         transform: translateX(0%);
      }

      hr {
         @include distance0;
      }

      .nav\.list {
         background-color: $white;
         width: 79.467vw;
         height: 100%;
         position: absolute;
         overflow: hidden;

         &::-webkit-scrollbar {
            display: none;
         }

         -ms-overflow-style: none;
         scrollbar-width: none;

         .content {
            border: 1px solid $white;
            background-color: $white;
            padding-bottom: 26.667vw;
            width: 100%;

            .welcome {
               color: rgb(64, 89, 113);

               font: {
                  size: 7.467vmin;
                  weight: 500;
               }

               ;
               line-height: 9.067vw;
               margin: 0;
               padding: 0;

               margin: {
                  left: 11.733vw;
                  top: 8.533vw;
               }
            }

            .user-general {
               padding: {
                  left: 11.733vw;
                  right: 11.733vw;
                  bottom: 8.533vw;
                  box-sizing: border-box;
               }

               ;

               .user\.content {}

               .no-login {
                  margin-top: 4.267vw;

                  .login\.button {
                     background-color: $colorMain;
                     border-radius: 2.133vw;
                     color: $white;

                     font: {
                        size: 4.267vmin;
                        weight: 500;
                     }

                     line-height: 5.867vw;
                     width: 36.267vw;
                     height: 12.267vw;

                  }
               }
            }

            hr.line {
               background-color: $color-hr;
               height: 1px;
               width: 100%;
            }

            .list {
               /*padding: 3.2vw 5.333vw;*/
               padding: 5.333vw;
               box-sizing: border-box;
               margin: 0;
               list-style: none;

               .item {
                  border-radius: 2.133vw;
                  display: flex;
                  align-items: center;

                  font: {
                     size: 4.267vmin;
                     weight: 500;
                  }

                  ;
                  color: $color-blue-dark;
                  height: 13.867vw;
                  box-sizing: border-box;

                  .icon {
                     width: 7.467vw;
                     height: 7.467vw;
                     margin-right: 4.267vw;
                  }

                  &.active {
                     background-color: $bg-active;
                  }

                  &.settings {
                     display: flex;
                     justify-content: space-between;
                     box-sizing: border-box;
                     align-items: center;
                  }
               }

               hr {
                  background-color: $color-hr;
                  height: 1px;
                  margin: 3.2vw 0;
               }

               .contact {
                  color: $color-title-app;

                  font: {
                     size: 3.733vw;
                     weight: 500;
                  }

                  line-height: 4.8vw;
                  margin-left: 17.067vw;

                  ul {
                     margin: 0;
                     padding: 0;
                     list-style: none;

                     .item-contact {
                        margin-top: 3.2vw;

                        a {
                           text-decoration: none;
                           color: $color-title-app;

                           font: {
                              size: 3.733vmin;
                              weight: 500;
                           }

                           ;
                           line-height: 4.8vw
                        }
                     }
                  }
               }

               hr {
                  background-color: $color-hr;
                  height: 1px;
               }

               .logout\.button {
                  border-radius: 2.133vw;
                  border: 1px solid $colorMain;
                  background-color: $white;

                  font: {
                     size: 4.267vmin;
                     weight: 500;
                  }

                  ;
                  line-height: 5.867vw;

                  margin: {
                     top: 3.2vw;
                     left: 11.733vw;
                  }

                  width: 36.267vw;
                  height: 12.267vw;
                  outline: none;
                  transition: all .666s ease;

                  &:hover {
                     background-color: $colorMain;
                     color: $white;
                  }
               }
            }
         }

      }

      .space {
         flex: {
            basis: 0;
            grow: 1;
            shrink: 1;
            /* get max column height */
         }

         ;
      }
   }
</style>
<script>
   import Language from "./Language.vue"
   import DarkmodeSwitcher from "./DarkModeSwitch.vue"

   export default {
      components: { Language, DarkmodeSwitcher },
      computed: {
         homeRouterActive() {
            return !!this.$route.path.match(/^\/lite/)
         },
         DARK_MODE: {
            set(value) {
               this.$store.commit("setDarkMode", value)
            },
            get() {
               return this.$store.state.darkMode
            }
         }
      }
   }
</script>