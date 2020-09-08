<template>
   <div class="main">
      <div class="wrapper_search">
         <div class="search_input">
            <input placeholder="Search" @keyup="fetchData" v-model="keySearch">
            <img class="icon" :src="require('@/assets/ic.search.svg')">
            <div class="result" v-if="result">
               <ul>
                  <li class="item" v-for="item in result">
                     <router-link tag="p":to="'/lite/info/app/' + item.id">
                        {{ item.text }}
                     </router-link>
                  </li>
                  <li class="item" v-if="result.length == 0">
                     No result :(
                  </li>
               </ul>
            </div>
         </div>
         <loading/>
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
   }
</style>
<script>
   import LiteFooter from "../components/Lite.Footer.vue"
   import Loading from "../components/Loading.Search.vue"
   export default {
      components: { LiteFooter, Loading },
      data: () => ({
         result: null,
         keySearch: ""
      }),
      timeout: 0,
      methods: {
         fetchData() {
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
               this.result = [{
                  text: "hello"
               }]
            }, 1000)
         }
      }
   }
</script>