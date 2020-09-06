<template>
   <div class="rate-star">
      <span class="number"> {{ value }} </span>
      <img class="rate-star__star" v-for="item in 5" :src="getSourceStar(item)">
   </div>
</template>
<style lang="scss" scoped>
   @font-face {
      font-family: DIM-Medium;
      src: url("/fonts/DIN-Medium.ttf");
   }

   .rate-star {
      display: flex;
      align-items: center;

      .number {
         color: rgb(162, 171, 191);

         font: {
            family: DIN-Medium;
            size: 3.733vmin;
            weight: 500;
         }

         line-height: 4vw;
         margin-right: 1.067vw;

         .rate-star__star {
            width: 4.267vw;
            height: 4.267vw;
         }
      }
   }
</style>
<script>
   export default {
      props: {
         value: Number
      },
      methods: {
         getSourceStar(index) {
            if (index <= ~~this.value) {
               return "/assets/rate.ic.1.svg"
            }
            if (~~this.value < this.value && ~~this.value == index) {
               return "/assets/rate.ic.0.5.svg"
            }
            return "/assets/rate.ic.0.svg"
         }
      }
   }
</script>