<template>
   <div class="wrapper">
      <img :src="require('@/assets/bg12.png')" class="bg">
      <section class="section-1">
         <h3> About Tutuapp </h3>
         <p class="pedding-1"> TutuApp has become a branded app store over the world. Hundreds of millions of users have downloaded mobile apps, games and initiated heated discussions here. </p>
         <p> Currently, TutuApp supports more than 10 languages, including English, Arabic, French, Spanish, Portuguese, Chinese, Japanese, and Korean. It will support more languages in the near future. </p>
         <hr>
         <h4> Global App Store </h4>
         <p> Cover multiple languages </p>
         <p>Support iOS, Android and Web</p>
         <p>Hundreds of millions of users‘ favorite App Store</p>
         <img class="img-global" :src="require('@/assets/us.img.one.png')">
      </section>
      <section class="section-2">
         <h4> Games Cooperation </h4>
         <p> Include cooperated SDK, Release easily and globally </p>
         <p> Support different payment methods </p>
         <img class="img-global" :src="require('@/assets/us.img.two.png')">
      </section>
      <section class="section-3">
         <h4> Advisement Cooperation </h4>
         <p> Global promotion </p>
         <p> Display Ads in multiple ways </p>
         <img class="img-global" :src="require('@/assets/us.img.three.png')">
      </section>
      <section class="section-4">
         <h4> Contact Us </h4>
         <div class="flex">
            <div class="item">
               <p> Games Cooperation </p>
               <p class="secodary"> business@tutuapp.vip <img :src="require('@/assets/nav.ic.copy.svg')"> </p>
            </div>
            <div class="item">
               <p> Advisement Cooperation </p>
               <p class="secodary"> ad@tutuapp.vip <img :src="require('@/assets/nav.ic.copy.svg')"> </p>
            </div>
         </div>
      </section>
      <app-footer/>
   </div>
</template>
<style lang="scss" scoped>
   .wrapper {
      position: relative;

      .bg {
         position: fixed;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         z-index: -1;
      }

      %h4 {

         font-weight: 500;
         line-height: 8.8vw;
         margin-bottom: 4.26667vw;
         padding-left: 9.6vw;
         font-size: 6.4VW;
      }

      %p {

         font-size: 3.73333vw;
         font-weight: 400;
         line-height: 5.86667vw;
         padding-left: 9.6vw;
         padding-right: 17.6vw;
      }

      .section-1 {

         padding-bottom: 7.46667vw;
         padding-top: 11.7333vw;

         h3 {
            color: rgb(229, 236, 249);
            font-size: 7.46667vw;
            font-weight: 500;
            line-height: 10.6667vw;
            margin-bottom: 8.53333vw;
            padding-left: 9.6vw;
         }

         p {
            color: rgba(229, 236, 249, 0.9);
            @extend %p;
         }

         .pedding-1 {
            margin-bottom: 4.26667vw;
         }

         hr {
            @include distance0;
            background-color: rgb(197, 203, 219);
            height: 0.53333vw;
            margin-bottom: 10.6667vw;
            margin-top: 10.6667vw;
            margin-left: (9.6vw);
         }

         h4 {
            color: rgba(229, 236, 249, 0.86);
            @extend %h4;
         }

         .img-global {
            height: 61.8667vw;
            margin-bottom: 0px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 8.53333vw;
            width: 87.4667vw;
         }
      }

      .section-2 {
         background-color: rgb(255, 255, 255);
         padding-bottom: 10.6667vw;
         padding-top: 13.3333vw;

         h4 {
            color: rgb(22, 43, 72);
            @extend %h4;
         }

         p {
            color: rgb(36, 53, 90);
            @extend %p;
         }

         .img-global {
            height: 50.6667vw;
            margin-bottom: 0px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 7.46667vw;
            width: 87.4667vw;
         }
      }

      .section-3 {

         background-color: rgb(244, 245, 247);
         padding-bottom: 8.26667vw;
         padding-top: 13.3333vw;

         h4 {
            color: rgb(22, 43, 72);
            @extend %h4;
         }

         p {
            color: rgb(36, 53, 90);
            @extend %p;
         }

         .img-global {
            height: 50.1333vw;
            margin-bottom: 0;
            margin-left: auto;
            margin-right: auto;
            margin-top: 3.2vw;
            width: 87.4667VW;
         }
      }

      .section-4 {

         background-color: rgb(249, 250, 252);
         padding: 8.53333vw;

         h4 {
            color: rgb(22, 43, 72);
            margin-bottom: 4.26667vw;
            padding: 0;
         }

         .flex {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .item {
               p {
                  @include distance0;
                  color: rgb(36, 53, 90);
                  font-size: 3.2vw;
                  font-weight: 400;
                  line-height: 5.33333vw;

                  &.secondary {
                     color: rgb(117, 136, 169);
                     line-height: 4.8vw;
                  }
               }
            }
         }
      }

   }
</style>
<script>
   import AppFooter from "../components/Footer.vue"
   export default {
      components: { AppFooter }
   }
</script>