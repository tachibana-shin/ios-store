<template>
   <div class="wrapper_loading">
      <bac-animation />
      <div class="wrapper_result">
         <div class="keyword-hot">
            <p class="title"></p>
            <ul class="list">
               <li v-for="item in 5"></li>
            </ul>
         </div>
         <div class="interset">
            <p class="title"></p>
            <ul class="list">
               <li class="item" v-for="item in 8">
                  <div class="icon"></div>
                  <p class="text"></p>
               </li>
            </ul>
         </div>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .wrapper_loading {
      background-color: rgb(255, 255, 255);
      box-sizing: border-box;
      overflow: hidden;
      position: relative;
      width: 100%;

      .wrapper_result {
         margin-top: 21.333vw;
         padding: 0 5.333vw;
         position: relative;

         .keyword-hot {
            padding-top: 1.333vw;

            .title {
               margin: 0;
               padding: 0;
               background-color: rgb(237, 240, 245);
               border-radius: 2.667vw;
               height: 6.4vw;
               margin-top: 4vw;
               width: 48VW;
            }

            .list {
               margin: 0;
               padding: 0;
               list-style: none;
               display: flex;
               flex-wrap: wrap;

               li {
                  background-color: rgb(237, 240, 245);
                  border-radius: 4.8vw;
                  height: 9.6vw;
                  margin-right: 8vw;
                  margin-top: 5.333vw;
                  width: 32vw;
               }
            }
         }

         .interset {
            margin-top: 10.667vw;

            .title {
               background-color: rgb(237, 240, 245);
               border-radius: 2.667vw;
               height: 6.4vw;
               margin-top: 4VW;width: 66.667VW;
            }

            .list {
               display: flex;
               flex-wrap: wrap;
               justify-content: space-between;
               margin: 0;
               padding: 0;
               list-style: none;

               .item {
                  margin-top: 3.733vw;
                  height: 23.467Vw;
                  margin-top: 4.267vw;
                  width: 18.667vw;
                  display: flex;
                  flex-direction: column;

                  .icon {
                     background-color: rgb(237, 240, 245);
                     border-radius: 2.667vw;
                     height: 18.667vw;
                     width: 18.667vw;
                  }

                  .text {
                     margin: 0;
                     padding: 0;
                     background-color: rgb(237, 240, 245);
                     border-radius: 1.6vw;
                     flex-basis: 0;
                     flex-grow: 1;
                     flex-shrink: 1;
                     margin-top: 1.6vw;
                     
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