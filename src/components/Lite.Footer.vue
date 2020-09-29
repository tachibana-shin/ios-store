<template>
   <footer class="footer.app">
      <router-link class="item" href="#" v-for="item in $options.tabs"
         :key="item.path"
         :to="item.path"
         :active-class="item.activeClass"
         :exact-active-class="item.exactActiveClass">
         <img class="icon" :src="require('@/assets/' + item.icon + ((!!item.exactActiveClass ? $route.path == item.path : ($route.path.indexOf(item.path) > -1)) ? 'selected' : 'default') + '.svg')">
         <p> {{ item.name | t }} </p>
      </router-link>
   </footer>
</template>
<style lang="scss" scoped>
   .footer\.app {
      background-color: $white;
      border-bottom: 1px solid rgb(217, 217, 217);
      bottom: 0;
      box-shadow: rgba(8, 13, 39, .01) 0 0 1.6vw 0;
      display: flex;
      height: 13.333vw;
      left: 0;
      position: fixed;
      width: 100vw;
      z-index: 50;
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
            color: $color-blue-grey;
            font-size: 2.667vmin;
            font-weight: 400;
            line-height: 3.733vw;
            margin-top: -0.8vw;
         }

         &.active p {
            color: $color-blue-dark;
            font-weight: 500;
         }
      }
   }
</style>
<script>
   export default {
      tabs: [
         { icon: "tab.ic.home.", path: "/lite", name: "LITE_FOOTER.HOME", activeClass: "", exactActiveClass: "active" },
         { icon: "tab.ic.game.", path: "/lite/game", name: "LITE_FOOTER.GAMES", activeClass: "active" },
         { icon: "tab.ic.app.", path: "/lite/app", name: "LITE_FOOTER.APPS", activeClass: "active" },
         { icon: "tab.ic.search.", path: "/lite/search", name: "LITE_FOOTER.SEARCH", activeClass: "active" }, 
         
      ]
   }
</script>
