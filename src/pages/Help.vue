<template>
   <div class="wrapper">
      <h2> FAQ </h2>
      <div class="item" v-for="item in helpers">
         <div class="content">
            <p class="title"> {{ item.title }} </p>
            <ol>
               <li class="item-collapse" v-for="item in item.contents">
                  <collapse :title="item.title" :content="item.value" />
               </li>
            </ol>
         </div>
      </div>
      <router-link tag="div" to="/feedback" class="feedback-target">
         Feedback
      </router-link>
      <img :src="require('@/assets/ellipsis.svg')" class="loading" v-if="loading">
   </div>
</template>
<style lang="scss" scoped>
   .wrapper {
      background-color: $bg-page-more;
      padding-bottom: 4.26667vw;

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
         box-sizing: border-box;;
         margin: 0 auto 4.267vw auto;
         padding: 5.33333vw 5.333333vw 2.66667vw 5.33333vw;
	 width: 89.333vw;
	 
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
	       margin-bottom: 4.2667vw;

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
               margin: 2.133vw 0 2.133vw 1.233vw;
               padding: 0;
	       box-sizing: border-box;

               .item-collapse {
                  font-weight: 400;
                  line-height: 5.067vw;
		  @include distance0;
                  margin-bottom: 4vw;
                  color: $color-help;
                  font-size: 3.467vmin;
               }
            }

         }


      }

      .feedback-target {
         background-color: $color-main;
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
      
      .loading {
         left: 50%;
         position: fixed;
         top: 50%;
         transform: translate(-50%, -50%);
         width: 9.6vw;
      }
   }
</style>
<script>
   import Collapse from "../components/Collapse-For-FAQ.vue"
   export default {
      components: { Collapse },
      data: () => ({
         helpers: [],
         loading: true
      }),
      watch: {
         "$i18n.locale": {
            handler(newVal) {
               this.$axios.get(`http://carbonated-patterns.000webhostapp.com/admin/api/Helper.php?lang=${newVal}`)
                  .then(res => res.data)
                  .then(({ state, data }) => {
                     if (state.error) {
                        throw new Error(state.message)
                     }
                     this.helpers = data
                  })
                  .then(() => this.loading = false)
            },
            immediate: true
         }
      }
   }
</script>
