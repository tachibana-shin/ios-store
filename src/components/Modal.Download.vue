<template>
   <div class="Modal.Download" @click="$emit('close')">
      <div class="content" @click.stop>
         <div class="version-wrapper">
            <p class="title"> {{ "HOME.INST_GUIDE" | t }} </p>
            <div class="list-item.wrapper">
               <vue-touch-scroll hide-scrollbar tag="ul" class="list">
                  <li class="item" v-for="item in items.value">
                     <div class="version-item">
                        <span class="name"> {{ item.name }} </span>
                        <checkbox-custom name="version" @input="$event ? (value = item.value) : (value = '')" />
                     </div>
                  </li>
               </vue-touch-scroll>
            </div>
         </div>
         <div class="footer">
            <p class="video">
               <img :src="require('@/assets/home.ic.video.svg')">
               {{ "HOME.INST_GUIDE" | t }}
            </p>
            <button class="install" @click="download" :class="{ active: !!value, error: !!error  }">
               {{ !!error ? error :  (loading ? "DOWNLOAD_RESOURCE" : "INST") | t }}
               <img :src="require('../assets/ellipsis.svg')" v-if="loading" class="loading">
            </button>
         </div>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   @import "~@/scss/variants";

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
            background-color: rgb(255, 255, 255);

            padding: {
               left: 5.333vw;
               right: 5.333vw;
            }

            .title {
               margin: 0;
               padding: 0;
               font-weight: 500;
               line-height: 5.333vw;
               text-align: center;
               margin-top: 4.26vw;
               color: rgb(0, 87, 158);
               font-size: 5.333vmin;
               width: 100%;

            }

            .list-item\.wrapper {
               overflow: hidden;
               box-sizing: border-box;
               margin-top: 3.235vw;
               text-align: left;

               .list {
                  margin: 0;
                  padding: 0;
                  list-style: none;

                  .item {
                     .version-item {
                        display: flex;
                        justify-content: space-between;
                        padding: 3.2vw 0;
                        align-items: center;

                        .name {
                           flex: {
                              grow: 1;
                              shrink: 1;
                              basis: 0;
                           }

                           ;
                           font-weight: 600;
                           font-size: 4.267vw;
                           display: inline-block;

                           overflow: hidden;

                           text-overflow: ellipsis;
                           -webkit-box-orient: vertical;
                           -webkit-line-clamp: 1;
                           color: rgb(0, 87, 152);
                        }
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
               background-color: rgb(74, 76, 91);
               border-radius: 6.133vw;
               color: rgb(255, 255, 255);
               font-size: 4vmin;
               font-weight: 500;
               height: 11.733vw;
               line-height: 5.333vw;
               margin-top: 4.267vw;
               outline-style: none;
               width: 55.733vw;

               &.active {
                  background-color: $colorMain
               }

               &.error {
                  background-color: #f99;
               }

               .loading {
                  margin-left: 2.333vw;
               }
            }
         }
      }

   }
</style>
<script>
   import CheckboxCustom from "./Checkbox.Custom.vue"
   export default {
      components: { CheckboxCustom },
      props: {
         items: Object
      },
      data: () => ({
         value: "",
         loading: false,
         error: ""
      }),
      methods: {
         download() {
            if (!!this.value) {
               this.loading = true
               this.$axios.get("http://carbonated-patterns.000webhostapp.com/admin/api/RequestDownload.php", {
                     params: {
                        id: this.items.id
                     }
                  })
                  .then(res => res.data)
                  .then(({ state }) => {
                     if (state.error) {
                        throw new Error(state.message)
                     }
                     window.open(this.value, "_self")
                  })
                  .catch(({ message }) => this.error = message)
                  .finally(() => this.loading = false)
            }
         }
      }
   }
</script>