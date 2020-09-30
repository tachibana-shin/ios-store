<template>
   <div class="rate-star">
      <span class="number"> {{ value }} </span>
      <img class="rate-star__star" v-for="item in 5" :src="require('@/assets/' + getSourceStar(item))">
   </div>
</template>
<style lang="scss" scoped>
   @font-face {
      font-family: DIM-Medium;
      src: url("../fonts/DIN-Medium.ttf");
   }

   .rate-star {
      display: flex;
      align-items: center;

      .number {
         color: $color-blue-grey;

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
            if (index < ~~this.value) {
               return "rate.ic.1.svg"
            }
            if (this.value > ~~this.value && ~~this.value == index) {
               return "rate.ic.0.5.svg"
            }
            return "rate.ic.0.svg"
         }
      }
   }
</script>