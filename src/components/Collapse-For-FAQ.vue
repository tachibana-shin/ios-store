<template>
   <div class="collapse-faq">
      <div class="el-collapse">
         <div class="item">
            <div class="header" :class="{ active: isActive }" @click="isActive = !isActive">
               <span class="title"> {{ title }} </span>
               <img class="icon" :src="require('@/assets/content.ic.down.svg')">
            </div>
            <div class="content" :style="{
               height: isActive ? $refs.Content.scrollHeight + 'px' : 0
            }">
               <span ref="Content" v-html="content.replace(/^\n+/g, '').replace(/\n/g, '<br>')"></span>
            </div>
         </div>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .collapse-faq {
      margin-bottom: 2.133vw;

      .el-collapse {

         .item {
            margin-bottom: -1px;

            .header {
               align-items: center;
               background-color: $white;
               color: $color-FAQ;
               cursor: pointer;
               display: flex;
               font-size: 3.467vmin;
               font-weight: 500;
               height: 6.933vw;
               line-height: 12.8vw;
               outline-width: 0px;
               transition: border-bottom-color 0.3s ease;
               align-items: center;
               justify-content: space-between;

               &.active {
                  border-bottom-color: transparent;
               }

               .title {
                  color: $color-help;
                  font-size: 3.467vmin;
                  font-weight: 400;
                  line-height: 4.267vw;
               }

               .icon {
                  margin-right: 2.133vw;
                  transition: transform .2s linear;
                  transform-origin: bottom bottom;
               }

               &.active .icon {
                  transform: rotate(180deg);
               }
            }

            .content {
               background-color: $white;
               box-sizing: border-box;
               overflow: hidden;
               height: 0;
               transition: height .2s linear;

               margin-top: 1.6Vw;

               span {
                  font-weight: 400;
                  line-height: 4.8vw;
                  padding-right: 8vw;
                  color: $colorMain;
                  ;
                  font-size: 3.467vmin;
                  display: block;
               }
            }
         }
      }
   }
</style>
<script>
   export default {
      props: {
         title: String,
         content: String
      },
      data: () => ({
         isActive: false
      })
   }
</script>