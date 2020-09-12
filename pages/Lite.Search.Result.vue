<template>
   <div class="main">
      <div class="wrapper_search">
         <div class="search_input">
            <input placeholder="Search" @keyup="fetchData" ref="Search" @blur="result = []" @keyup.enter="$router.push('/lite/search/result?query=' + $event.tsrget.value)">
            <img class="icon" :src="require('@/assets/ic.search.svg')">
            <div class="result" v-if="result">
               <ul>
                  <li class="item" v-for="item in result">
                     <router-link tag="p" :to="'/lite/info/app/' + item.id">
                        {{ item.name  }}
                     </router-link>
                  </li>
                  <li class="item" v-if="result.length == 0">
                     <p> No result :( </p>
                  </li>
               </ul>
            </div>
         </div>
         <div class="wrapper__result" v-if="!loading">
            <div class="applist">
               <ul>
                  <li v-for="item in apps">
                     <app-info :data="item" />
                  </li>
               </ul>
            </div>
            <loading-more :state="LoadingMoreState" @click="fetchData(true)" :no-more="NoMore" />
         </div>
         <loading-applist v-else padding="0" />
      </div>
      <lite-footer />
   </div>
</template>
<style lang="scss" scoped>
   .main {
      background-color: rgb(255, 255, 255);
      padding-top: 11.467vw;

      .wrapper_search {
         padding-bottom: 17.6vw;
         position: relative;

         .search_input {
            background-color: rgb(255, 255, 255);
            height: 10.667vw;
            padding: 5.333vw;
            top: 0;
            width: 89.333vw;
            position: absolute;
            z-index: 2;

            input {
               background-color: rgb(242, 243, 245);
               border-radius: 5.333vw;
               color: rgb(162, 171, 191);
               font-size: 3.733vmin;
               font-weight: 500;
               height: 100%;
               line-height: 4.267vw;
               outline-style: none;
               text-align: center;
               width: 100%;
               display: block;
               border: 0;
               position: absolute;
               z-index: 2;
            }

            .icon {
               height: 5.333vw;
               width: 5.333vw;
               z-index: 3;
               right: 3px;
               margin-top: (10.667vw / 2 - 5.333 / 2);
               position: absolute;

               z-index: 3;
            }


            .result {
               background-color: rgb(255, 255, 255);
               border-radius: 0 0 3.2vw 3.2vw;
               box-shadow: rgba(32, 33, 36, 0.28) 0 1.067vw 1.6vw 0;
               max-height: calc(100vh - 85.333vw);

               overflow: hidden scroll;
               padding-bottom: 8vw;
               width: 89.333vw;
               margin-top: (10.667vw / 2);
               padding-top: (10.667vw / 2);
               z-index: 0;

               ul {
                  margin: 0;
                  padding: 0;
                  list-style: none;
                  padding-bottom: 10.667vw;
                  padding-top: 4vw;

                  .item {
                     font-size: 4vmin;
                     font-weight: 300;
                     height: 9.6vw;
                     line-height: 9.6vw;
                     padding-left: 4.267vw;
                     padding-right: 8vw;

                     p {
                        margin: 0;
                        padding: 0;

                        color: rgb(117, 136, 169);
                        font-size: 3.733vmin;
                        font-weight: 400;
                        line-height: 4.267vw;

                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                     }
                  }
               }
            }
         }

         .wrapper__result {
            .applist {
               ul {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                  padding: 0 5.333vw;
                  list-style: none;
               }

            }
         }
      }
   }
</style>
<script>
   import LiteFooter from "../components/Lite.Footer.vue"
   import LoadingAppList from "../components/ListApp.Loading.vue"
   import AppInfo from "../components/AppInfo.vue"

   export default {
      components: { LiteFooter, LoadingAppList, AppInfo },
      data: () => ({
         loading: true,

         result: null,

         apps: [],
         LoadingMoreState: false,
         NoMore: false,

      }),
      timeout: 0,
      methods: {
         fetchData(loadMore) {
            this.$axios.get("http://localhost:8080/admin/api/Search.php", {
                  params: {
                     query: this.$route.query.query,
                     offset: loadMore ? this.apps.length : 0
                  }
               })
               .then(res => res.data)
               .then(({ state, data }) => {
                  if (state.error) {
                     throw new Error(state.message)
                  } else {
                     if (loadMore) {
                        this.apps.push(...data)
                     } {
                        this.apps = data
                     }
                  }
               })
               .then(() => this.loading = false)
               .catch((error) => console.log(error))
         }
      },
      created: "fetchData"
   }
</script>