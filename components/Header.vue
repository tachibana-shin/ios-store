<template>
   <div class="header-nav">
      <div class="wrapper">
         <img class="menu" src="/assets/nav.ic.menu.svg" @click="$emit('show-menu')">
         <img class="logo" src="/assets/nav.ic.logo.svg">
         <img class="download" src="/assets/nav.ic.download.svg">
      </div>
      <div class="tabs">
         <div class="left">
            Download VIP
         </div>
         <div class="space"></div>
         <div class="right">
            Tutuapp Lite
         </div>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .header-nav {
      box-shadow: rgba(8, 13, 39, .05) 0 .533vw 2.133vw 0;
      position: fixed;
      top: 0;
      left: 0;
      transition: all .2 ease;
      z-index: 9999;
      width: 100%;
      .wrapper {
         width: 100%;
         height: 13.867vw;
         background-color: #fff;
         position: relative;
         display: flex;
         align-items: center;
         justify-content: space-between;
         img.menu {
            width: 6.4vw;
            height: 6.4vw;
            margin-left: 4.267vw;
         }
         img.logo {
            height: 7.467vw;
         }
         img.download {
            width: 4.267vw;
            height: 5.867vw;
            margin-right: 4.267vw;
         }
      }
      .tabs {
         background-color: rgb(252, 253, 255);
         color: rgb(162, 171, 191);
         font: {
            size: 3.733vmin;
            weight: 500;
         };
         position: relative;
         width: 100%;
         text-align: center;
         
         display: flex;
         align-items: center;
         height: 11.467vw;
         
         .left, .right {
            flex: {
               basis: 0;
               grow: 1;
               shrink: 1;
            };
            
            .active {
               color: rgb(0, 132, 240);
               font-size: 4.267vmin;
            }
         }
         .space {
            background-color: rgb(240, 242, 245);
            height: 4.8vw;
            max-height: 100%;
            width: 1px;
         }
      }
      
   }
</style>
<script>
   export default {

   }
</script>