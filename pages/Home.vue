<template>
   <div class="main">
      <div class="wrapper">
         <div class="banner.welcome">
            <img class="cloud.front" src="/assets/home.cloud.front.png">
            <img class="spaceship" src="/assets/home.spaceship.png">
            <img class="download.button.highlight" src="/assets/home.btn.highlight.png">
            <img class="download.button.light" src="/assets/home.btn.light.png">
            <img class="download.download" src="/assets/home.btn.download.png">
            <img class="slide-icon" src="/assets/home.slide.icon.svg">
            <img class="star-big" src="/assets/home.star.big.svg">
            <img class="star" src="/assets/home.star.svg">
            <img class="cloud-left" src="/assets/home.cloud.left.svg">
            <img class="cloud-right" src="/assets/home.cloud.right.svg">
            <img class="light-top" src="/assets/home.light.top.svg">
            <img class="light-bottom" src="/assets/home.light.bottom.svg">
         </div>
         <div class="content">
            <div class="guide-block" @click="guideBlockShow = true">
               <img class="left" src="/assets/home.ic.video.svg">
               <span> Installation Guide </span>
               <img class="right" src="/assets/ic.more.svg">
            </div>
            <div class="applist">
               <span class="applist.title">
                  <img src="/assets/home.ic.hot.svg">
                  VIP Features
               </span>
               <div class="applist.wrapper">
                  <ul class="list">
                     <li>
                        <div class="appinfo">
                           <div class="appinfo.content">
                              <img class="icon" src="https://photos.tutuapp.com/picture/app_ios/cn/003/62/45/50/3624550.175x175-75.jpg">
                              <div class="app.content">
                                 <p class="app.title"> Dead Cells </p>
                                 <img class="VIP" src="/assets/list.app.vip.png">
                              </div>
                           </div>
                           <button class="button"></button>
                        </div>
                     </li>
                  </ul>
               </div>
               <p class="check-more"> Check more VIP apps &gt; </p>
            </div>
         </div>
         <div class="patreon">
            <img class="item" src="/assets/patreon.yose.png">
            <img class="item" src="/assets/patreon.paypal.png">
            <img class="item" src="/assets/patreon.visa.png">
         </div>
      </div>
      <transition name="fade:ease">
         <backdrop-mark v-if="guideBlockShow" />
      </transition>
      <transition name="swipeY:ease">
         <guide-block-wrapper v-if="guideBlockShow" @hide="guideBlockShow = false" />
      </transition>
   </div>
