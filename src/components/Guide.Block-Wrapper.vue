<template>
   <div class="guide.block-wrapper">
      <div class="space" @click="$emit('hide')"></div>
      <div class="content">
         <div class="header">
            <div class="left" :class="{ active: tab == 0 }" @click="tab = 0">
               {{ "GUIDE_BLOCK.INST" | t }}
            </div>
            <div class="space"></div>
            <div class="right" :class="{ active: tab == 1}" @click="tab = 1">
               {{ "GUIDE_BLOCK.VERIFICATION" | t }}
            </div>
         </div>
         <div class="wrapper">
            <div class="wrapper.content">
               <ul class="item" v-if="tab == 0">
                  <li class="item">
                     <span class="index"> 1 </span>
                     <div class="wrapper.content.content">
                        <img src="https://tutuapp.vip/ios/img/home_installation_one_english@2x.d67dccea.png">
                        <p class="text">
                           Click <span> "download" </span>
                        </p>
                     </div>
                  </li>
               </ul>
               <ul class="item" v-if="tab == 1">
               </ul>
            </div>
         </div>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   @include "scss/variants";
   @font-face {
      font-family: DINCond;
      src: url("/fonts/DINCond.ttf");
   }

   .guide\.block-wrapper {
      height: 100%;
      left: 0;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 10000;

      .space {
         height: 40vw;
      }

      .content {
         border-radius: 7.467vw 7.467vw 0 0;
         height: calc(100vh - 39.467vw);
         overflow: hidden;
         background-color: rgb(249, 250, 252);
         display: flex;
         position: relative;
         flex-direction: column;
         width: 100%;

         .header {
            background-color: rgb(255, 255, 255);
            border-radius: inherit;
            display: flex;
            height: 13.333vw;
            position: relative;
            text-align: center;
            align-items: center;
            width: 100%;

            .left,
            .right {
               font-weight: 500;
               line-height: 13.333vw;
               color: rgb(162, 171, 191);
               font-size: 3.733vmin;

               flex: {
                  basis: 0;
                  grow: 1;
                  shrink: 1;
               }

               ;
               transition: all .222s ease;

               &.active {

                  color: $colorMain;
                  font-size: 4.267vmin;
               }
            }

            .space {
               background-color: rgb(240, 242, 245);
               height: 4.8vw;
               width: 1px;
            }
         }

         .wrapper {
            flex: {
               grow: 1;
               shrink: 1;
               basis: 0;
            }

            overflow: hidden scroll;

            &::-webkit-scrollbar {
               display: none;
            }

            -ms-overflow-style: none;
            scrollbar-width: none;

            ;
            padding: 0 4.267vw;

            .wrapper\.content {
               padding-bottom: 17.6vw;

               &>.item {
                  margin: 0;
                  padding: 0;
                  list-style: none;

                  .item {
                     align-items: center;
                     display: flex;
                     justify-content: center;
                     padding: 2.4vw 0;
                     position: relative;

                     .index {
                        color: rgb(255, 235, 207);
                        font-family: DINCond;
                        font-size: 42.667vmin;
                        font-weight: 900;
                        left: 0;
                        line-height: 42.667vw;
                        position: absolute;
                        top: 5.333vw;
                     }

                     .wrapper\.content\.content {
                        background-color: rgb(255, 255, 255);
                        border-radius: 4.267vw;
                        box-shadow: rgba(3, 14, 37, 0.06) 0 .8vw 5.333vw 0;
                        margin-top: 18.667vw;
                        overflow: hidden;
                        position: relative;
                        width: 68vw;

                        img {
                           width: 68vw;
                           margin-top: 10.667vw;
                        }

                        .text {
                           color: rgb(64, 89, 133);
                           font-size: 3.733vmin;
                           font-weight: 500;
                           line-height: 4.8vw;
                           padding: 7.467vw 5.333vw;
                           text-align: center;
                           margin: 0;

                           span {
                              color: $colorMain;
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   }
</style>
<script>
   export default {
      data() {
         return {
            tab: 0
         }
      }
   }
</script>
