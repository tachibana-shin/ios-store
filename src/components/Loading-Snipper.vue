<template>
   <div class="loading-snipper">
      <img :src="require('@/assets/dua.ring.1s.svg')">
   </div>
</template>
<style lang="scss" scoped>
   .loading-snipper {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
      left: 0;
      position: fixed;
      top: 0px;
      width: 100%;
      Z-index: 10;

      img {
         width: 16vw;
         height: 16vw;
      }
   }
</style>
<script>
   export default {

   }
</script>