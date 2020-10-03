<template>
   <div class="wrapper">
      <div class="header">
         <h3>Ranks</h3>
         <div class="tabs">
            <router-link to="/rank/games" class="item">
               Games
            </router-link>
            <router-link to="/rank/apps" class="item">
               Apps
            </router-link>
            <router-link to="/rank/global" class="item">
               Global
            </router-link>
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
                  <span> {{ index + 4 }} </span>
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
         <infinite-loading @infinite="fetchData" ref="Infinite">
            <div slot="spinner">
               <div class="loading">
                  <img :src="require('@/assets/dua.ring.1s.svg')">
                  <span> Loading... </span>
               </div>
            </div>
            <div slot="no-nore">
               <p class="no-more"> No more :( </p>
            </div>
            <div slot="no-results">
               <p class="no-results"> No results </p>
            </div>
         </infinite-loading>
      </div>
      <loading-rank-content v-else />
      <app-footer />
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
            color: $white;
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
               background-color: $white-a6;
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
                  background-color: $white;
                  font-weight: 500;
               }
            }
         }

      }

      .content {
         background-color: $bg-rank;
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
                     color: $color-index-rank;
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
                        shrink: 0;
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

                        color: $color-value;
                        font-size: 4.8vw;
                        font-weight: 500;
                        max-width: (100vw / 360 * 118);
                     }

                     .rate {
                        position: relative;
                        margin: 0.53333vw 0;

                        .point {
                           color: $color-point-rank;
                           font-size: 4vw;
                           font-weight: 500;
                           position: absolute;
                        }
                     }

                     .type {
                        background-color: $bg-category-rank;
                        border-radius: 2.4vw;
                        color: $color-title-app;
                        display: inline-block;
                        font-size: 2.66667vw;
                        font-weight: 500;
                        margin-top: 3.46667vw;
                        padding: 0.53333vw 2.66667vw;
                     }
                  }

                  .detail {
                     background-color: $color-main;
                     border-radius: 5.06667vw;
                     color: $white;
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
            color: $color-main;
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

         .no-more,
         .no-results {
            color: $color-main;
         }
      }
   }
</style>
<script>
   import RateStar from "../components/RateStar.vue"
   import LoadingRankContent from "../components/Loading.Rank.Content.vue"
   import AppFooter from "../components/Footer.vue"
   import InfiniteLoading from "vue-infinite-loading"

   export default {
      components: { RateStar, LoadingRankContent, AppFooter, InfiniteLoading },
      data: () => ({
         loading: true,
         Apps: []
      }),
      intToStr: "one two three".split(" "),
      computed: {
         Top3App() {
            return this.Apps.slice(0, 3)
         },
         AppsRest() {
            return this.Apps.slice(3)
         }
      },
      methods: {
         fetchData({ loaded, complete }) {
            this.$axios.get("http://carbonated-patterns.000webhostapp.com/admin/api/AppHot.php", {
                  params: {
                     type: this.$route.meta.type(this.$route) || "games",
                     offset: this.Apps.length
                  }
               })
               .then(res => res.data)
               .then(({ state, data }) => {
                  if (state.error) {
                     throw new Error(state.message)
                  }
                  this.Apps.push(...data)

                  if (data.length === 0) {
                     complete()
                  } else {
                     loaded()
                  }
               })
               .then(() => this.loading = false)

         }
      },
      watch: {
         "$route.params.type": {
            handler() {
               this.Apps = []
               if (this.$refs.Infinite) {
                  this.$refs.Infinite.stateChanger.reset()
               }
               this.fetchData({
                  loaded() {},
                  complete() {}
               })
            },
            immediate: true
         }
      }
   }
</script>