<template>
   <div class="Modal.Download" @click="$emit('close')">
      <div class="content" @click.stop="true">
         <div class="version-wrapper">
            <p class="title"> {{ "HOME.INST_GUIDE" | t }} </p>
            <div class="list-item.wrapper">
               <vue-touch-scroll hide-scrollbar tag="ul" class="list">
                  <li class="item" v-for="item in items">
                     <span class="name"> {{ item.name }} </span>
                     <i class="checkbox"></i>
                  </li>
               </vue-touch-scroll>
            </div>
         </div>
         <div class="footer">
            <p class="video">
               <img :src="require('@/assets/home.ic.video.svg')">
               {{ "HOME.INST_GUIDE" | t }}
            </p>
            <button class="install" @click="download">
               {{ "INST" | t }}
            </button>
         </div>
      </div>
   </div>
</template>
<style lang="scss" scoped>

   .Modal\.Download {
      display: flex;
      align-items: center;
      height: 100%;
      justify-content: center;
      left: 0;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 9999;

      .content {
         display: flex;
         border-radius: 2.133vw;
         flex-direction: column;
         max-height: 96.5vh;
         overflow: hidden;
         text-align: center;
         width: 79.2vW;

         .version-wrapper {

            position: relative;

            .title {
               margin: 0;
               padding: 0;
               font-weight: 500;
               left: 0;
               line-height: 5.333vw;
               position: absolute;
               text-align: center;
               top: 4.26vw;
               color: rgb(0, 87, 158);
               font-size: 4vmin;
               width: 100%;

            }

            .list-item\.wrapper {
               position: absolute;
               overflow: hidden;
               box-sizing: border-box;

               .list {
                  margin: 0;
                  padding: 0;
                  list-style: none;

                  .item {
                     display: flex;
                     justify-content: space-between;
                     border: 1px solid rgba(0, 0, 0, .1);
                     margin-bottom: 3.375vw;

                     .name {
                        flex: {
                           grow: 1;
                           shrink: 1;
                           basis: 0;
                        }

                        ;
                        font-weight: 600;
                        display: inline-block;

                        overflow: hidden;

                        text-overflow: ellipsis;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                     }

                     .checkbox {}

                     transition: transform .222s ease;

                     &.active {
                        border: 1px solid;
                        transform: scale(.9);
                     }
                  }
               }
            }


         }

         .footer {
            background-color: rgb(255, 255, 255);
            box-sizing: border-box;
            height: 35.2vw;
            padding-top: 9.067vw;

            .video {
               margin: 0;
               padding: 0;
               color: rgb(0, 87, 158);
               font-size: 3.733vmin;
               font-weight: 500;
               line-height: 5.333vw;

               img {

                  height: 5.333vw;
                  margin-right: 2.133vw;
                  vertical-align: middle;
                  width: 5.333vw;
               }
            }

            .install {
               background-color: rgb(0, 132, 240);
               border-radius: 6.133vw;
               color: rgb(255, 255, 255);
               font-size: 4vmin;
               font-weight: 500;
               height: 11.733vw;
               line-height: 5.333vw;
               margin-top: 4.267vw;
               outline-style: none;
               width: 55.733vw;
            }
         }
      }

   }
</style>
<script>
   export default {
      props: {
         items: Array
      },
      methods: {
         download() {
            
         }
      }
   }
</script>