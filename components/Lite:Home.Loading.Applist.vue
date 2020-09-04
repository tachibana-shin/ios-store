<template>
   <div class="wrapper.loading">
      <div class="bac.animation"></div>
      <div class="loading.title"></div>
      <div class="loading.applist">
         <ul>
            <li v-for="item in 10">
               <div class="appinfo">
                  <div class="appinfo.content">
                     <div class="icon"></div>
                     <div class="app.content">
                        <div class="app.title"></div>
                        <div class="VIP"></div>
                     </div>
                  </div>
                  <div class="button"></div>
               </div>
            </li>
         </ul>
      </div>
   </div>
</template>
<style lang="scss" scoped>

   .wrapper\.loading {
      position: relative;

      .bac\.animation {
         animation: backpos 1s ease-in-out infinite;

         @keyframes backpos {
            0% {
               background-position-x: -200px;
            }

            to {
               background-position-x: calc(200px + 100%)
            }
         }

         background: {
            image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, .5) 50%, rgba(255, 255, 255, 0) 80%);
            repeat: no-repeat;
            size: 15% 100%;
         }

         height: 250vh;
         position: absolute;
         transform: rotate(20deg) translateX(-150vw);
         width: 250vw;
         z-index: 999;
      }

      .loading\.title {
         background-color: rgb(237, 240, 245);
         border-radius: 2.667vw;
         height: 5.333vW;
         margin-top: 4.267vW;
         width: 37.333VW;
      }

      .loading\.applist {

         ul {
            margin: 0;
            padding: 0;
            list-style: none;

            li {

               .appinfo {
                  padding: 3.2vw 0;
                  position: relative;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;

                  .appinfo\.content {
                     display: flex;

                     .icon {

                        border-radius: 3.467vw;
                        display: block;
                        height: 18.667vw;
                        width: 18.667vw;
                     }

                     .app\.content {
                        height: 18.667vw;
                        justify-content: center;
                        margin-left: 4.267vw;
                        overflow: hidden;
                        position: relative;
                        text-align: left;
                        align-items: flex-start;
                        display: flex;
                        flex-direction: column;

                        .app\.title {
                           margin: 0;
                           padding: 0;
                           color: rgb(47, 64, 89);
                           font-size: 4.267vmin;
                           font-weight: 500;
                           line-height: 5.867vw;
                           margin-bottom: 2.133vw;
                           overflow-x: hidden;
                           text-overflow: ellipsis;
                           -webkit-box-orient: vertical;
                           -webkit-line-clamp: 2;
                        }

                        .VIP {

                           border-radius: 3.467vw;
                           display: block;
                           height: 4.8vw;
                           width: 8vw
                        }
                     }
                  }

                  .button {
                     border: none;
                     outline: none;
                     border-radius: 50%;
                     height: 12.267vw;
                     width: 12.267vw;

                     background: {
                        image: url("/assets/list.btn.download.svg");
                        repeat: no-repeat;
                        size: 100%;
                        position: center;
                     }

                     ;
                  }
               }

               .appinfo {
                  .appinfo\.content {
                     position: relative;

                     .icon {
                        background-color: rgb(237, 240, 245);
                     }

                     .app\.content {
                        .app\.title {
                           background-color: rgb(237, 240, 245);
                           width: 37.333vw;
                           height: 5.867vw;
                           border-radius: 2.133vw;
                        }

                        .VIP {
                           background-color: rgb(237, 240, 245);
                        }
                     }
                  }

                  .button {
                     background-color: rgb(237, 240, 245);
                     background-image: none;
                  }

               }
            }
         }
      }
   }
</style>
<script>
   export default {

   }
</script>