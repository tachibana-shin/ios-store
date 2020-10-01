<template>
   <div class="wrapper">
      <h2> FAQ </h2>
      <div class="item" v-for="item in helpers">
         <div class="content">
            <p class="title"> {{ item.title }} </p>
            <ol>
               <li class="item" v-for="item in item.contents">
                  <collapse :title="item.title" :content="item.value" />
               </li>
            </ol>
         </div>
      </div>
      <router-link tag="div" to="/feedback" class="feedback-target">
         Feedback
      </router-link>
   </div>
</template>
<style lang="scss" scoped>
   .wrapper {
      background-color: $bg-page-more;
      padding-bottom: 21.867vw;
      padding-left: 5.333vw;
      padding-right: 5.333vw;
      
      h2 {
         color: $color-blue-dark;
         font-size: 6.93333vw;
         font-weight: 500;
         line-height: 9.86667vw;
         padding-bottom: 7.46667vw;
         padding-left: 5.33333vw;
         padding-right: 0;
         padding-top: 5.33333vw;
      }

      .item {
         background-color: $white;
         border-radius: 3.2vw;
         box-shadow: rgba(8, 13, 39, 0.03) 0 0.533vw 3.2vw 0;
         box-sizing: border-bOx;
         margin-top: 4.267vw;
         padding: 5.33333vw 5.333333vw 2.66667vw 5.33333vw;

         .content {

            margin-left: 2.667vw;
            text-align: left;

            .title {
               @include distance0;
               color: $color-blue-dark;
               font-size: 4.8vmin;
               font-weight: 500;
               line-height: 4.8vw;
               position: relative;

               &:before {
                  content: "";
                  width: .8vw;
                  height: 4vw;
                  background: #008eff;
                  border-radius: .533vw;
                  position: absolute;
                  left: -2.133vw;
                  top: 1px;
               }
            }

            ol {
               margin: 2.133vw 1.233vw;
               padding: 0;

               .item {
                  font-weight: 400;
                  line-height: 5.067vw;
                  margin-bottom: 1.067vw;
                  color: $color-help;
                  font-size: 3.467vmin;
               }
            }

         }


      }

      .feedback-target {
         background-color: $colorMain;
         border-radius: 8vw 0 0 8vw;
         color: $white;
         font-size: 3.73333vw;
         font-weight: 500;
         padding-bottom: 1.86667vw;
         padding-left: 4.53333vw;
         padding-right: 3.2vw;
         padding-top: 1.86667vw;
         position: fixed;
         right: 0px;
         text-align: center;
         top: 19.7333vw;
         Z-index: 100;
      }
   }
</style>
<script>
   import Collapse from "../components/Collapse-For-FAQ.vue"
   export default {
      components: { Collapse },
      data: () => ({
         helpers: []
      }),
      watch: {
         "i18n.locale": {
            handler( newVal ) {
               this.$axios.get(`http://carbonated-patterns.000webhostapp.com?lang=${newVal}`)
               .then(res => res.data)
               .then(({ state, data }) => {
                  if ( state.error ) {
                     throw new Error(state.message)
                  }
               })
               .then(data => this.helpers = data)
            },
            immediate: true
         }
      }
   }
</script>
