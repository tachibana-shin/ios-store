<template>
   <div class="main">
      <div class="wrapper_search">
         <lite-search-input/>
         <div class="wrapper_result" v-if="!loading">
            <div class="keyword-hot">
               <p class="title"> {{ "SEARCH.KEYWORD_HOT" | t }} </p>
               <ul class="list">
                  <li v-for="item in data.keyword" @click="searchByValue( item )">
                     <span>{{ item }}</span>
                  </li>
               </ul>
            </div>
            <div class="interset">
               <p class="title"> {{ "APP_INFO.INTERTING" | t }} </p>
               <list-app-hot padding="0" style="padding: 0" :title="false" :items="data.intersting" />
            </div>
         </div>
         <loading v-else />
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
         box-sizing: border-box;

         .wrapper_result {
            /*margin-top: 21.333vw;*/
            padding: 0 5.333vw;
            /*margin-top: 10.667vw;*/
            position: relative;

            %title {
               color: rgb(47, 64, 89);
               font-size: 4.8vmin;
               font-weight: 500;
               line-height: 6.4vw;
               margin: 0;
               padding: 0;
               /*margin-top: 4vw;
               /*padding: 4.267vw 0;*/
            }

            .keyword-hot {
               padding-top: 10.333vw;

               .title {
                  @extend %title;
               }

               .list {
                  margin: 0;
                  padding: 0;
                  list-style: none;
                  display: flex;
                  flex-wrap: wrap;

                  li {
                     background-color: rgb(237, 240, 245);
                     border-radius: 4.8vw;
                     height: 9.6vw;
                     line-height: 9.6vw;
                     margin-right: 8vw;
                     margin-top: 5.333vw;
                     padding: 0 5.333vw;

                     span {
                        display: block;
                        overfilow-x: hidden;
                        text-overflow: ellipsis;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        font-size: 3.733vmin;
                     }
                  }
               }
            }

            .interset {
               margin-top: 10.667vw;

               .title {
                  @extend %title;
               }
            }
         }
      }
   }
</style>
<script>
   import LiteFooter from "../components/Lite.Footer.vue"
   import Loading from "../components/Loading.Search.vue"
   import ListAppHot from "../components/ListAppHot.vue"
   import LiteSearchInput from "../components/Lite.Search.Input.vue"
   export default {
      components: { LiteFooter, Loading, ListAppHot, LiteSearchInput },
      data: () => ({
         loading: true,

         data: {
            keyword: [],
            intersting: []
         }
      }),
      created() {
         this.$axios.get("http://carbonated-patterns.000webhostapp.com/admin/api/Search.Data.php")
            .then(res => res.data)
            .then(({ state, data }) => {
               if (state.error) {
                  throw new Error(state.message)
               }

               this.data = data
            })
            .then(() => this.loading = false)
      }
   }
</script>