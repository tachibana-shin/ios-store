<template>
   <div class="loadingapp">
      <bac-animation />
      <div class="wrapper">
         <div class="detail-app">
            <div class="detail-app.basic margin-bottom">
               <div class="app.avatar"></div>
               <div class="info">
                  <div class="app.name">
                     <p class="one"></p>
                     <p class="two"></p>
                  </div>
                  <div class="bottom">
                     <span class="app.size"></span>
                     <div class="rate-star">
                     </div>
                  </div>
               </div>
            </div>
            <div class="detail-app.infomation margin-bottom">
               <p class="title"></p>
               <ul class="list">
                  <li class="item" v-for="item in 4">
                     <p class="key"></p>
                     <p class="value"></p>
                  </li>
               </ul>
            </div>
            <div class="detail-app.infomation margin-bottom detail-app.screenshot">
               <p class="title"></p>
               <div class="screenshot.list">
                  <ul>
                     <li class="screenshot.item" v-for="item in 5">
                     </li>
                  </ul>
               </div>
            </div>
            <div class="t-collapse">
               <div class="title">
               </div>
               <p class="content">
               </p>
            </div>
            <div class="detail-app.infomation intereting">
               <p class="title"></p>
               <div class="apphost">
                  <div class="content">
                     <ul class="list">
                        <li class="item" v-for="item in 8">
                           <div class="app" tag="div">
                              <div></div>
                              <p></p>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .loadingapp {
      background-color: $white;
      height: 100%;
      left: 0;
      box-sizing: border-box;
      overflow: hidden;
      position: fixed;
      top: 0px;
      width: 100%;
      z-index: 2;
      padding-top: 13.867vw;

      .wrapper {
         padding-top: 11.467vw;
         background-color: $white;
         position: relative;

         .detail-app {
            padding: {
               top: 4.267vw;
               bottom: 18.667vw;
            }

            ;

            .margin-bottom {
               margin-bottom: (4.267vw + 4.266);
            }

            .detail-app\.basic {
               display: flex;
               height: 27.2vw;
               padding: 0 5.333vw;
               position: relative;

               .app\.avatar {
                  border-radius: 5.333vw;
                  height: 26.667vw;
                  margin-right: 4.267vw;
                  overflow: hidden;
                  width: 26.667vw;
                  background-color: $bg-noactive;
               }

               .info {
                  position: relative;

                  padding: {
                     top: 1.067vw;
                  }

                  flex: {
                     basis: 0;
                     grow: 1;
                     shrink: 1;
                  }

                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;

                  .app\.name {

                     .one,
                     .two {
                        @include distance0;
                        background-color: $bg-noactive;
                        border-radius: 2.667vw;
                        height: 5.333Vw;
                        margin-top: 1.6vw;
                        width: 53.333vw;
                        display: block;
                     }

                     .two {
                        width: 32vw;
                     }
                  }

                  .bottom {

                     display: flex;
                     align-items: center;

                     .app\.size {
                        margin-right: 5.333vw;

                        background-color: $bg-noactive;
                        border-radius: 1.6vw;
                        height: 4.267vw;
                        width: 13.333vw;
                     }

                     .rate-star {

                        background-color: $bg-noactive;
                        border-radius: 1.6vw;
                        height: 4.267vw;
                        width: 32vw;

                     }

                  }
               }
            }

            .detail-app\.infomation {

               .title {
                  @include distance0;
                  margin: 4.267vw 5.333vw;
                  background-color: $bg-noactive;
                  border-radius: 2.667Vw;
                  height: 5.867vw;
                  width: 42.667Vw;
               }

               .list {
                  padding: 0 5.333vw;
                  margin: 0;
                  list-style: none;

                  .item {
                     display: flex;
                     margin-bottom: 2.133vw;

                     .key {
                        @include distance0;
                        width: 29.867vw;

                        flex-basis: auto;
                        flex-grow: 0;
                        flex-shrink: 0;

                        background-color: $bg-noactive;
                        border-radius: 1.6Vw;
                        height: 4.267vw;
                        width: 21.333vw;
                     }

                     .value {
                        @include distance0;
                        flex-grow: 1;
                        flex-shrink: 1;
                        overflow: hidden;

                        flex-basis: 0%;

                        background-color: $bg-noactive;
                        border-radius: 2.133vw, ;
                        height: 4.267vw;
                        margin-left: 10.667vw;
                        width: 48vw;
                     }
                  }
               }
            }

            .detail-app\.screenshot {
               .screenshot\.list {
                  overflow: scroll hidden;
                  width: 100%;

                  ul {
                     @include distance0;
                     list-style: none;
                     padding: 0 5.333vw;
                     white-space: nowrap;

                     .screenshot\.item {

                        display: inline-block;
                        height: 64.8vw;
                        margin-right: 4.267vw;
                        overflow: hidden;
                        width: 37.333vw;
                        position: relative;

                        background-color: $bg-noactive;
                        border-radius: 3.733vw;
                        height: 66.667vw;
                        margin-right: 4.267vw;
                        width: 37.333Vw;
                     }
                  }
               }
            }

            .t-collapse {

               padding-bottom: 0;
               padding-left: 5.333vw;
               padding-right: 5.333vw;
               padding-top: 4.267vw;

               .title {
                  margin-bottom: 4.267vw;

                  background-color: $bg-noactive;
                  border-radius: 2.667Vw;
                  height: 5.867vw;
                  width: 42.667Vw;
               }

               .content {
                  @include distance0;
                  overflow: hidden;
                  height: 4.5em;
                  border-radius: 3.733vw;
                  background-color: $bg-noactive;
               }

            }

            .intereting {
               overflow: none;

               .apphost {
                  margin-bottom: 4.8vw;

                  .title {
                     @include distance0;
                     background-color: $bg-noactive;
                     border-radius: 2.667Vw;

                     width: 66.667vw;
                     height: 6.4vw;
                  }

                  .content {
                     width: 100%;
                     overflow: hidden;

                     .list {
                        @include distance0;
                        list-style: none;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        padding: 0 5.333vw;
                        width: 100vw;
                        box-sizing: border-box;
                        display: flex;

                        .item>.app {
                           box-sizing: border-box;
                           display: flex;
                           align-items: center;
                           flex-direction: column;
                           height: 24.533vw;
                           margin-bottom: 4.267vw;
                           text-align: center;
                           width: 18.667vw;

                           div {
                              border-radius: 3.467vw;
                              height: 18.667vw;
                              width: 18.667VW;
                              background-color: $bg-noactive;
                           }

                           p {
                              @include distance0;
                              display: inline-block;
                              margin-top: 2.133vw;
                              width: 18.667vw;
                              background-color: $bg-noactive;
                              height: 3.733vw;
                           }
                        }
                     }
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