<template>
   <div class="HowToInstall" @click="$emit('close')">
      <div class="content" @click.stop>
         <div class="swiper-wrapper">
            <p class="title"> {{ "HOME.INST_GUIDE" | t }} </p>
            <swiper :options="{
               pagination: {
                  el: '.pagination-swiper',
                  clickable: true,
                  bulletClass: 'bullet',
                  bulletActiveClass: 'bullet-active'
               }
            }">
               <swiper-slide class="swiper-item" v-for="item in 5" :key="item">
                  <img src="https://www.tutuapp.vip/ios/img/pop_img_one_english@2x.f661a0e2.png">
               </swiper-slide>
               <div class="pagination-swiper" slot="pagination">
               </div>
            </swiper>
         </div>
         <div class="footer">
            <p class="video">
               <img :src="require('@/assets/home.ic.video.svg')">
               {{ "HOME.INST_GUIDE" | t }}
            </p>
            <button class="install">
               {{ "INST" | t }}
            </button>
         </div>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   @import "./pagination-custom.css";
   @import "~@/scss/variants";

   .HowToInstall {
      display: flex;
      align-items: center;
      height: 100%;
      justify-content: center;
      left: 0;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 9999;

      .content {
         display: flex;
         border-radius: 2.133vw;
         flex-direction: column;
         height: 100.267vw;
         overflow: hidden;
         text-align: center;
         width: 79.2vW;

         .swiper-wrapper {
            background-image: url("../assets/howtoinstall.bg.svg");
            background-repeat: no-repeat;
            background-size: cover;
            height: 65.067vw;
            position: relative;

            .title {
               @include distance0;
               font-weight: 500;
               left: 0;
               line-height: 5.333vw;
               position: absolute;
               text-align: center;
               top: 4.26vw;
               color: $white;
               font-size: 4vmin;
               width: 100%;

            }

            .swiper-item {

               height: 65.067vw;
               position: relative;
               width: 79.467vw;

               img {
                  position: absolute;
                  top: 50%;
                  transform: translate(-50%, -50%);
                  width: 57.067vw;
                  height: 48.533vw;
                  left: 50%;
               }
            }

         }

         .footer {
            background-color: $white;
            box-sizing: border-box;
            height: 35.2vw;
            padding-top: 9.067vw;

            .video {
               @include distance0;
               color: $color-blue-black;
               font-size: 3.733vmin;
               font-weight: 500;
               line-height: 5.333vw;

               img {

                  height: 5.333vw;
                  margin-right: 2.133vw;
                  vertical-align: middle;
                  width: 5.333vw;
               }
            }

            .install {
               background-color: $colorMain;
               border-radius: 6.133vw;
               color: $white;
               font-size: 4vmin;
               font-weight: 500;
               height: 11.733vw;
               line-height: 5.333vw;
               margin-top: 4.267vw;
               outline-style: none;
               width: 55.733vw;
            }
         }
      }

   }
</style>
<script>
   import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper"
   import 'swiper/swiper-bundle.css'
   export default {
      components: {
         Swiper,
         SwiperSlide
      },
      directives: {
         swiper: directive
      }
   }
</script>