</template>
<style lang="scss" scoped>
   .main {
      overflow: hidden;

      .fade\:ease-enter-active,
      .fade\:ease-leave-active {
         transition: all .666s ease;
      }

      .fade\:ease-enter,
      .fade\:ease-leave-to {
         opacity: 0;
      }


      .swipeY\:ease-enter-active {
         animation: swipeYeaseEnter .666s ease;

         @keyframes swipeYeaseEnter {
            from {
               top: 100%;
            }

            to {
               top: 0;
            }
         }
      }

      .swipeY\:ease-leave-active {
         animation: swipeYeaseLeave .666s ease;

         @keyframes swipeYeaseLeave {
            from {
               top: 0%;
            }

            to {
               top: 100%;
            }
         }
      }


      .wrapper {
         margin-top: (11.567vw + 13.867);

         .banner\.welcome {
            background: {
               image: url("/assets/home.bg.png");
               repeat: no-repeat;
               size: cover;
            }

            position: relative;
            overflow: hidden;
            height: 136vw;

            @mixin centerX {
               left: 50%;
               transform: translateX(-50%);
            }

            .cloud\.front {
               position: absolute;
               left: 0;
               top: 56.533vw;
               width: 100%;
            }

            .spaceship {
               width: 71.467vw;
               height: 70.4vw;
               position: absolute;
               top: 23.467vw;
               @include centerX;
               z-index: 2;
               animation: up-down 2s linear infinite;

               @keyframes up-down {

                  0%,
                  100% {
                     transform: translateX(-50%) translateY(0);
                  }

                  50% {
                     transform: translateX(-50%) translateY(25px);
                  }
               }
            }

            .download {
               position: absolute;
               width: 66.4vw;
               height: 16vw;
               top: 86.133vw;
               @include centerX;
               z-index: 5;
            }

            .download\.button\.highlight {
               width: 84.533vw;
               height: 34.667vw;
               position: absolute;
               top: 77.333vw;
               z-index: 3;
               @include centerX;
            }

            .download\.button\.light {
               position: absolute;
               width: 84.533vw;
               height: 34.668vw;
               top: 77.333vw;
               z-index: 1;
               @include centerX;
            }

            .download\.download {
               position: absolute;
               top: 77.333vw;
               z-index: 2;
               width: 84.533vw;
               height: 34.667vw;
               @include centerX;
            }

            .slide-icon {
               position: absolute;
               top: 109.333vw;
               @include centerX;
               width: 4.267vw;
               height: 4.267vw;
               z-index: 4;
               animation: up-and-down 1s linear infinite;

               @keyframes up-and-down {

                  0%,
                  100% {
                     transform: translate(-50%, 0);
                  }

                  50% {
                     transform: translate(-50%, 50%);
                  }
               }
            }

            .star-big {
               position: absolute;
               top: 10.667vw;
               left: 32vw;
               width: 12.267vw;
               height: 10.133vw;
            }

            .star {
               position: absolute;
               top: -.8vw;
               left: 54.667vw;
               width: 6.933vw;
               height: 5.333vw;
            }

            .cloud-left {
               position: absolute;
               left: 0;
               top: 20.8vw;
               width: 21.867vw;
               height: 5.333vw;
               animation: cloud-left 12s linear infinite;

               @keyframes cloud-left {
                  from {
                     left: -21.767vw;
                  }

                  to {
                     left: 100%;
                  }
               }
            }

            .cloud-right {
               position: absolute;
               right: 0;
               top: 36.8vw;
               width: 37.333vw;
               height: 9.067vw;
               animation: cloud-left 12s linear infinite;

               @keyframes cloud-left {
                  from {
                     right: -37.333vw;
                  }

                  to {
                     right: 100%;
                  }
               }
            }

            @keyframes fade-show {

               0%,
               100% {
                  opacity: .2;
               }

               50% {
                  opacity: 1;
               }
            }

            .light-top {
               position: absolute;
               top: 7.2vw;
               left: 1.867vw;
               width: 56.267vw;
               height: 53.6vw;
               z-index: 1;
               animation: fade-show 2s ease infinite;
            }

            .light-bottom {

               position: absolute;
               top: 59.733vw;
               right: -6.133vw;
               width: 51.467vw;
               height: 49.067vw;
               z-index: 1;
               animation: fade-show 2s ease reverse infinite;
            }

         }

         .content {
            position: relative;
            overflow: hidden;

            background: {
               image:
                  url("/assets/home.transition.png");
               repeat: no-repeat;
               size: 100% auto;
               position: 0 0;
            }

            ;

            .guide-block {
               align-items: center;
               background-color: rgb(255, 255, 255);
               border-radius: 4.267vw;
               box-shadow: rgba(3, 14, 37, 0.06) 0 .8vw 5.333vw 0;
               box-sizing: border-box;
               display: flex;
               height: 17.6vw;
               width: 91.167vw;

               margin: {
                  bottom: 4.267vw;
                  left: auto;
                  right: auto;
                  top: 4.267vw;
               }

               padding: {
                  bottom: 0;
                  left: 3.2vw;
                  right: 3.2vW;
                  top: 0;
               }

               position: relative;

               .left {
                  width: 6.933vw;
                  height: 6.933vw;
                  margin-right: 2.133vw;
               }

               span {
                  color: rgb(55, 77, 115);
                  font-size: 4.8vmin;
                  font-weight: 500;
                  line-height: 17.6vw;
               }

               .right {
                  margin: {
                     left: auto;
                     right: 3.2vw;
                  }

                  ;
                  transform: rotate(-90deg);
                  display: inpune-block;
               }
            }

            .applist {
               background-color: #fff;
               border-radius: 4.267vw;
               box-shadow: rgba(3, 14, 37, .06) 0 .8vw 5.333vw 0;
               box-sizing: border-box;
               margin-bottom: 5.333vw;
               margin-left: auto;
               margin-right: auto;
               margin-top: 0;
               overflow: hidden;
               padding: 1.067vw 4.267vw;
               width: 91.467vw;

               .applist\.title {
                  color: rgb(55, 77, 115);
                  display: block;
                  font-size: 4.8vmin;
                  font-weight: 500;
                  height: 15.467vw;
                  line-height: 15.467vw;
                  transform: translateX(-1.067vw);

                  img {
                     height: 6.933vw;
                     margin-right: 2.133vw;
                     vertical-align: middle;
                     width: 6.933vw;
                  }
               }

               .applist\.wrapper {
                  .list {
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
                                 width: 45.333vw;
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
                     }
                  }
               }

               .check-more {
                  color: rgb(0, 132, 240);
                  display: inline-block;

                  font: {
                     size: 3.733vmin;
                     weight: 400;
                  }

                  line-height: 6.667vw;
                  margin-bottom: 6.4vw;
                  margin-top: 1.067vw;
                  text-align: center;
                  width: 100%;
               }
            }
         }

         .patreon {
            justify-content: center;
            margin-bottom: 5.333vw;
            -webkit-box-align: center;
            -webkit-box-pack: center;
            align-items: center;
            display: flex;
            flex-wrap: wrap;

            .item {
               height: 8vw;
            }
         }
      }
   }
</style>
<script>
   import GuideBlockWrapper from "../components/Guide.Block-Wrapper.vue"
   import BackdropMark from "../components/Backdrop.vue"
   export default {
      components: { GuideBlockWrapper, BackdropMark },
      data: () => ({
         guideBlockShow: false
      })
   }
</script>