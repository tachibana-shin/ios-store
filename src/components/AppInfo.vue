<template>
   <router-link :to="'/lite/info/app/' + data.id" class="appinfo" tag="div">
      <div class="appinfo.content">
         <img class="icon" v-lazy="data.icon">
         <div class="app.content">
            <p class="app.title"> {{ data.name }} </p>
            <img class="VIP" :src="require('@/assets/list.app.vip.png')">
         </div>
      </div>
      <button class="button"></button>
   </router-link>
</template>
<style lang="scss" scoped>
   .appinfo {
      padding: 3.2vw 0;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .appinfo\.content {
         display: flex;
	 flex: {
            grow: 1;
	    basis: 0;
	    shrink: 1;
	 }

         .icon {

            border-radius: 3.467vw;
            display: block;
            height: 18.667vw;
            width: 18.667vw;
         }

         .app\.content {
            height: 18.667vw;
            justify-content: center;
            margin-left: 4.267vw;
            overflow: hidden;
            position: relative;
            text-align: left;
            align-items: flex-start;
            display: flex;
            flex-direction: column;

            .app\.title {
               margin: 0;
               padding: 0;
               color: $color-text-content;
               font-size: 4.267vmin;
               font-weight: 500;
               line-height: 5.867vw;
               margin-bottom: 2.133vw;
               overflow-x: hidden;
               text-overflow: ellipsis;
               -webkit-box-orient: vertical;
               -webkit-line-clamp: 2;
            }

            .VIP {

               border-radius: 3.467vw;
               display: block;
               height: 4.8vw;
               width: 8vw
            }
         }
      }

      .button {
         border: none;
         outline: none;
         border-radius: 50%;
         height: 12.267vw;
         width: 12.267vw;

         background: {
            image: url("../assets/list.btn.download.svg");
            repeat: no-repeat;
            size: 100%;
            position: center;
         }

         ;
      }
   }
</style>
<script>
   export default {
      props: {
         data: {
	    type: Object,
	    required: true
	 }
      }
   }
</script>
