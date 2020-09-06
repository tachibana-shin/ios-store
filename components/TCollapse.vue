<template>
   <div class="t-collapse" :class="{ full: state }" @click="state = !state">
      <div class="title">
         <span> Description </span>
         <img src="/assets/content.ic.down.svg">
      </div>
      <p class="content" :style="{ height }">
         <span ref="Content">
            <slot name="text" /> </span>>
      </p>
   </div>
</template>
<style lang="scss" scoped>
   .t-collapse {

      padding-bottom: 0;
      padding-left: 5.333vw;
      padding-right: 5.333vw;
      padding-top: 4.267vw;

      .title {
         position: relative;
         margin-bottom: 4.267vw;
         display: flex;
         align-items: center;
         justify-content: space-between;

         span {
            color: rgb(22, 43, 72);
            font-size: 4.8vmin;
            font-weight: 500;
         }

         img {
            height: 5.867vw;
            width: 5.867vw;
         }
      }

      .content {
         margin: 0;
         padding: 0;
         color: rgb(74, 88, 112);
         font-family: PingFangsC-Medium;
         font-size: 3.467vmin;
         font-weight: 400;
         line-height: 5.067vW;
         overflow: hidden;
         transition: height .5s ease;
         text-overflow: ellipsis;
         -webkit-boX-orient: vertical;
         webkit-line-clamp: 3;
      }

      &.full {
         .title {
            img {
               transform: rotateX(180deg);
            }
         }

      }
   }
</style>
<script>
   export default {
      data: () => ({
         state: false,
         height: "4.5em"
      }),
      watch: {
         state(val) {
            if (val) {
               setTimeout(() => this.height = this.$refs.Content.offsetHeight + "px")

            } else {
               this.height = "4.5em"
            }
         }
      }
   }
</script>