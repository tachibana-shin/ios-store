<template>
   <div class="main">
      <div class="wrapper_search">
         <lite-search-input/>
         <div class="wrapper__result">
            <div v-if="!loading">
               <div class="applist">
                  <ul>
                     <li v-for="item in apps">
                        <app-info :data="item" />
                     </li>
                  </ul>
               </div>
               <loading-more :state="LoadingMoreState" @click="fetchData" :no-more="NoMore" />
            </div>
            <loading-app-list v-else />
         </div>
      </div>
      <lite-footer />
   </div>
</template>
<style lang="scss" scoped>
   .main {
      background-color: rgb(255, 255, 255);
      padding-top: 11.467vw;
      position: relative;

      .wrapper_search {
         padding-bottom: 17.6vw;
         position: relative;

         .wrapper__result {
            .applist {
               ul {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                  list-style: none;
                  padding: 0 5.333vw;
               }

            }

            position: relative;
            overflow: hidden;
            width: 100%;
            box-sizing: border-box;
            margin-top: 10.333vw;

         }
      }
   }
</style>
<script>
   import LiteFooter from "../components/Lite.Footer.vue"
   import LoadingAppList from "../components/ListApp.Loading.vue"
   import AppInfo from "../components/AppInfo.vue"
   import LoadingMore from "../components/Button:Loading.More.vue"
   import LiteSearchInput from "../components/Lite.Search.Input.vue"

   export default {
      components: { LiteFooter, LoadingAppList, AppInfo, LoadingMore, LiteSearchInput },
      data: () => ({
         loading: true,

         apps: [],
         LoadingMoreState: false,
         NoMore: false,

      }),
      methods: {
         fetchData(loadMore) {
            if (!loadMore) {
               this.LoadingMoreState = true
            }

            this.$axios.get("http://carbonated-patterns.000webhostapp.com/admin/api/Search.php", {
                  params: {
                     query: this.$route.query.query,
                     offset: loadMore ? 0 : this.apps.length
                  }
               })
               .then(res => res.data)
               .then(({ state, data }) => {
                  if (state.error) {
                     throw new Error(state.message)
                  } else {
                     if (!loadMore) {
                        this.apps.push(...data)
                        if (data.length == 0) {
                           this.NoMore = true
                        }
                     } else {
                        this.apps = data
                     }
                  }
               })
               .then(() => this.loading = this.LoadingMoreState = false)
               .catch((error) => console.log(error))
         }
      },
      created() {
         this.fetchData(true)
      }
   }
</script>