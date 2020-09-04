<template>
   <div class="lite.topapp">
      <div class="picture">
         <img class="picture.image" src="https://photos.tutuapp.com/photo/special/000/001/423/414x155.jpg">
      </div>
      <div class="card-wrapper">
         <p class="title"> Top Game This holyday </p>
         <div class="description">
            8 ball
         </div>
         <div class="applist">
            <ul>
               <li>
                  <app-info/>
               </li>
            </ul>
         </div>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .lite\.topapp {
      width: 100%;

      .picture {
         .picture\.image {
            height: 49.867vw;
            width: 100vw;
         }
      }

      .card-wrapper {
         background-color: rgb(255, 255, 255);
         border-radius: 6.4vw 6.4vw 0 0;
         margin-top: -6.4vw;
         overflow: hidden;
         padding-top: 6.4Vw;
         position: relative;
         width: 100vw;
         z-index: 1;

         .title {
            margin: 0;
            padding: 0;
            font-weight: 400;
            line-height: 9.067vW overflow: hidden;
            padding: 0 5.333vw;
            text-overflow: ellipsis;
            width: 100vw;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            px box-sizing: border-box;
            color: rgb(55, 77, 115);
            display: -webkit-box;
            font-size: 6.4vmin;
         }

         .description {
            box-sizing: border-box;
            color: rgb(55, 77, 115);
            font-size: 3.733vmin;
            font-weight: 400;
            line-height: 5.867vw;
            margin-bottom: 4.267vw;
            margin-top: 4.267vW;
            padding: 0 5.333vw;
            width: 100vw;
         }

         .applist {
            ul {
               margin: 0;
               padding: 0;
               list-style: none;
               box-sizing: border-box;
               padding-right: 0 5.333vw;
            }
         }
      }
   }
</style>