<template>
   <div class="wrapper">
      <div class="header">
         <h3>Ranks</h3>
         <div class="tabs">
            <a class="item" :class="{ active: item == type }" v-for="item in $options.ItemsTab" @click="type = item">
               {{ item }}
            </a>
         </div>
      </div>
      <div class="content" v-if="!loading">
         <ul class="list">
            <li v-for="(item, index) in Top3App">
               <div class="index">
                  <img :src="require('@/assets/rank.' + $options.intToStr[index] + '.svg')">
               </div>
               <div class="app">
                  <img class="icon" :src="item.icon">
                  <div class="info">
                     <p> {{ item.name }} </p>
                     <div class="rate">
                        <span class="point">3</span>
                        <rate-star :value="3" />
                     </div>
                     <p class="type"> {{ item.category }} </p>
                  </div>
                  <router-link tag="button" :to="'/lite/detail/app/' + item.id" class="detail"> Detail </router-link>
               </div>
            </li>
         </ul>
         <ul class="list">
            <li v-for="(item, index) in AppsRest">
               <div class="index">
                  <span> {{ index + 3 }} </span>
               </div>
               <div class="app">
                  <img class="icon" :src="item.icon">
                  <div class="info">
                     <p> {{ item.name }} </p>
                     <div class="rate">
                        <span class="point">3</span>
                        <rate-star :value="3" />
                     </div>
                     <p class="type"> {{ item.category }} </p>
                  </div>
                  <router-link tag="button" :to="'/lite/detail/app/' + item.id" class="detail"> Detail </router-link>
               </div> 
            </li>
         </ul>
         <div class="loading">
            <img :src="require('@/assets/dua.ring.1s.svg')">
            <span> Loading... </span>
         </div>
      </div>
      <loading-rank-content v-else />
   </div>
</template>
<style lang="scss" scoped>
   @font-face {
      font-family: DINCond;
      src: url("/fonts/DINCond.ttf");
   }

   .wrapper {
      .header {

         background: {
            image: url("../assets/rank.bg.yellow.svg");
            repeat: no-repeat;
            size: contain;
         }

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
            margin: 5.33333vw 0 8.53333vw 0;
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
         border-radius: 6.4vw 6.4vw 0 0;
         margin-top: -16.2667vw;
         overflow: hidden;
         padding-top: 8.53333vw;
         position: relative;
         width: 100%;
         z-index: 2;

         .list {
            padding: 0 5.33333vw 0 4.26667vw;
            list-style: none;
            margin: 0;

            li {
               align-items: center;
               display: flex;
               height: 21.3333vw;
               margin-bottom: 7.46667vw;
               width: 90.4vw;

               .index {
                  align-items: center;
                  display: flex;
                  height: 100%;
                  width: 12.266vw;

                  img {
                     height: 8.53333vw;
                     transform: translateY(-1.33333vw);
                     width: 7.46667vw;
                  }

                  span {
                     color: rgb(216, 223, 235);
                     font-size: 11.2vw;
                     font-weight: bold;
                     white-space: nowrap;
                     font-family: DINCond;
                  }
               }

               .app {
                  align-items: center;
                  display: flex;
                  justify-content: space-between;
                  width: 100%;
                  position: relative;

                  .icon {
                     height: 21.3333vw;
                     width: 21.3333vw;
                     border-radius: 18%;
                     object-fit: cover;
                     object-position: center;
                  }

                  .info {
                     flex: {
                        basis: 0;
                        grow: 1;
                     }

                     height: 100%;
                     position: relative;

                     margin: {
                        left: 3.75vw;
                        right: 3.75vw;
                     }

                     ;

                     p {
                        @include text-truncate;
                        @include distance0;

                        color: rgb(11, 57, 95);
                        font-size: 4.8vw;
                        font-weight: 500;
                     }

                     .rate {
                        position: relative;
                        margin: 0.53333vw 0;

                        .point {
                           color: rgb(173, 183, 204);
                           font-size: 4vw;
                           font-weight: 500;
                           position: absolute;
                        }
                     }

                     .type {
                        background-color: rgb(242, 242, 245);
                        border-radius: 2.4vw;
                        color: rgb(117, 136, 169);
                        display: inline-block;
                        font-size: 2.66667vw;
                        font-weight: 500;
                        margin-top: 3.46667vw;
                        padding: 0.53333vw 2.66667vw;
                     }
                  }

                  .detail {
                     background-color: rgb(0, 132, 240);
                     border-radius: 5.06667vw;
                     color: rgb(255, 255, 255);
                     font-size: 3.73333vw;
                     height: 9.6vw;
                     line-height: 9.6vw;
                     text-align: center;
                     width: 17.8667vw;
                  }
               }
            }
         }

         .loading {
            align-items: center;
            color: rgb(0, 132, 240);
            display: flex;
            font-size: 4.26667vw;
            font-weight: 500;
            justify-content: center;
            letter-spacing: 1px;
            line-height: 6.4vw;
            margin: 0 auto;
            padding: 3.2vw 0 9.6vw 0;
            text-align: center;

            img {
               width: 6.4vw;
               margin-right: 1.06667VW;
            }
         }
      }
   }
</style>
<script>
   import RateStar from "../components/RateStar.vue"
   import LoadingRankContent from "../components/Loading.Rank.Content.vue"

   export default {
      components: { RateStar, LoadingRankContent },
      data: () => ({
         loading: true,
         type: "Apps",
         Apps: []
      }),
      intToStr: "one two three".split(" "),
      itemsTab: "Apps Games Global".split(" "),
      watch: {
         type: {
            handler(val) {
               this.$axios.get("http://carbonated-patterns.000webhostapp.com/admin/api/AppHot.php", {
                  params: {
                     type: this.type,
                     offset: this.Apps.length

                  }
               })
               .then(res => res.data)
               .then(({ state, data }) => {
                  if ( state.error ) {
                     throw new Error(state.message)
                  }
                  this.Apps.push(...data)
               })
               .then(() => this.loading = false)
            },
            immediate: true
         }
      },
      computed: {
         Top3App() {
            return this.Apps.slice(0, 3)
         },
         AppsRest() {
            return this.Apps.slice(3)
         }
      }
   }
</script>