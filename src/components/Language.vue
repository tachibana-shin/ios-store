<template>
   <div class="wrapper-language" @click.stop="() => {}">
      <div class="selector" ref="selector" @click="StateOption = !StateOption">
         <div class="location">
            <img class="flag" :src="require('@/assets/' + infoLanguage.flag)">
            <span class="name"> {{ infoLanguage.name  }} </span>
         </div>
         <img class="arrow" :src="require('@/assets/arrow-down.svg')">
      </div>
      <div class="options" v-show="StateOption">
         <ul class="list">
            <li class="item" v-for="item in languages" :key="item.code" :class="{
               active: $store.getters.getLanguage == item.code
            }" @click="$store.commit('setLanguage', item.code); StateOption = false">
               <img class="flag" :src="require('@/assets/' + item.flag)">
               <span class="name"> {{ item.name }} </span>
            </li>
         </ul>
      </div>
   </div>
</template>
<style lang="scss">
   .wrapper-language {
      position: relative;

      .selector {
         display: flex;
         align-items: center;

         .location {
            display: flex;
            align-items: center;

            .flag {
               height: 16px;
               width: 24px;
               margin-right: 8px;
            }

            .name {
               font-size: 14px;
               line-height: 18px;
               color: $black;
            }
         }

         .arrow {
            padding-left: 8px;
         }
      }

      .options {
         position: absolute;
         bottom: 16px;
         margin-bottom: 8px;
         left: 0;
         width: 150px;
         height: 300px;
         border-radius: 8px;
         background-color: $white;
         overflow: hidden scroll;
         box-shadow: 0 0 20px $black-a1;
         border: 1px solid $black-a1;

         .list {
            list-style: none;
            margin: 6px 0;
            padding: 0;

            .item {
               padding: 10px 6px;
               display: flex;
               align-items: center;

               &.active {
                  background-color: #e3e4e6;
               }

               .flag {
                  width: 24px;
                  height: 16px;
                  margin-right: 8px;
               }

               .name {

                  font-size: 14px;
                  line-height: 18px;
                  color: $black;
               }
            }
         }
      }
   }
</style>
<script>
   export default {
      data() {
         return {
            languages: [
               { flag: "en-US.png", name: "English / USA", code: "en" },
               { flag: "ja-JP.png", name: "本語", code: "ja" },
               { flag: "vi-VN.png", name: "Tiếng Việt", code: "vi" }
            ],
            StateOption: false
         }
      },
      methods: {
         inChild(element, target) {
            while (element && element.nodeType == 1) {
               if (element == target) {
                  return true
               }
               element = element.parentNode
            }
            return false
         }
      },
      computed: {
         infoLanguage() {
            for (let value of this.languages) {
               if (value.code == this.$i18n.localeAsync) {
                  return value
               }
            }
            return this.languagws[0]
         }
      },
      mounted() {
         document.addEventListener("click", this.on = event => {
            if ([event.target, event.srcElement, event.toElement, event.fromElement].map(e => this.inChild(e, this.$refs.selector)).indexOf(true) == -1) {
               this.StateOption = false
            }
         })
      },
      destroyed() {
         document.removeEventListener("click", this.on)
      }
   }
</script>
