<template>
   <div class="loading-overlay">
      <bac-animation />
      <div class="content">
         <ul class="list">
            <li v-for="item in 3">
               <div class="index">
                  <p></p>
               </div>
               <div class="app">
                  <div class="icon"></div>
                  <div class="info">
                     <p></p>
                     <div class="rate">
                        <span class="point"></span>
                        <div class="rate-star"></div>
                     </div>
                     <p class="type"></p>
                  </div>
                  <button class="detail"></button>
               </div>
            </li>
         </ul>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .loading-overlay {
      position: relative;
      width: 100%;
      margin-top: -16.2667vw;
      overflow: hidden;

      .content {
         background-color: rgb(250, 251, 252);
         border-radius: 6.4vw 6.4vw 0 0;
         overflow: hidden;
         padding-top: 8.53333vw;
         position: relative;
         width: 100%;
         z-index: 2;

         .list {
            padding: 0 5.33333vw 0 4.26667vw;

            li {
               align-items: center;
               display: flex;
               height: 21.3333vw;
               margin-bottom: 7.46667vw;
               width: 90.4vw;

               .index {
                  align-items: center;
                  display: flex;
                  height: 100%;
                  width: 12.266vw;

                  p {
                     height: 8.53333vw;
                     width: 8.53333vw;
                     background-color: $bg-noactive;
                     border-radius: 1.6vw;
                  }

               }

               .app {
                  align-items: center;
                  display: flex;
                  justify-content: space-between;
                  width: 100%;
                  position: relative;

                  .icon {
                     height: 21.3333vw;
                     width: 21.3333vw;
                     border-radius: 18%;
                     background-color: $bg-noactive;
                  }

                  .info {
                     flex: {
                        basis: 0;
                        grow: 1;
                     }

                     position: relative;
                     height: 100%;

                     margin: {
                        left: 3.75vw;
                        right: 3.75vw;
                     }

                     ;

                     p {
                        background-color: $bg-noactive;
                        border-radius: 1.6vw;
                        height: 5.3333vw;
                     }

                     .rate {
                        background-color: $bg-noactive;
                        border-radius: 1.6vw;
                        height: 4.267vw;
                        width: 80%;
                        margin: 0.53333vw 0;
                     }

                     .type {
                        width: 30%;
                     }
                  }

                  .detail {
                     border-radius: 5.06667vw;
                     height: 9.6vw;
                     width: 17.8667vw;
                     background-color: $bg-noactive;
                  }
               }
            }
         }

      }
   }
</style>
<script>
   import BacAnimation from "./Loading:bac.animation.vue"
   export default {
      components: { BacAnimation }
   }
</script>