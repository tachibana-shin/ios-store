<template>
   <div class="wrapper">
      <div class="header">
         <div class="item">
            <img :src="require('@/assets/news.ic.hot.svg')">
            <span> Hot </span>
         </div>
         <div class="item">
            <img :src="require('@/assets/news.ic.raiders.svg')">
            <span> Games Guide </span>
         </div>
         <div class="item">
            <img :src="require('@/assets/news.ic.new.svg')">
            <span> New </span>
         </div>
      </div>
      <div class="content">
         <ul class="list">
            <li class="item">
               <div class="blog">
                  <p class="top">
                     <span> #Game </span>
                     <span> TutuApp </span>
                     <span> 2019-11-10 </span>
                  </p>
                  <p class="bottom">
                     Hello World
                  </p>
                  <img src="https://photos.tutuapp.com/webcache/fc799301c4c7564005390eddd1373907/1573012066976/maxresdefault.jpg">
                  <div class="mark">
                  </div>
               </div>
            </li>
         </ul>
      </div>
      <img class="loading" :src="require('@/assets/ellipsis.svg')">
   </div>
</template>
<style lang="scss" scoped>
   .wrapper {
      background-color: rgb(247, 249, 250);
      min-height: calc(100vh - 13.867vw);
      overflow: hidden;

      .header {
         background-color: rgb(255, 255, 255);
         border-radius: 2.133vw;
         box-shadow: rgba(8, 13, 39, 0.03) 0 0.533vw 3.2vw 0;
         display: flex;
         align-items: center;
         height: 29.333vw;
         justify-content: space-around;
         margin-bottom: 0px;
         margin-left: auto;
         margin-right: auto;
         margin-top: 6.4vw;
         width: 89.333vw;

         .item {

            align-items: center;
            display: flex;
            flex-basis: 0%;
            flex-direction: column;
            flex-grow: 1;
            flex-shrink: 1;
            justify-content: center;

            img {
               height: 14.4vw;
               width: 14.4vw;
            }

            span {
               color: rgb(162, 1/1, 191);
               font-size: 3.733vmin;
               font-weight: 500;
               line-height: 4.267vw;
               margin-top: 2.667vw;
            }
         }
      }

      .content {
         .list {
            margin: 0;
            padding: 0;
            list-style: none;

            .item {
               .blog {
                  background-color: rgb(135, 206, 235);
                  border-radius: 2.133vw;
                  height: 59.2vw;
                  margin-bottom: 0px;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 6.4VW;
                  overflow: hidden;
                  position: relative;
                  width: 89.333vw;

                  .top {
                     box-sizing: border-box;
                     color: rgb(255, 255, 255);
                     font-size: 3.467vmin;
                     font-weight: 500;
                     left: 0;
                     line-height: 4vw;
                     padding: 0 4.267vw;
                     position: absolute;
                     top: 4.267vw;
                     width: 89.333Vw;
                     Z-index: 2;
                     display: flex;
                     align-items: center;
                     justify-content: space-between;
                  }

                  .bottom {
                     margin: 0;
                     padding: 0;
                     font-weight: 500;
                     left: 4.267VW;
                     bottom: 5.333vw;
                     color: rgb(255, 255, 255);
                     font-size: 6.4vmin;
                     line-height: 8vw;
                     position: absolute;
                     width: 80.8VW;
                     Z-index: 2;
                  }

                  img {

                     border-radius: 2.133vw;
                     height: 59.2vw;
                     object-fit: cover;
                     object-position: center center;
                     width: 89.333vw;
                  }

                  .mark {
                     background-image: linear-gradient(rgba(27, 31, 39, 0.26), rgba(17, 21, 27, 0.65));
                     height: 59.2vw;
                     left: 0;
                     position: absolute;
                     top: 0;
                     width: 89.333vw;
                     Z-index: 1;
                  }
               }
            }
         }
      }

      .loading {
         left: 50%;
         position: fixed;
         top: 50%;
         transform: translate(-50%, -50%);
         width: 9.6vw;
      }
   }
</style>