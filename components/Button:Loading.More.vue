<template>
   <div class="loading-more">
      <div class="loading-btn" v-if="state">
         <span class="loading.title">More</span>
         <img class="loading.icon" src="/assets/ic.loading.more.svg">
      </div>
      <list-app-loading v-else/>
   </div>
</template>
<style lang="scss" scoped>
   .loading-more {
      width: 100%;
      overflow: hidden;
      position: relative;
      padding-bottom: 20.533vw;

      .loading-btn {
         align-items: center;
         box-sizing: border-box;
         display: flex;
         flex-direction: column;
         font-size: 3.733vmin;
         justify-content: center;

         .loading\.title {
            color: rgb(0, 132, 240);
            display: block;
            left: 0;
            line-height: 4.267vW;
            position: relative;
            top: 0;
         }

         .loading\.icon {
            height: 4.267vw;
            margin-top: 2.133vw;
            width: 4.267vw;
            animation: loadMore 1.2s ease infinite;
            display: block;

            @keyframes loadMore {
               0% {
                  transform: translateY(-6px);
                  opacity: 0;
               }

               50% {
                  opacity: 1
               }

               to {
                  transform: translateY(6px);
                  opacity: 0;
               }
            }
         }
      }
   }
</style>
<script>
   import ListAppLoading from "./ListApp.Loading.vue"
   export default {
      props: {
         state: Boolean
      },
      components: { ListAppLoading }
   }
</script>