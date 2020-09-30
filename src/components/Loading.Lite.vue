<template>
   <div class="wrapper.loading">
      <bac-animation />
      <div class="app">
         <div class="swiper" v-if="state.swiper">
            <div class="top-swiper"></div>
         </div>
         <div class="apphot" v-if="state.apphost">
            <div class="title">
            </div>
            <ul>
               <li v-for="item in 8" :key="item">
                  <div class="top">
                  </div>
                  <div class="bottom">
                  </div>
               </li>
            </ul>
         </div>
         <list-app-loading :children="true" v-if="state.applist" />
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .wrapper\.loading {
      background-color: $white;
      height: 100vh;
      left: 0;
      padding-top: 25.333vw;
      padding-bottom: 20.533vw;
      box-sizing: border-box;
      overflow: hidden scroll;
      position: fixed;
      top: 0px;
      width: 100vw;
      z-index: 2;

      .app {
         padding-top: 8.533vw;

         .swiper {
            background-color: $bg-noactive;
            height: 38.133vw;
            width: 100vw;

            .top-swiper {
               background-color: $bg-noactive;
               border-radius: 2.667vw;
               height: 45.333vw;
               margin: 0 auto;
               transform: translateY(-3.2vw);
               width: 89.6vw;
            }
         }

         .apphot {
            margin-top: 10.133vw;
            padding: 0 5.333vw;
            box-sizing: border-box;

            .title {
               background-color: $bg-noactive;
               border-radius: 2.133vw;
               height: 5.867vw;
               width: 21.333vw;
            }

            ul {
               @include distance0;
               list-style: none;
               display: flex;
               flex-wrap: wrap;
               justify-content: space-between;
               -webkit-box-pack: justify;

               li {
                  display: flex;
                  flex-direction: column;
                  height: 23.467vw;
                  margin-top: 4.267vw;
                  width: 18.667vw;
                  -webkit-box-direction: normal;
                  -webkit-box-orient: vertical;

                  .top {
                     background-color: $bg-noactive;
                     border-radius: 3.733vw;
                     height: 18.667vw;
                     width: 18.667vw;
                  }

                  .bottom {

                     background-color: $bg-noactive;
                     border-radius: 1.6Vw;
                     flex-basis: 0%;
                     flex-grow: 1;
                     flex-shrink: 1;
                     margin-top: 1.6vw;
                     -webkit-box-flex: 1;
                  }
               }
            }
         }
      }
   }
</style>
<script>
   import ListAppLoading from "./ListApp.Loading.vue"
   import BacAnimation from "./Loading:bac.animation.vue"
   export default {
      props: {
         state: Object
      },
      components: { ListAppLoading, BacAnimation }
   }
</script>