<template>
   <div class="t-collapse" :class="{ full: state }" @click="state = !state">
      <div class="title">
         <span> {{ title }} </span>
         <img :src="require('@/assets/content.ic.down.svg')" v-if="collapseActive">
      </div>
      <p class="content" :style="{ height }" ref="ContentPar">
         <span ref="Content">
            <slot name="text" />
         </span>
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
            color: $color-app-name-pro;
            font-size: 4.8vmin;
            font-weight: 500;
         }

         img {
            height: 5.867vw;
            width: 5.867vw;
            transition: transform .5s ease;
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
         @include text-truncate(3);
      }

      &.full {
         .title {
            img {
               transform: rotate(180deg);
            }
         }

      }
   }
</style>
<script>
   export default {
      props: {
         title: String
      },
      data: () => ({
         state: false,
         height: "4.5em",
         collapseActive: false
      }),
      watch: {
         state(val) {
            if (val && this.collapseActive) {
               setTimeout(() => this.height = this.$refs.Content.offsetHeight + "px")

            } else {
               this.height = "4.5em"
            }
         }
      },
      mounted() {
         this.collapseActive = this.$refs.Content.offsetHeight > this.$refs.ContentPar.offsetHeight
      }
   }
</script>