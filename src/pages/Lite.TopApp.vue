<template>
   <div class="wrapper">
      <div class="lite.topapp" v-if="false">
         <div class="picture">
            <img class="picture.image" :src="TopApp.picture">
         </div>
         <div class="card-wrapper">
            <p class="title"> {{ TopApp.title }} </p>
            <div class="description">
               {{ TopApp.description }}
            </div>
            <div class="applist">
               <ul>
                  <li v-for="item in TopApp.items">
                     <app-info :data="item" />
                  </li>
               </ul>
            </div>
         </div>
      </div>
      <top-app-loading />
   </div>
</template>
<style lang="scss" scoped>
   .wrapper {
      width: 100%;
      position: relative;

      .lite\.topapp {
         width: 100%;
         padding-top: 11.467vw;

         .picture {
            .picture\.image {
               height: 49.867vw;
               width: 100vw;
            }
         }

         .card-wrapper {
            background-color: $white;
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
               line-height: 9.067vW;
               overflow: hidden;
               padding: 0 5.333vw;
               text-overflow: ellipsis;
               width: 100vw;
               -webkit-box-orient: vertical;
               -webkit-line-clamp: 2;
               box-sizing: border-box;
               color: $color-blue-dark;
               display: -webkit-box;
               font-size: 6.4vmin;
            }

            .description {
               box-sizing: border-box;
               color: $color-blue-dark;
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
   }
</style>
<script>
   import AppInfo from "../components/AppInfo.vue"
   import TopAppLoading from "../components/Lite.TopApp.Loading.vue"
   export default {
      components: { AppInfo, TopAppLoading },
      data: () => ({
         TopApp: {
            title: "",
            picture: "",
            description: "",
            items: []
         }
      }),
      created() {

      }
   }
</script>
