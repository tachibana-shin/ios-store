<template>
   <div class="main">
      <div class="wrapper" v-if="!loading">
         <div class="banner">
            <carousel-3d :autoplay="true" :autoplay-timeout="3000" :border="0" :autoplay-hover-pause="true" :height="164" :width="330" background-color="#00000000" :per-page="3" :key="JSON.stringify(banners)">
               <slide v-for="(item, index) in banners" :key="index" :index="index" style="border-radius: 10px">
                  <router-link to="/lite">
                     <img :src="item.path">
                  </router-link>
               </slide>
            </carousel-3d>
         </div>
         <div class="applist">
            <ul>
               <li v-for="item in Apps">
                  <app-info :data="item" />
               </li>
            </ul>
         </div>
         <loading-more :state="LoadingMoreState" @click="fetchDataMore" :no-more="NoMore" />
      </div>
      <lite-loading v-else :state="{
         swiper: true, apphost: true, applist: true
      }" />
      <lite-footer />
   </div>
</template>
<style lang="scss" scoped>
   .main {
      position: relative;

      .wrapper {
         padding-top: 11.467vw;
         background-color: #fff;

         .banner {
            position: relative;

            img {
               object-fit: cover;
               object-position: 50% 50%;
            }
         }

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
</style>
<script>
   import LiteFooter from "../components/Lite.Footer.vue"
   import LiteLoading from "../components/Loading.Lite.vue"
   import AppInfo from "../components/AppInfo.vue"
   import LoadingMore from "../components/Button:Loading.More.vue"
   import ListAppHot from "../components/ListAppHot.vue"

   import { Carousel3d, Slide } from "vue-carousel-3d"
   export default {
      components: { LiteFooter, LiteLoading, Carousel3d, Slide, AppInfo, LoadingMore, ListAppHot },
      data: () => ({
         banners: [],
         Apps: [],
         loading: true,
         LoadingMoreState: false,
         NoMore: false
      }),
      methods: {
         fetchDataMore(loading = true) {
            if (loading) {
               this.LoadingMoreState = true
            }
            return this.$axios.get("//admin/api/ListApp.php", {
                  params: {
                     offset: this.Apps.length,
                     category: "^games"
                  }
               })
               .then(res => res.data)
               .then(json => {
                  if (json.state.error) {
                     throw new Error(json.state.message)
                  } else {
                     if (json.data.length) {
                        this.Apps.push(...json.data)
                     } else {
                        this.NoMore = true
                     }
                  }
               })
               .then(() => this.LoadingMoreState = false)
         }
      },
      created() {
         Promise.all([
            this.$axios.get("//admin/api/Banners.php", {
                  params: {
                     category: "app"
                  }
               })
            .then(res => res.data)
            .then(json => {
                  if (json.state.error) {
                     throw new Error(json.state.message)
                  } else {
                     this.banners = json.data
                  }
               }),
            this.fetchDataMore()
         ])
            .then(() => {
               this.loading = false
            })
            .catch((error) => {
               console.log(error)
            })
      }
   }
</script>