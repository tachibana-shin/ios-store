<template>
   <footer class="footer.app">
      <router-link class="item" href="#" v-for="item in $options.tabs"
         :key="item.path"
         :to="item.path"
         :active-class="item.activeClass"
         :exact-active-class="item.exactActiveClass">
         <img class="icon" :src="item.icon + ($route.path == item.path ? 'selected' : 'default') + '.svg'">
         <p> {{ item.name }} </p>
      </router-link>
   </footer>
</template>
<style lang="scss" scoped>
   .footer\.app {
      background-color: rgb(255, 255, 255);
      border-bottom: 1px solid rgb(217, 217, 217);
      bottom: 0;
      box-shadow: rgba(8, 13, 39, .01) 0 0 1.6vw 0;
      display: flex;
      height: 13.333vw;
      left: 0;
      position: fixed;
      width: 100vw;
      z-index: 2;
      align-items: center;

      .item {
         text-decoration: none;

         flex: {
            basis: 0;
            grow: 1;
            shrink: 1;
         }

         ;
         text-align: center;

         .icon {
            height: 8vw;
            margin-top: .8vw;
            width: 8vw;
         }

         p {
            margin: 0;
            padding: 0;
            color: rgb(162, 171, 191);
            font-size: 2.667vmin;
            font-weight: 400;
            line-height: 3.733vw;
            margin-top: -0.8vw;
         }

         &.active p {
            color: rgb(55, 77, 115);
            font-weight: 500;
         }
      }
   }
</style>
<script>
   export default {
      tabs: [
         { icon: "/assets/tab.ic.home.", path: "/lite", name: "Home", activeClass: "", exactActiveClass: "active" },
         { icon: "/assets/tab.ic.game.", path: "/lite/game", name: "Games", activeClass: "active" },
         { icon: "/assets/tab.ic.app.", path: "/lite/app", name: "Apps", activeClass: "active" },
         { icon: "/assets/tab.ic.search.", path: "/lite/search", name: "Search", activeClass: "active" }, 
         
      ]
   }
</script>