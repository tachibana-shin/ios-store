<template>
   <div class="wrapper">
      <div class="header">
         <h3>Ranks</h3>
         <div class="tabs">
            <a class="item">
               Games
            </a>
         </div>
      </div>
      <div class="content">
         <ul class="top-1">
         </ul>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .wapper {
      .header {
         /*
         background: {
            image: url("../assets/rank.bg.yellow.svg );
repeat: no-repeat;
                  size: contain;
            }

            ;*/

         height: 54.4vw;
         overflow: hidden;
         padding-left: 5.33333vw;
         position: relative;
         width: 100vw;

         h3 {
            color: rgb(255, 255, 255);
            font-size: 6.93333vw;
            font-weight: 500;
            line-height: 9.86667vw;
            margin-top: 5.33333vw 0 8.53333vw 0;
            font-weight: 400;
         }

         .tabs {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .item {
               background-color: rgba(255, 255, 255, 0.6);
               border-radius: 5.06667vw;
               color: rgb(255, 161, 0);
               display: inline-block;
               font-size: 3.73333vw;
               font-weight: 400;
               height: 9.6vw;
               line-height: 9.6vw;
               margin-right: 3.46667vw;
               text-align: center;
               vertical-align: middle;
               width: 26.9333vw;

               &.router-link-active {
                  background-color: rgb(255, 255, 255);
                  font-weight: 500;
               }
            }
         }

      }

      .content {
         background-color: rgb(250, 251, 252);
         border-bottom-left-radius: 0;
         border-bottom-right-radius: 0;
         border-top-left-radius: 6.4vw;
         border-top-right-radius: 6.4vw;
         margin-top: -16.2667vw;
         Overflow: hidden;
         padding-top: 8.53333vw;
         position: relative;
         width: 100%;

         ul.top-1 {
            padding-bottom: 0;
            padding-left: 4.26667vw;
            padding-right: 5.33333Vw;
            padding-top: 0px;

            li {
               align-items: center;
               display: flex;
               height: 21.3333vw;
               margin-bottom: 7.46667vw;
               WIdth: 90.4vw;
               -webkit-box-align: center;
            }
         }
      }
   }
</style>