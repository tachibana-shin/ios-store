<template>
   <div class="nav.list-wrapper">
      <nav class="nav.list">
         <div class="content">
            <h1 class="welcome"> Welcone </h1>
            <div class="user-general">
               <div class="user.content" v-if="false">
               </div>
               <div class="no-login" v-else>
                  <button class="login.button"> Login </button>
               </div>
            </div>
            <hr class="line">
            <ul class="list">
               <li class="item">
                  <img class="icon" src="/assets/bar.ic.bind.svg">
                  <span> Bind your UIID </span>
               </li>
               <li class="item">
                  <img class="icon" src="/assets/bar.ic.vip.svg">
                  <span> Purchase VIP </span>
               </li>
               <hr>
               <li class="item">
                  <img class="icon" src="/assets/bar.ic.home.svg">
                  <span> Home </span>
               </li>
               <li class="item">
                  <img class="icon" src="/assets/bar.ic.download.svg">
                  <span> Download Tutuapp VIP </span>
               </li>
               <li class="item">
                  <img class="icon" src="/assets/bar.ic.game.svg">
                  <span> iOS Apps & Games </span>
               </li>
               <hr>
               <li class="item">
                  <img class="icon" src="/assets/bar.ic.feedback.svg">
                  <span> Feedback </span>
               </li>
               <li class="item">
                  <img class="icon" src="/assets/bar.ic.contact.svg">
                  <span> Contact </span>
               </li>
               <li class="contact">
                  <ul>
                     <li class="item-contact">
                        <a href="#"> Twitter </a>
                     </li>
                  </ul>
               </li>
               <hr>
               <li class="item">
                  <img class="icon" src="/assets/bar.ic.contact.svg">
                  <span> Contact </span>
               </li>
               <li class="">
                  <button class="logout.button"> Log Out </button>
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

      &.active {
         transform: translateX(0%);
      }

      hr {
         margin: 0;
         padding: 0;
      }

      .nav\.list {
         background-color: #fff;
         width: 79.467vw;
         height: 100%;
         position: absolute;
         overflow: hidden scroll;

         &::-webkit-scrollbar {
            display: none;
         }

         -ms-overflow-style: none;
         scrollbar-width: none;

         .content {
            border: 1px solid #fff;
            background-color: #fff;
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
                     background-color: rgb(0, 132, 240);
                     border-radius: 2.133vw;
                     color: #fff;

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
               background-color: rgb(242, 244, 245);
               height: 1px;
               width: 100%;
            }

            .list {
               padding: 3.2vw 5.333vw;
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
                  color: rgb(55, 77, 115);
                  height: 13.867vw;
                  box-sizing: border-box;

                  .icon {
                     width: 7.467vw;
                     height: 7.467vw;
                     margin-right: 4.267vw;
                  }

                  &.active {
                     background-color: rgb(238, 242, 250);
                  }
               }

               hr {
                  background-color: rgb(242, 244, 245);
                  height: 1px;
                  margin: 3.2vw 0;
               }

               .contact {
                  color: rgb(117, 136, 169);

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
                           color: rgb(117, 136, 169);

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
                  background-color: rgb(242, 244, 245);
                  height: 1px;
               }

               .logout\.button {
                  border-radius: 2.133vw;
                  border: 1px solid rgb(0, 132, 240);
                  background-color: #fff;

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
                     background-color: rgb(0, 132, 240);
                     color: #fff;
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
   export default {

   }
</script>