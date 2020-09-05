<template>
   <div class="main">
      <div class="wrapper" v-if="!loading">
         <div class="banner">
            <carousel-3d :autoplay="true" :autoplay-timeout="3000" :border="0" :autoplay-hover-pause="true" :height="164" :width="330" background-color="#00000000" :per-page="3">
               <slide v-for="(item, index) in 4" :key="index" :index="index" style="border-radius: 10px">
                  <img :src="'/assets/' + item + '.jpg'">
               </slide>
            </carousel-3d>
         </div>
         <div class="applist">
            <ul>
               <li v-for="item in 20">
                  <app-info src="https://photos.tutuapp.com/picture/app_ios/cn/002/54/98/20/2549820.175x175-75.jpg" name="Pokémon" :id="item" />
               </li>
            </ul>
         </div>
         <loading-more />
      </div>
      <lite-loading v-else :state="{
         swiper: true, applist: true
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
         loading: false
      })
   }
</script> 