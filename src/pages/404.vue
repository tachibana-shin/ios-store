<template>
   <div class="error-404">
      <img :src="require('@/assets/not.found.png')">
      <p> Sorry, The Page Does Not Exists</p>
      <p class="go-home"> Go To Home </p>
   </div>
</template>
<style lang="scss" scoped>
   .error-404 {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: calc(100vh - 13.867vw);
      justify-content: center;

      img {
         margin-bottom: 13.3333vw;
         width: 80%;
      }

      p {
         @include distance0;
         text-align: center;
         color: rgb(0, 142, 255);
         font-size: 5.33333vw;
      }

      .go-home {
         background-color: rgb(0, 142, 255);
         border-radius: 1.33333vw;
         color: rgb(255, 255, 255);
         margin-top: 5.33333vw;
         padding: 2.66667vw 5.33333vw;
      }
   }
</style>
<script>
   export default {

   }
</script>