<template>
   <div class="main">
      <div class="wrapper" v-if="!loading">
         <div class="detail-app">
            <div class="detail-app.basic margin-bottom">
               <img class="app.avatar" :alt="data.name" v-lazy="data.icon">
               <div class="info">
                  <p class="app.name"> {{ data.name }} </p>
                  <div class="bottom">
                     <span class="app.size"> {{ data.size }} </span>
                     <rate-star :value="4.5" />
                  </div>
               </div>
            </div>
            <div class="detail-app.infomation margin-bottom">
               <p class="title"> {{ "APP_INFO.INFORMATION" | t }} </p>
               <ul class="list">
                  <li class="item" v-for="item in infomation">
                     <p class="key"> {{ item.type | t }} </p>
                     <p class="value"> {{ item.value }} </p>
                  </li>
               </ul>
            </div>
            <div class="detail-app.infomation margin-bottom detail-app.screenshot">
               <p class="title"> {{ "APP_INFO.SCREENSHOT" | t }} </p>
               <div class="screenshot.list">
                  <ul v-touch-scroll:horizontal="{ scrollbar: { render: false } }">
                     <li class="screenshot.item" v-for="item in data.screenshot">
                        <img v-img="{ group: 'screenshot', src: item }" v-lazy="item">
                     </li>
                  </ul>
               </div>
            </div>
            <t-collapse :title="'APP_INFO.DESCRIPTION' | t">
               <template v-slot:text> {{ data.description }} </template>
            </t-collapse>
            <div class="detail-app.infomation intereting">
               <p class="title"> {{ "APP_INFO.INTERTING" | t }} </p>
               <div class="apphost">
                  <div class="content">
                     <ul class="list">
                        <li class="item" v-for="item in apps">
                           <router-link :to="'/lite/info/app/' + item.id" class="app" tag="div">
                              <img :src="item.icon">
                              <p> {{ item.name }} </p>
                           </router-link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="download">
               <button @click="download"> {{ "APP_INFO.DOWNLOAD" | t }} </button>
            </div>
         </div>
      </div>
      <loading v-else />
   </div>
