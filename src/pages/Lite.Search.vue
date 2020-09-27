<template>
   <div class="main">
      <div class="wrapper_search">
         <div class="search_input">
            <input placeholder="Search" @keyup="fetchData" :placeholder="placeholderSearch" v-model="valueSearch" @keyup.enter="searchByValue($event.target.value)" @blur="blurSearch" ref="Search">
            <img class="icon" :src="require('@/assets/ic.search.svg')">
            <div class="result" v-if="result" @touchmove.prevent>
               <ul v-touch-scroll:vertical="{ scrollbar: { render: false } }">
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
                  <li v-for="item in data.keyword" @click="searchByValue( item )">
                     <span>{{ item }}</span>
                  </li>
               </ul>
            </div>
            <div class="interset">
               <p class="title"> {{ "APP_INFO.INTERTING" | t }} </p>
               <list-app-hot padding="0" style="padding: 0" :title="false" :items="data.intersting"/>
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

               overflow: hidden;
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
   export default {
      components: { LiteFooter, Loading, ListAppHot },
      data: () => ({
         loading: true,

         result: null,

	 placeholderSearch: "Search",
	 valueSearch: "",
         
         data: {
            keyword: [],
            intersting: []
         }
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
		        throw new Error(state.message)
                     } else {
                        this.result = data
                     }
                  })
                  .catch(() => this.result = null)
            }, 1000)
         },
	 searchByValue( value ) {
            this.valueSearch = ""
	    this.placeholderSearch = value
	    this.$router.push("/lite/search/result?q=" + encodeURIComponent(value))
	 },
	 blurSearch() {
            this.placeholderSearch = this.$refs.Search.value
	    this.valueSearch = ""
	    this.result = null
	 }
      },
      created() {
         this.$axios.get("http://carbonated-patterns.000webhostapp.com/admin/api/Search.Data.php")
         .then(res => res.data)
         .then(({ state, data }) => {
            if ( state.error ) {
               throw new Error(state.message)
            }
            
            this.data = data
         })
         .then(() => this.loading = false)
      }
   }
</script>
