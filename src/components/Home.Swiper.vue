<template>
   <div class="download.slider">
      <div class="content">
         <swiper class="swiper-content" :options="{
               pagination: {
                  el: '.swiper-pagination', 
                  clickable: true
               },
               direction: 'vertical'
            }">
            <swiper-slide class="item-swiper" v-for="i in 7" :key="i - 1">
               <div class="content">
                  <div class="top">
                     <h3> Slide 1 </h3>
                     <p> Description </p>
                  </div>
                  <div class="bottom">
                     <img src="https://photos.tutuapp.com/photo/android/web/download_game.png">
                     <button> Install </button>
                  </div>
               </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination">
            </div>
         </swiper>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .download\.slider {
      box-sizing: border-box;
      width: 100%;
      height: 100vh;

      .content {
         overflow: hidden;
         position: relative;
         width: 100%;
         height: 100%;
         background-color: rgb(6, 12, 80);

         .swiper-content {

            .item-swiper .content {
               height: 100vh;
               padding-top: (28.8vw - 13.867vw);
               width: 100%;

               .top {
                  opacity: 0;
                  transform: translateY(-20vh);

                  h3 {
                     color: rgba(255, 255, 255, 0.8);
                     font-size: 5.33333vw;
                     font-weight: 500;
                     letter-spacing: 1px;
                     line-height: 7.46667vw;
                     margin-bottom: 2.13333vw;
                     text-align: center;
                  }

                  p {
                     color: rgba(255, 255, 255, 0.6);
                     font-size: 3.2vw;
                     font-weight: 400;
                     line-height: 4.53333VW;
                     padding: 0 11.7333vw;
                     text-align: center;
                     white-space: normal;
                  }
               }

               .bottom {
                  opacity: 0;
                  transform: translateY(20vh);

                  img {
                     vertical-align: middle;
                     display: block;
                     height: 72vw;
                     margin-bottom: 0;
                     margin-left: auto;
                     margin-right: auto;
                     margin-top: 8.53333vw;
                     width: 88vw;
                  }

                  button {
                     background-color: rgb(255, 174, 11);
                     border: 0.53333vw solid $white;
                     border-radius: 8vw;
                     color: $white;
                     display: block;
                     font-size: 4.26667vw;
                     font-weight: 500;
                     letter-spacing: 1px;
                     line-height: 5.86667vw;
                     margin: 5.33333vw auto 0 auto;
                     padding: 4vw 13.3333vw;
                     width: 45.8667vw;
                  }
               }
            }

            .item-swiper.swiper-slide-active .content {

               .top,
               .bottom {
                  transition: all .3s .5s cubic-bezier(0.21, 1.3, 0.51, 1.27);
                  transform: translateY(0px) translatez(0px);
                  opacity: 1;
               }
            }



            .swiper-pagination {
               bottom: 0.53333vw;
               text-align: center;
               transform: translatez(1px);

               display: block;
               left: auto;
               padding: 0;
               position: absolute;
               right: 4vw;
               transform: translateY(-50%);
               width: 3.73333vw;
               z-index: 30;
               bottom: 44%;

               &>span {
                  vertical-align: bottom;
                  background-color: rgba(52, 122, 243, 0.4);
                  border-radius: 50%;
                  display: block;
                  height: 2.13333vw;
                  margin: 1.6vw auto;
                  width: 2.13333vw;

                  &.acitve {
                     background-color: rgb(52, 122, 243);
                     height: 3.2vW;
                     width: 3.2vw;
                  }

               }
            }
         }
      }
   }
</style>
<script>
   import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper"
   import "swiper/swiper.scss"

   import { Swiper as SwiperClass, Pagination, Mousewheel } from 'swiper'

   SwiperClass.use([Pagination, Mousewheel])

   export default {
      components: { Swiper, SwiperSlide },
      directives: {
         swiper: directive
      }
   }
</script>