<ttemplate>
   <div class="wrapper.loading">
      <div class="wrapper.content">
         <div class="content">
            <div class="title1">
            </div>
            <div class="title2">
            </div>
            <div class="des1">
            </div>
            <div class="des2">
            </div>
            <list-app-loading :children="true"/>
         </div>
      </div>
   </div>
</ttemplate>
<style lang="scss" scoped>
   .wrapper\.loading {
      position: relative;
      margin-top: 25.333vw;

      .wrapper\.content {
         background-color: rgb(237, 240, 245);
         height: 100%;
         overflow: hidden;

         .content {
            border-radius: 6.4VW 6.4vw 0 0;
            box-sizing: border-box;
            margin-top: 44.267VW;
            overflow: hidden;
            padding: 0 5.333Vw;

            .title1,
            .title2 {
               background-color: rgb(237, 240, 245);
               border-radius: 4.267vw;
               height: 9.067vw;
            }

            .title2 {
               margin-top: 4.267vw;
               width: 60%;
            }

            .des1,
            .des2,
            .des3 {
               background-color: rgb(237, 240, 245);
               border-radius: 2.933vw;
               height: 5.867vw;
               margin-top: 6.4vw;
            }

            .des2, .des3 {
               margin-top: 2.667vw;
               width: 60%;
            }

            .des3 {
               width: 90%;
            }
         }
      }
   }
</style>

<script>
   import BacAnimation from "./Loading:bac.animation.vue"
   export default {
      components: { BacAnimation }
   }
</script>