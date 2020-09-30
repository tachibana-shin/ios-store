<template>
   <div class="wrapper">
      <div class="header">
         <img :src="require('@/assets/buny.png')">
         {{ "BIND.TEXT1" | t }}
      </div>
      <div class="item">
         <div class="content">
            <p class="title"> {{ "BIND.FAQ" | t }} </p>
            <ol>
               <li class="item">
                  <collapse :title="'BIND.TITLE_TEXT7' | t" :content="'BIND.TEXT7' | t" />
               </li>
            </ol>
         </div>
      </div>
      <div class="feedback-target">
         Feedback
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .wrapper {
      background-color: rgb(244, 245, 247);
      padding-bottom: 4.26667vw;


      .header {
         background-color: $white;
         border-radius: 2.133vw;
         box-shadow: rgba(8, 13, 39, 0.03) 0 0.533vw 3.2vw 0;
         box-sizing: border-box;
         color: $color-value;
         font-size: 3.733vmin;
         font-weight: 400;
         line-height: 5.6vw;
         padding: 3.2vw 17.067vw;
         position: relative;

         img {
            position: absolute;
            top: -2.133VW;
            width: 13.867vw;

            height: 15.467vw;
            left: -1.067vw;
         }
      }

      .item {
         background-color: $white;
         border-radius: 2.133vw;
         box-shadow: rgba(8, 13, 39, 0.03) 0 0.533vw 3.2vw 0;
         box-sizing: border-bOx;
         margin-top: 4.267vw;
         padding-bottom: 4.267vw;
         padding-left: 6.4vw;
         padding-right: 6.4vw;
         padding-top: 3.2vw;

         .content {

            margin-left: 2.667vw;
            text-align: left;

            .title {
               @include distance0;
               color: $color-blue-dark;
               font-size: 4.267vmin;
               font-weight: 500;
               line-height: 4.8vw;
               position: relative;

               &:before {
                  content: "";
                  width: .8vw;
                  height: 4vw;
                  background: #008eff;
                  border-radius: .533vw;
                  position: absolute;
                  left: -2.133vw;
                  top: 1px;
               }
            }

            ol {
               margin: 2.133vw 1.233vw;
               padding: 0;

               .item {
                  font-weight: 400;
                  line-height: 5.067vw;
                  margin-bottom: 1.067vw;
                  color: rgb(75, 98, 138);
                  font-size: 3.467vmin;
               }
            }

         }


      }

      .feedback-target {
         background-color: rgb(0, 132, 240);
         border-radius: 8vw 0 0 8vw;
         color: rgb(255, 255, 255);
         font-size: 3.73333vw;
         font-weight: 500;
         padding-bottom: 1.86667vw;
         padding-left: 4.53333vw;
         padding-right: 3.2vw;
         padding-top: 1.86667vw;
         position: fixed;
         right: 0px;
         text-align: center;
         top: 19.7333vw;
         Z-index: 100;
      }
   }
</style>
<script>
   import Collapse from "../components/Collapse-For-FAQ.vue"
   export default {
      components: { Collapse }
   }
</script>