<template>
   <div class="apphost">
      <p class="title" v-if="title">
         <img class="icon" :src="require('@/assets/home.ic.hot.svg')">
         <span> {{ "HOME.HOT" | t }} </span>
      </p>
      <div class="content">
         <ul class="list">
            <li class="item" v-for="item in items">
               <router-link :to="'/lite/info/app/' + item.id" class="app" tag="div">
                  <img v-lazy="item.icon">
                  <p> {{ item.name }} </p>
               </router-link>
            </li>
         </ul>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .apphost {
      margin-bottom: 4.8vw;

      .title {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
         color: rgb(22, 43, 72);
         display: flex;
         font-size: 4.267vmin;
         font-weight: 500;
         line-height: 5.867vw;
         overflow: hidden;
         padding: 0 5.333vw;
         align-items: center;

         .icon {
            height: 5.867vw;
            margin-top: -0.8vW;
            vertical-align: middle;
            width: 5.867vw;
         }

         span {
            margin-left: 1.067vw;
         }
      }

      .content {
         width: 100%;
         overflow: hidden;

         .list {
            margin: 0;
            padding: 0;
            list-style: none;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 0 5.333vw;
            width: 100vw;
            box-sizing: border-box;
            display: flex;

            .item>.app {
               box-sizing: border-box;
               display: flex;
               align-items: center;
               flex-direction: column;
               height: 24.533vw;
               margin-top: 4.267vw;
               text-align: center;
               width: 18.667vw;

               img {
                  border-radius: 3.467vw;
                  height: 18.667vw;
                  width: 18.667VW;
               }

               p {
                  margin: 0;
                  padding: 0;
                  color: rgb(11, 57, 95);
                  display: inline-block;
                  font-size: 3.2vmin;
                  font-weight: 500;
                  line-height: 3.733vw;
                  margin-top: 2.133vw;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  width: 18.667vw;
               }
            }
         }
      }
   }
</style>
<script>
   export default {
      props: {
         items: Array,
         title: {
            type: Boolean,
            default: true
         }
      }
   }
</script>
