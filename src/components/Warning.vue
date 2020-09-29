<template>
   <div class="warning">
      <div class="content">
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .warning {
      height: 100%;
      left: 0;
      position: fixed;
      top: 0;
      width: 100%;
      align-items: center;
      display: flex;
      justify-content: center;
      z-index: 10;

      .content {
         background-color: $white;
         border-radius: 3.2vw;
         position: relative;
         text-align: center;
         transform: translateY(-17.6vw);
         width: 59.467vw;

         img {
            left: 50%;
            position: absolute;
            top: 0px;
            transform: translate(-50%, -50%);
         }
      }
   }
</style>