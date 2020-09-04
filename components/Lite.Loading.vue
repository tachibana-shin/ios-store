<template>
   <div class="wrapper.loading">
      <div class="bac.animation"></div>
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
         <div class="applist" v-if="state.applist">
            <ul>
               <li v-for="item in 10">
                  <div class="icon"></div>
                  <div class="content">
                     <div class="name"></div>
                     <div class="vip"></div>
                  </div>
                  <div class="button"></div>
               </li>
            </ul>
         </div>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .wrapper\.loading {
      background-color: rgb(255, 255, 255);
      height: 100vh;
      left: 0;
      margin-top: 25.333vw;
      overflow: hidden;
      position: fixed;
      top: 0px;
      width: 100vw;
      z-index: 1;

      .bac\.animation {
         animation: backpos 1s ease-in-out infinite;

         @keyframes backpos {
            0% {
               background-position-x: -200px
            }

            to {
               background-position-x: calc(200px + 100%)
            }
         }

         background: {
            image: linear-gradient(90deg, O rgba(255,
                     255, 255, 0), O rgba(255, 255, 255, 0.5) 50%, rgba (25 5, 255, 255, 0) 80%);
            repeat: no-repeat;
            size: 15% 100%;
         }

         height: 250vh;
         position: absolute;
         transform: rotate(20deg) translateX(-150vw);
         width: 250vw;
         z-index: 1;
      }

      .app {
         padding-top: 8.533vw;

         .swiper {
            background-color: rgb(237, 240, 245);
            height: 38.133vw;
            width: 100vw;

            .top-swiper {
               background-color: rgb(237, 240, 245);
               border-radius: 2.667vw;
               height: 45.333vw;
               margin: ;
               0 auto;
               transform: translateY(-3.2vw);
               width: 89.6vw;
            }
         }

         .apphot {
            margin-top: 10.133vw;
            padding-left: 0 5.333vw;

            .title {
               background-color: rgb(237, 240, 245);
               border-radius: 2.133vw;
               height: 5.867vw;
               width: 21.333vw;
            }

            ul {
               margin: 0;
               padding: 0;
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
                     background-color: rgb(237, 240, 245);
                     border-radius: 3.733vw;
                     height: 18.667vw;
                     width: 18.667vw;
                  }

                  .bottom {

                     background-color: rgb(237, 240, 245);
                     border-radius: 1.6Vw,
                        flex-basis: 0%;
                     flex-grow: 1;
                     flex-shrink: 1;
                     margin-top: 1.6vw;
                     -webkit-box-flex: 1;
                  }
               }
            }
         }

         .applist {
            margin-top: 12.533vw;
            padding: 0 5.333vw;

            ul {
               margin: 0;
               padding: 0;
               list-style: none;

               li {
                  display: flex;
                  height: 18.667vw;
                  margin-top: 6.4vw;
                  position: relative;
                  width: 89.333vw;

                  .icon {
                     background-color: rgb(237, 240, 245);
                     border-radius: 4.267vw;
                     height: 18.667vw;
                     width: 18.667vw;
                  }

                  .content {
                     align-items: flex-start;
                     border-radius: 4.267vw;
                     display: flex;
                     flex-direction: column;
                     height: 18.667vw;
                     justify-content: center margin-left: 4.267vW;
                     position: relative;
                     width: 42.667vw -webkit-box-align: start;
                     -webkit-box-direction: normal;
                     -webkit-box-orient: vertical;
                     -webkit-box-pack: center;

                     .name {
                        background-color: rgb(237, 240, 245);
                        border-radius: 2.133vw;
                        height: 5.867vw;
                        margin-bottom: 2.133vw;
                        margin-top: 1.067vw;
                        width: 37.333vw;
                     }

                     .vip {

                        background-color: rgb(237, 240, 245);
                        border-radius: 2.4vw;
                        height: 4.8vw;
                        width: 8vw,
                     }
                  }

                  .button {
                     background-color: rgb(237, 240, 245);
                     border-radius: 6.133vw;
                     height: 12.267vw;
                     position: absolute;
                     right: 0;
                     top: 50%;
                     transform: translateY(-50%);
                     width: 12.267vw;
                  }
               }
            }
         }
      }
   }
</style>

<script>
   export default {
      props: {
         state: Object
      }
   }
</script>