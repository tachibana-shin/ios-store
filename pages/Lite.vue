<template>
   <div class="main">
      <div class="wrapper" v-if="true">
         <div class="banner">
            <carousel-3d :autoplay="true" :autoplay-timeout="3000" :border="0" :autoplay-hover-pause="true" :height="164" :width="330" background-color="#00000000" :per-page="3">
               <slide v-for="(item, index) in 4" :key="index" :index="index" style="border-radius: 10px">
                  <img :src="'/assets/' + item + '.jpg'">
               </slide>
            </carousel-3d>
         </div>
         <div class="apphost">
            <p class="title">
               <img class="icon" src="/assets/home.ic.hot.svg">
               <span>Hot</span>
            </p>
            <div class="content">
               <ul class="list">
                  <li class="item" v-for="item in 8">
                     <img src="https://photos.tutuapp.com/picture/app_ios/cn/002/54/98/20/2549820.175x175-75.jpg">
                     <p>Pokémon</p>
                  </li>
               </ul>
            </div>
         </div>
         <div class="applist">
            <ul>
               <li v-for="item in 20">
                  <app-info src="https://photos.tutuapp.com/picture/app_ios/cn/002/54/98/20/2549820.175x175-75.jpg" name="Pokémon" :id="item" />
               </li>
            </ul>
         </div>
         <loading-more/>
      </div> 
      <lite-loading v-else :state="{
         swiper: true, apphost: true, applist: true
      }" />
      <lite-footer />
   </div>
</template>
<style lang="scss" scoped>
   .main {
      position: relative;

      .wrapper {
         padding-top: (11.567vw + 13.867);
         background-color: #fff;

         .banner {
            position: relative;

            img {
               object-fit: cover;
               object-position: 50% 50%;
            }
         }

         .apphost {
            margin-bottom: 4.8vw;

            .title {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
               color: rgb(22, 43, 72);
               display: flex;
               font-size: 4.267vmin;
               font-weight: 500;
               line-height: 5.867vw;
               overflow: hidden;
               padding: 0 5.333vw;
               align-items: center;

               .icon {
                  height: 5.867vw;
                  margin-top: -0.8vW;
                  vertical-align: middle;
                  width: 5.867vw;
               }

               span {
                  margin-left: 1.067vw;
               }
            }

            .content {
               width: 100%;
               overflow: hidden;

               .list {
                  margin: 0;
                  padding: 0;
                  list-style: none;
                  flex-wrap: wrap;
                  justify-content: space-between;
                  padding: 0 5.333vw;
                  width: 100vw;
                  box-sizing: border-box;
                  display: flex;

                  .item {
                     box-sizing: border-box;
                     display: flex;
                     align-items: center;
                     flex-direction: column;
                     height: 24.533vw;
                     margin-top: 4.267vw;
                     text-align: center;
                     width: 18.667vw;

                     img {
                        border-radius: 3.467vw;
                        height: 18.667vw;
                        width: 18.667VW;
                     }

                     p {
                        margin: 0;
                        padding: 0;
                        color: rgb(11, 57, 95);
                        display: inline-block;
                        font-size: 3.2vmin;
                        font-weight: 500;
                        line-height: 3.733vw;
                        margin-top: 2.133vw;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        width: 18.667vw;
                     }
                  }
               }
            }
         }

         .applist {
            ul {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
               padding: 0 5.333vw;
               list-style: none;
            }

         }
      }
   }
</style>
<script>
   import LiteFooter from "../components/Lite.Footer.vue"
   import LiteLoading from "../components/Lite.Loading.vue"
   import AppInfo from "../components/AppInfo.vue"
   import LoadingMore from "../components/Button:Loading.More.vue"

   import { Carousel3d, Slide } from "vue-carousel-3d"
   export default {
      components: { LiteFooter, LiteLoading, Carousel3d, Slide, AppInfo, LoadingMore },
      data: () => ({
         banners: [],
         loading: true
      })
   }
</script>