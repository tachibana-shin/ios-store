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
               <p class="title"> Information </p>
               <ul class="list">
                  <li class="item" v-for="item in infomation">
                     <p class="key"> {{ item.type }} </p>
                     <p class="value"> {{ item.value }} </p>
                  </li>
               </ul>
            </div>
            <div class="detail-app.infomation margin-bottom detail-app.screenshot">
               <p class="title"> Screenshot </p>
               <div class="screenshot.list">
                  <ul>
                     <li class="screenshot.item" v-for="item in data.screenshot">
                        <img v-img="{ group: 'screenshot', src: item }" v-lazy="item">
                     </li>
                  </ul>
               </div>
            </div>
            <t-collapse>
               <template v-slot:text> {{ data.description }} </template>
            </t-collapse>
            <div class="detail-app.infomation intereting">
               <p class="title"> Interting </p>
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
               <button @click="download"> Download </button>
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
         background-color: #fff;

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
                     margin: 0;
                     padding: 0;
                     font-weight: 500;
                     line-height: 7.467vw;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     -webkit-box-orient: vertical;
                     -webkit-line-clamp: 2;
                     color: rgb(22, 43, 72);
                     display: -webkit-box;
                     font-size: 5.6vmin;
                  }

                  .bottom {
                     color: rgb(162, 171, 191);
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
                  margin: 0;
                  padding: 0;
                  color: rgb(47, 64, 89);
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
                        margin: 0;
                        padding: 0;
                        font-size: 3.733vmin;
                        font-weight: 500;
                        line-height: 4.267vw;
                        margin-right: 4vw;
                        width: 29.867vw;
                        color: rgb(117, 136, 169);
                        flex-basis: auto;
                        flex-grow: 0;
                        flex-shrink: 0;
                        text-transform: capitalize;
                     }

                     .value {
                        margin: 0;
                        padding: 0;
                        flex-grow: 1;
                        flex-shrink: 1;
                        font-size: 3.733vmin;
                        font-weight: 500;
                        line-height: 5.333vw;
                        overflow: hidden;
                        word-break: break-all;

                        color: rgb(55, 77, 115);
                        flex-basis: 0%;
                     }
                  }
               }
            }

            .detail-app\.screenshot {
               .screenshot\.list {
                  overflow: scroll hidden;

                  ul {
                     margin: 0;
                     padding: 0;
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
                     margin: 0;
                     padding: 0;
                     box-sizing: border-box;
                     color: rgb(22, 43, 72);
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
                        margin: 0;
                        padding: 0;
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
                              margin: 0;
                              padding: 0;
                              color: rgb(11, 57, 95);
                              display: inline-block;
                              font-size: 3.2vmin;
                              font-weight: 500;
                              line-height: 3.733vw;
                              margin-top: 2.133vw;
                              overflow: hidden;
                              text-overflow: ellipsis;
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
               background-color: rgb(255, 255, 255);
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
                  color: rgb(255, 255, 255);
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
   export default {
      components: { RateStar, ListAppHot, TCollapse, Loading },
      data: () => ({
         loading: true,
         data: {},
         apps: []
      }),
      methods: {
         download() {
            this.$axios.get("http://localhost:8080/admin/api/RequestDownload.php", {
               params: {
                  id: this.$route.params.id
               }
            })
         }
      },
      computed: {
         infomation() {
            const __proto__ = ["developer", "category", "updated", "compatibility", "languages", "account"]
            return __proto__.map(item => {
               if (item in this.data && !!this.data[item] && this.data.length > 0) {
                  return {
                     type: item,
                     value: Array.isArray(this.data[item]) ? this.data[item].join(", ") : this.data[item]
                  }
               } else {
                  return null
               }
            })
         }
      },
      created() {
         this.$axios.get("http://localhost:8080/admin/api/App.php", {
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
      }
   }
</script>
