<template>
   <div class="wrapper.loading">
      <bac-animation />
      <div class="loading.title"></div>
      <list-app-loading :children="true" padding="0" />
   </div>
</template>
<style lang="scss" scoped>
   .wrapper\.loading {
      position: relative;

      .loading\.title {
         background-color: rgb(237, 240, 245);
         border-radius: 2.667vw;
         height: 5.333vW;
         margin-top: 4.267vW;
         width: 37.333VW;
      }
   }
</style>
<script>
   import ListAppLoading from "./ListApp.Loading.vue"
   import BacAnimation from "./Loading:bac.animation.vue"
   export default {
      components: { ListAppLoading, BacAnimation }
   }
</script>