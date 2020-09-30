<template>
   <div class="wrapper.loading">
      <bac-animation />
      <div class="wrapper.content">
         <div class="content">
            <p class="title-1"></p>
            <p class="title-2"></p>
            <p class="des-1"></p>
            <p class="des-2"></p>
            <p class="des-3"></p>
            <div class="list">
               <list-app-loading :children="true" padding="0" />
            </div>
         </div>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .wrapper\.loading {
      position: relative;
      width: 100%;
      overflow: hidden;
      padding-top: 11.467vw;

      .wrapper\.content {
         background-color: $bg-noactive;
         height: 100%;
         overflow: hidden;

         .content {
            background-color: $white;
            border-radius: 6.4vw 6.4vw 0 0;
            box-sizing: border-box;
            margin-top: 44.267vw;
            overflow: hidden;
            padding: 8vw 5.333vw;

            p {
               @include distance0;
            }

            .title-1,
            .title-2 {
               background-color: $bg-noactive;
               border-radius: 4.267vw;
               height: 9.067vw;
            }

            .title-2 {
               margin-top: 4.267vw;
               width: 60%;
            }

            .des-1,
            .des-2,
            .des-3 {
               background-color: $bg-noactive;
               border-radius: 2.933vw;
               height: 5.867vw;
               margin-top: 6.4vw;
            }

            .des-2 {
               margin-top: 2.667vw;
               width: 80%;
            }

            .des-3 {
               margin-top: 2.667vw;
               width: 90%;
            }

            .list {
               margin-top: 9.6vw;
            }


         }
      }
   }
</style>
<script>
   import BacAnimation from "./Loading:bac.animation.vue"
   import ListAppLoading from "./ListApp.Loading.vue"
   export default {
      components: { BacAnimation, ListAppLoading }
   }
</script>