</template>
<style lang="scss" scoped>
   @font-face {
      font-family: DIM-Medium;
      src: url("../fonts/DIN-Medium.ttf");
   }

   ;

   .main {
      .wrapper {
         padding-top: 11.467vw;
         background-color: $white;

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
                     @include distance0;
                     font-weight: 500;
                     line-height: 7.467vw;
                     overflow: hidden;
                     @include text-truncate(2);
                     color: $color-app-name-pro;
                     display: -webkit-box;
                     font-size: 5.6vmin;
                  }

                  .bottom {
                     color: $color-blue-grey;
                     display: flex;
                     font-family: DIN-Medium;
                     font-size: 3.733vmin;
                     font-weight: 500;
                     align-items: center;

                     .app\.size {
                        margin-right: 5.333vw;
                        text-transform: uppercase;
                     }

                  }
               }
            }

            .detail-app\.infomation {

               .title {
                  @include distance0;
                  color: $color-text-content;
                  font-size: 4.8vmin;
                  font-weight: 500;
                  line-height: 6.4vW;
                  padding: 4.267vw 5.333vw;

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
                        font-size: 3.733vmin;
                        font-weight: 500;
                        line-height: 4.267vw;
                        margin-right: 4vw;
                        width: 29.867vw;
                        color: $color-title-app;
                        flex-basis: auto;
                        flex-grow: 0;
                        flex-shrink: 0;
                        text-transform: capitalize;
                     }

                     .value {
                        @include distance0;
                        flex-grow: 1;
                        flex-shrink: 1;
                        font-size: 3.733vmin;
                        font-weight: 500;
                        line-height: 5.333vw;
                        overflow: hidden;
                        word-break: break-all;

                        color: $color-blue-dark;
                        flex-basis: 0%;
                     }
                  }
               }
            }

            .detail-app\.screenshot {
               .screenshot\.list {
                  overflow: hidden;
                  position: relative;
                  width: 100%;
                  box-sizing: border-box;

                  ul {
                     @include distance0;
                     list-style: none;
                     padding: 0 5.333vw;
                     white-space: nowrap;
                     display: inline-block;

                     .screenshot\.item {

                        display: inline-block;
                        height: 64.8vw;
                        margin-right: 4.267vw;
                        overflow: hidden;
                        width: 37.333vw;
                        position: relative;

                        img {
                           border-radius: 2.133vw;
                           position: absolute;
                           object-fit: cover;
                           object-position: center center;
                           width: 100%;
                           height: 100%;
                        }
                     }
                  }
               }
            }

            .intereting {
               overflow: none;

               .apphost {
                  margin-bottom: 4.8vw;

                  .title {
                     @include distance0;
                     box-sizing: border-box;
                     color: $color-app-name-pro;
                     display: flex;
                     font-size: 4.267vmin;
                     font-weight: 500;
                     line-height: 5.867vw;
                     overflow: hidden;
                     padding: 0 5.333vw;
                     align-items: center;

                     .icon {
                        height: 5.867vw;
                        margin-top: -0.8vW;
                        vertical-align: middle;
                        width: 5.867vw;
                     }

                     span {
                        margin-left: 1.067vw;
                     }
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

                           img {
                              border-radius: 3.467vw;
                              height: 18.667vw;
                              width: 18.667VW;
                           }

                           p {
                              @include distance0;
                              color: $color-value;
                              display: inline-block;
                              font-size: 3.2vmin;
                              font-weight: 500;
                              line-height: 3.733vw;
                              margin-top: 2.133vw;
                              overflow: hidden;
                              @include text-truncate;
                              white-space: nowrap;
                              width: 18.667vw;
                           }
                        }
                     }
                  }
               }

            }

            .download {
               align-items: center;
               background-color: $white;
               bottom: 0;
               display: flex;
               height: 16VW;
               justify-content: center;
               left: 0;
               position: fixed;
               width: 100vw;
               outline: none;

               button {
                  background-color: rgb(0, 142, 255);
                  border-radius: 5.333vw;
                  color: $white;
                  font-size: 4.267vmin;
                  font-weight: 500;
                  height: 10.667vw;
                  line-height: 5.333vw;
                  outline-style: none;
                  width: 89.333vw;

               }
            }
         }
      }
   }
</style>
<script>
   import RateStar from "../components/RateStar.vue"
   import ListAppHot from "../components/ListAppHot.vue"
   import TCollapse from "../components/TCollapse.vue"
   import Loading from "../components/Loading.AppInfo_Page.vue"
   import CheckboxCustom from "../components/Checkbox.Custom.vue"

   export default {
      components: { RateStar, ListAppHot, TCollapse, Loading, CheckboxCustom },
      data: () => ({
         loading: true,
         data: {},
         apps: []
      }),
      methods: {
         download() {
            this.$root.$emit("Modal.Download", {
               state: true,
               items: {
                  value: this.data.version,
                  id: this.$route.params.id
               }
            })
         }
      },
      computed: {
         infomation() {
            const __proto__ = ["developer", "category", "updated", "compatibility", "languages", "account"]
            return __proto__.map(item => {
               if (item in this.data && !!this.data[item] && this.data[item].length > 0) {
                  return {
                     type: item,
                     value: Array.isArray(this.data[item]) ? this.data[item].join(", ") : this.data[item]
                  }
               } else {
                  return null
               }
            }).filter(e => e !== null)
         }
      },
      watch: {
         "$route": {
            handler() {
               this.$axios.get("http://carbonated-patterns.000webhostapp.com/admin/api/App.php", {
                     params: {
                        id: this.$route.params.id,
                        produce: true
                     }
                  })
                  .then(res => res.data)
                  .then(({ state, data }) => {
                     if (state.error) {
                        throw new Error(state.message)
                     } else {
                        this.data = data.data
                        this.apps = data.apps
                     }
                  })
                  .then(() => this.loading = false)
                  .catch((error) => console.log(error))
            },
            immediate: true
         }
      }
   }
</script>