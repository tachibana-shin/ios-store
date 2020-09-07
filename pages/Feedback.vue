<template>
   <div class="main">
      <div class="feedback-item">
         <div class="title">
            <span>Feedback Type</span>
         </div>
         <div class="select">
         </div>
      </div>
      <div class="feedback-item feedback.content">
         <div class="title">
            <span>Descrition</span>
         </div>
         <div class="textarea-parent">
            <textarea></textarea>
            <span> 0 / 500 </span>
         </div>
      </div>
      <div class="feedback-item feedback-screenshot">
         <div class="title nostar">
            <span> Screenshot </span>
            <span> 0 / 4 </span>
         </div>
         <div class="cube">
            <div class="btn">
               <span></span>
            </div>
            <div class="item">
               <div class="busybox">
                  <i class="close"></i>
                  <div class="progress">
                     <i class="error"></i>
                     <span> 100% </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   .main {
      background-color: rgb(244, 245, 247);
      padding-top: 6.4vw;

      .feedback-item {
         margin-bottom: 9.6vw;
         width: 89.333vw;

         .title {
            align-items: center;
            display: flex;
            height: 5.867vw;
            margin-bottom: 4.267vw;

            span:first-child {
               color: rgb(55, 77, 115);
               font-size: 4.267vmin;
               font-weight: 500;

               &:not(.nostar):after {
                  content: "•";
                  color: #f00;
                  margin-left: 1vw;
               }
            }
         }

         .select {
            color: rgb(55, 77, 115);
            text-align: center;

            background-color: rgb(242, 243, 245);
            border-radius: 5.333vw;
            color: rgb(162, 171, 191);
            font-size: 3.733vmin;
            font-weight: 500;
            line-height: 4.267vw;
            outline-style: none;
            text-align: center;
            display: block;
            border: 0;
            position: absolute;
            z-index: 2;
         }
      }

      .feedback\.content {
         .textarea-parent {
            font-size: 3.733vw;
            border-radius: 2.133vw;
            padding-bottom: 12.533vw;
            padding-top: 4.267vw;

            background-color: rgb(255, 255, 255);

            border: 1px solid rgb(220, 223, 230);
            border-radius: 1.067vw;
            box-sizing: border-box;

            textarea {
               color: rgb(96, 98, 102);
               display: block;
               font-size: inherit;
               line-height: 1.5;
               padding: 1.333vw 4vw;
               resize: vertical;
               color: rgb(55, 77, 115);
               font-size: 3.733vmin;
               font-weight: 400;
               line-height: 5.867vw;
               min-height: 32.267vw;
               padding: 0 5.333vw;
            }

            span {
               background-color: rgb(255, 255, 255);
               bottom: 1.333vw;
               color: rgb(144, 147, 153);
               font-size: 3.2vmin;
               position: absolute;
               right: 2.667VW;
            }
         }
      }

      .feedback-screenshot {
         .cube {
            position: relative;

            .btn {

               margin: 2.667vw 0;
               overflow: hidden;
               position: relative;

               span {
                  background-color: rgb(255, 255, 255);
                  border-radius: 0.533vw;
                  box-shadow: rgba(0, 0, 0, 0.08) 0 0 1.6vw 0.533vw;
                  box-sizing: border-box;
                  height: 21.333vw;
                  position: relative;
                  width: 21.333vw;
                  border: 0.53vw solid rgb(209, 216, 230);
                  border-radius: 2.133vw;
                  ;
                  box-shadow: none;
                  height: 16.533vw;
                  width: 16.533vw;
               }
            }


            .item {
               border-top-color: .533vw solid rgb(209, 216, 230);
               border-radius: 2.133vw;
               box-shadow: none;
               height: 16.533vw;
               width: 16.533vw;

               position: relative;
               margin-right: 7.467vw;

               .busybox {

                  border-radius: 2.133vw;
                  height: 16.533vw;
                  width: 16.533vw;
                  background-color: rgb(255, 255, 255);
                  background-position: center;
                  background-repeat: no-repeat;
                  background-size: cover;
                  border-radius: 0.533VW;
                  box-sizing: border-box;

                  .close {
                     background-color: rgb(255, 255, 255);
                     border-radius: 50%;
                     color: rgba(0, 0, 0, 0.8);
                     font-size: 4.267vmin;
                     position: absolute;
                     right: -0.533vw;
                     top: -0.533vw;
                     z-index: 2;
                     background-image: url("/assets/feedback.ic.delete.svg");
                     background-repeat: no-repeat;
                     background-size: cover;
                     height: 5.333vw;
                     width: 5.333vw;
                  }

                  .progress {
                     align-items: center;
                     background-color: rgba(37, 38, 45, 0.4);
                     border-radius: 0.533vw;
                     display: flex;
                     height: 100%;
                     justify-content: center;
                     overflow: hidden;
                     position: relative;
                     transition: opacity .1s ease;
                     background-color: rgb(255, 255, 255);
                     border-radius: 2.133vw;
                     opacity: 0;

                     &.done {
                        opacity: 1;
                     }

                     .error {
                        font-size: 8vmin;
                        position: relative;
                        z-index: 1;
                        color: rgb(244, 53, 48);
                        display: block;
                     }

                     span {
                        color: rgb(255, 255, 255);
                        font-size: 5.333vmin;
                     }
                  }
               }
            }
         }
      }

   }
</style>