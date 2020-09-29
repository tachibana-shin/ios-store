<template>
   <div class="wrapper">
      <div class="header">
         <img :src="require('@/assets/buny.png')">
         {{ "BIND.TEXT1" | t }}
      </div>
      <div class="content">
         <div class="user" v-if="showUser">
            <input type="email" placeholder="Email">
            <div class="password-group">
               <input :type="showPassword ? 'text' : 'password'" placeholder="Password">
               <div class="eye">
                  <img :src="require(showPassword ? '@/assets/eye.show.svg' : '@/assets/eye.hide.svg')" @click="showPassword = !showPassword">
               </div>
            </div>
            <button> {{ "BIND.VERIFY" | t }} </button>
            <p @click="showUser = false"> {{ "BIND.TEXT2" | t }}  </p>
         </div>
         <div class="order" v-else>
            <input type="tel">
            <button> {{ "BIND.VERIFY" | t }}  </button>
            <p @click="showUser = true"> {{ "BIND.TEXT3" | t }}  </p>
         </div>
         <div class="description ehem">
            <p class="title"> {{ "BIND.TIPS" | t }} </p>
            <ol>
               <li class="item">
                  <span> {{ "BIND.TEXT4" | t }} </span>
               </li>
               <li class="item">
                  <span> {{ "BIND.TEXT5" | t }} </span>
               </li>
               <li class="item">
                  <span> {{ "BIND.TEXT6" | t }} </span>
               </li>
            </ol>
         </div>
      </div>
      <div class="faq">
         <div class="ehem">
            <p class="title"> {{ "BIND.FAQ" | t }} </p>
            <ol>
               <li class="item">
                  <collapse :title="'BIND.TITLE_TEXT7' | t" :content="'BIND.TEXT7' | t"/>
               </li>
            </ol>
         </div>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .wrapper {
      background-color: $bg-wrapper;
      box-sizing: border-box;
      min-height: calc(100vh - 13.867vw);
      padding-bottom: 21.867vw;
      padding-left: 5.333vw;
      padding-right: 5.333vw;
      padding-top: 4.267vw;

      .ehem {

         margin-left: 2.667vw;
         text-align: left;

         .title {
            margin: 0;
            padding: 0;
            color: $color-blue-dark;
            font-size: 4.267vmin;
            font-weight: 500;
            line-height: 4.8vw;
            position: relative;

            &:before {
               content: "";
               width: .8vw;
               height: 4vw;
               background: #008eff;
               border-radius: .533vw;
               position: absolute;
               left: -2.133vw;
               top: 1px;
            }
         }

         ol {
            margin: 2.133vw 1.233vw;
            padding: 0;

            .item {
               font-weight: 400;
               line-height: 5.067vw;
               margin-bottom: 1.067vw;
               color: rgb(75, 98, 138);
               font-size: 3.467vmin;
            }
         }

      }

      .header {
         background-color: $white;
         border-radius: 2.133vw;
         box-shadow: rgba(8, 13, 39, 0.03) 0 0.533vw 3.2vw 0;
         box-sizing: border-box;
         color: $color-value;
         font-size: 3.733vmin;
         font-weight: 400;
         line-height: 5.6vw;
         padding: 3.2vw 17.067vw;
         position: relative;

         img {
            position: absolute;
            top: -2.133VW;
            width: 13.867vw;

            height: 15.467vw;
            left: -1.067vw;
         }
      }

      .content {
         background-color: $white;
         border-radius: 2.133vw;
         box-shadow: rgba(8, 13, 39, 0.03) 0 0.533vw 3.2vw 0;
         box-sizing: border-box;
         margin-top: 4.267vw;

         padding: {
            bottom: 7.467vw;
            left: 6.4vw;
            right: 6.4vW;
            top: 3.2vw;
         }

         text-align: center;

         .user,
         .order {
            margin-bottom: 5.333vw;

            input {
               border-radius: 6.133vw;
               color: rgb(190, 195, 207);
               font-size: 3.733vmin;
               font-weight: 400;
               height: 12.267vw;
               line-height: 4.8vw;
               margin-top: 4.267vw;
               text-align: center;
               Width: 100%;
               outline: none;
               border: 0;
            }

            .password-group {
               position: relative;

               .eye {
                  position: absolute;
                  right: 4.267vw;
                  top: 7.733vw;

                  img {
                     height: 5.333vw;
                     width: 5.333VW;
                  }
               }
            }

            button {
               background-color: rgb(230, 232, 235);
               border-radius: 6.133vw;
               color: $white;
               font-size: 4.8vmin;
               font-weight: 500;
               height: 12.267vw;
               line-height: 5.867vw;
               margin-top: 4.267VW;
               width: 100%;
               display: block;

               &.active {
                  background-color: rgb(0, 142, 255);
               }
            }

            p {
               margin: 0;
               padding: 0;
               color: rgb(69, 91, 130);
               display: inline-block;
               font-size: 3.733vmin;
               font-weight: 400;
               line-height: 4.8vw;
               margin-top: 3.2vw;
               position: relative;
               text-align: center;
            }
         }

      }

      .faq {
         background-color: $white;
         border-radius: 2.133vw;
         box-shadow: rgba(8, 13, 39, 0.03) 0 0.533vw 3.2vw 0;
         box-sizing: border-bOx;
         margin-top: 4.267vw;
         padding-bottom: 4.267vw;
         padding-left: 6.4vw;
         padding-right: 6.4vw;
         padding-top: 3.2vw;

      }
   }
</style>
<script>
   import Collapse from "../components/Collapse-For-FAQ.vue"
   export default {
      components: { Collapse },
      data: () => ({
         showPassword: false,
         showUser: true
      })
   }
</script>
