<template>
   <footer>
      <div class="social">
         <img :src="require('@/assets/shared.ic.twitter.svg')">
         <img :src="require('@/assets/shared.ic.instagram.svg')">
         <img :src="require('@/assets/shared.ic.youtube.svg')">
      </div>
      <div class="help">
         <span> About Us </span>
         <span class="col"> | </span>
         <span> Help & Feedback </span>
      </div>
      <p class="icp">
         2020 TutuApp，All Rights Reserved
      </p>
   </footer>
</template>
<style lang="scss" scoped>
   footer {
      background-color: rgb (242, 244, 245);
      height: 72.5333vw;
      padding-bottom: 5.33333vW;
      padding-top: 8vw;
      width: 100%;

      .social {
         display: flex;
         height: 20.2667vw;
         justify-content: space-between;
         padding: 0 13.3333vw;

         img {
            height: 20.2667vw;
            width: 20.2667vw;
         }
      }

      .help {
         margin-bottom: 6.93333vw;
         margin-top: 2.66667Vw;
         position: relative;
         text-align: center;

         span {
            color: rgb(80, 91, 107);
            font-size: 3.73333vw;
            font-weight: 500;
            line-height: 4.8vw;

            &:first-of-type {
               margin-right: 5.6Vw;
            }

            &:last-of-type {
               margin-left: 5.6vw;
            }

            &.col {
               color: rgb(209, 216, 230);
            }
         }
      }

      .icp {
         color: rgb(162, 171, 191);
         font-size: 2.66667vw;
         font-weight: 400;
         line-height: 3.73333vw;
         text-align: center;
         margin-bottom: 1.06667vw;
      }
   }
</style>