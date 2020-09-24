<template>
   <div class="main">
      <div class="wrapper_search">
         <div class="search_input">
            <input placeholder="Search" @keyup="fetchData" ref="Search" @keyup.enter="$router.push('/lite/search/result?query=' + $event.target.value)">
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
         <div class="wrapper_result" v-if="!loading">
            <div class="keyword-hot">
               <p class="title"> {{ "SEARCH.KEYWORD_HOT" | t }} </p>
               <ul class="list">
                  <li v-for="item in 5">
                     {{ item }}
                  </li>
               </ul>
            </div>
            <div class="interset">
               <p class="title"> {{ "APP_INFO.INTERTING" | t }} </p>
               <ul class="list">
                  <li class="item" v-for="item in 8">
                     <div class="icon"></div>
                     <p class="text"></p>
                  </li>
               </ul>
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

         .search_input {
            background-color: rgb(255, 255, 255);
            height: 10.667vw;
            padding: 5.333vw;
            top: 0;
            width: 89.333vw;
            position: relative;
            box-sizing: border-box;
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


         .wrapper_result {
            /*margin-top: 21.333vw;*/
            padding: 0 5.333vw;
            margin-top: 10.667vw;
            position: relative;
            .keyword-hot {
               padding-top: 1.333vw;

               .title {
                  margin: 0;
                  padding: 0;
                  background-color: rgb(237, 240, 245);
                  border-radius: 2.667vw;
                  height: 6.4vw;
                  margin-top: 4vw;
                  width: 48VW;
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
                     margin-right: 8vw;
                     margin-top: 5.333vw;
                     width: 32vw;
                  }
               }
            }

            .interset {
               margin-top: 10.667vw;

               .title {
                  background-color: rgb(237, 240, 245);
                  border-radius: 2.667vw;
                  height: 6.4vw;
                  margin-top: 4VW;
                  width: 66.667VW;
               }

               .list {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: space-between;
                  margin: 0;
                  padding: 0;
                  list-style: none;

                  .item {
                     margin-top: 3.733vw;
                     height: 23.467Vw;
                     margin-top: 4.267vw;
                     width: 18.667vw;
                     display: flex;
                     flex-direction: column;

                     .icon {
                        background-color: rgb(237, 240, 245);
                        border-radius: 2.667vw;
                        height: 18.667vw;
                        width: 18.667vw;
                     }

                     .text {
                        margin: 0;
                        padding: 0;
                        background-color: rgb(237, 240, 245);
                        border-radius: 1.6vw;
                        flex-basis: 0;
                        flex-grow: 1;
                        flex-shrink: 1;
                        margin-top: 1.6vw;

                     }
                  }
               }
            }
         }
      }
   }
</style>
<script>
   import LiteFooter from "../components/Lite.Footer.vue"
   import Loading from "../components/Loading.Search.vue"
   export default {
      components: { LiteFooter, Loading },
      data: () => ({
         loading: true,

         result: null
      }),
      timeout: 0,
      methods: {
         fetchData() {
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
               this.$axios.get("http://carbonated-patterns.000webhostapp.com/admin/api/pre-search.php", {
                     params: {
                        query: this.$refs.Search.value
                     }
                  })
                  .then(res => res.data)
                  .then(({ state, data }) => {
                     if (state.error) {

                     } else {
                        this.result = data
                     }
                  })
                  .catch(() => this.result = [])
            }, 1000)
         }
      },
      mounted() {
         this.loading = false
      }
   }
</script>