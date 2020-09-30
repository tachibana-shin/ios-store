<template>
   <div class="main">
      <div class="feedback-item">
         <div class="title">
            <span> {{ "FEEDBACK.FEEDBACK_TYPE" | t }} </span>
         </div>
         <div class="select">
            <input v-model="typeFeedback" :placeholder="'FEEDBACK.PLC1' | t">
         </div>
      </div>
      <div class="feedback-item feedback.content">
         <div class="title">
            <span> {{ "FEEDBACK.DESCRIPTION" | t }} </span>
         </div>
         <div class="textarea-parent">
            <textarea :placeholder="'FEEDBACK.PLC2' | t" v-model="content"></textarea>
            <span> {{ content.length }} / 500 </span>
         </div>
      </div>
      <div class="feedback-item feedback-screenshot">
         <div class="title">
            <span class="nostar"> {{ "FEEDBACK.SCREENSHOT" | t }} </span>
            <span> {{ fileSendToReport.length }} / 4 </span>
         </div>
         <div class="cube">
            <div class="item" v-for="item in fileSendToReport">
               <div class="busybox" :style="{ backgroundImage: 'url(' + getBlob(item.file) + ')' }">
                  <i class="close"></i>
                  <div class="progress" v-if="item.progress != null">
                     <i class="error" :class="{ active: item.error }">!</i>
                     <span v-if="!item.error"> {{ item.progress }} </span>
                  </div>
               </div>
            </div>
            <div class="btn" v-if="fileSendToReport.length < 4" @click="$refs.File.click()">
               <span></span>
               <input type="file" accept="image/*" hidden ref="File" @change="addFile">
            </div>
         </div>
      </div>
      <div class="feedback-item feedback-email">
         <div class="title">
            <span v-model="email"> {{ "FEEDBACK.EMAIL" | t }} </span>
         </div>
         <input :placeholder="'FEEDBACK.PLC3' | t">
      </div>
      <button class="submit" :class="{ active: checkValid() } " @click="send"> {{ "FEEDBACK.SUBMIT" | t }} </button>
      <div class="toast" v-if="state == 1 || state == 2">
         <img class="progress" :src="require('@/assets/toast.submit.progress.svg')">
         <p> Submting... </p>
         <img :src="require('@/assets/toast.submit.failure.svg')" v-if="state == 2">
         <p v-if="state == 2"> Submit Failure </p>
      </div>
      <div class="notice" v-if="state == 3">
         <div class="content">
            <img :src="require('@/assets/toast.submit.success.svg')">
            <h2 class="title">Submitsion Success</h2>
            <p class="text"> Thank you for feedback! </p>
            <button class="ok" @click="state = 0"> OK </button>
         </div>
      </div>
   </div>
</template>
<style lang="scss" scoped>
   @import "~@/scss/variants";

   .main {
      background-color: $bg-page-more;

      padding: {
         left: 5.333vw;
         right: 5.333vw;
         bottom: 9.6vw;
         top: 6.4vw;
      }

      width: 100%;
      overflow: none;

      .feedback-item {
         margin-bottom: 9.6vw;
         width: 89.333vw;

         .title {
            align-items: center;
            display: flex;
            height: 5.867vw;
            margin-bottom: 4.267vw;

            span:first-child {
               color: $color-blue-dark;
               font-size: 4.267vmin;
               font-weight: 500;
               margin-right: 2.667vw;

               &:not(.nostar):after {
                  content: "•";
                  color: #f00;
                  margin-left: 1vw;
               }
            }
         }

         .select input {
            background-color: $white;
            border: 0;
            outline: none;
            border-radius: 2.133vw;
            box-sizing: border-box;
            color: $color-blue-dark;
            font-size: 3.733vmin;
            font-weight: 400;
            height: 11.733vw;
            padding: 3.2vw 5.333vw;
            width: 89.333vw;
         }
      }

      .feedback\.content {
         .textarea-parent {
            font-size: 3.733vw;
            border-radius: 2.133vw;
            padding-bottom: 12.533vw;
            padding-top: 4.267vw;

            background-color: $white;

            border: 1px solid rgb(220, 223, 230);
            border-radius: 1.067vw;
            box-sizing: border-box;
            position: relative;

            textarea {
               color: rgb(96, 98, 102);
               display: block;
               font-size: inherit;
               line-height: 1.5;
               padding: 1.333vw 4vw;
               color: $color-blue-dark;
               font-size: 3.733vmin;
               font-weight: 400;
               line-height: 5.867vw;
               min-height: 32.267vw;
               border: none;
               outline: none;
               background-color: $white;
            }

            span {
               background-color: $white;
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
            display: flex;
            flex-wrap: wrap;

            .btn {

               margin: 2.667vw 0;
               overflow: hidden;
               position: relative;
               padding: 0;

               span {
                  background-color: $white;
                  box-shadow: rgba(0, 0, 0, 0.08) 0 0 1.6vw 0.533vw;
                  box-sizing: border-box;
                  border: 0.53vw solid rgb(209, 216, 230);
                  border-radius: 2.133vw;
                  ;
                  box-shadow: none;
                  height: 16.533vw;
                  width: 16.533vw;
                  display: block;
                  position: relative;

                  &:before {
                     content: "+";
                     color: rgb(209, 216, 230);
                     position: absolute;
                     font-size: 1.5rem;
                     top: 50%;
                     left: 50%;
                     transform: translate(-50%, -50%);
                  }
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

               margin: {
                  top: 2.667vw;
                  bottom: 2.667vw;
               }

               ;

               .busybox {

                  border-radius: 2.133vw;
                  height: 16.533vw;
                  width: 16.533vw;
                  background-color: $white;
                  background-position: center;
                  background-repeat: no-repeat;
                  background-size: cover;
                  box-sizing: border-box;

                  .close {
                     background-color: $white;
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
                     background-color: $white;
                     border-radius: 2.133vw;
                     opacity: 0;

                     &.done {
                        opacity: 1;
                     }

                     .error {
                        font-size: 8vmin;
                        z-index: 1;
                        color: rgb(244, 53, 48);
                        display: none;

                        &.active {
                           display: block;
                        }
                     }

                     span {
                        color: $black;
                        font-size: 5.333vmin;
                     }
                  }
               }
            }
         }
      }

      .feedback-email input {
         background-color: $white;
         border: 0;
         outline: none;
         border-radius: 2.133vw;
         box-sizing: border-box;
         color: $color-blue-dark;
         font-size: 3.733vmin;
         font-weight: 400;
         height: 11.733vw;
         padding: 3.2vw 5.333vw;
         width: 89.333vw;
      }

      .submit {
         width: 89.333vw;
         margin-bottom: 9.6vw; 
         background-color: rgb(74, 76, 91);
         border-radius: 0.533vw;
         box-sizing: border-bOx;
         color: $white;
         cursor: pointer;
         display: block;
         font-size: 4.267vmin;
         line-height: 1;

         outline-style: none;
         padding: 4.533vw 4.267vw;
         text-align: center;
         white-space: nowrap;
         width: 100%;
         border-radius: 26.667vw;


         &.active {
            background-color: $colorMain;
         }
      }

      .toast {
         background-color: rgba(0, 21, 51, 0.74);
         border-radius: 2.133vw;
         left: 50%;
         padding-bottom: 3.2vw;
         padding-top: 4.267vw;
         position: fixed;
         top: 50%;
         transform: translate(-50%, -50%);
         width: 24.533vw;
         z-index: 9999;

         img {
            display: block;
            height: 10.667vw;
            margin-bottom: 0px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 0px;
            width: 10.667vw;

            &.progress {
               animation: rotate 1s linear infinite;

               @keyframes rotate {
                  from {
                     transform: rotate(0deg);
                  }

                  to {
                     transform: rotate(360deg);
                  }
               }
            }
         }

         p {
            @include distance0;
            color: rgb(229, 236, 249);
            font-size: 3.733vmin;
            font-weight: 500;
            line-height: 5.333vw;
            margin-top: 1.067vw;
            text-align: center;
         }
      }

      .notice {
         background-color: rgba(8, 14, 30, 0.75);
         height: 100%;
         left: 0;
         position: fixed;
         top: 0;
         width: 100%;
         Z-index: 99999;

         .content {
            background-color: $white;
            border-radius: 3.2vw;
            height: 53.333vw;
            left: 50%;
            margin: 0 auto;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 56.267vw;

            img {
               display: block;
               height: 32vw;
               margin: 0 auto;
               margin-top: -16vw;
               width: 32vw;
            }

            h2 {
               color: $colorMain;
               font-size: 4.267vmin;
               font-weight: 500;
               line-height: 6.4VW;
               margin-bottom: 0;
               margin-top: 3.2vW;
               text-align: center;
            }

            .text {
               font-weight: 400;
               line-height: 6.4vw;
               margin-top: 0.533vW;
               text-align: center;
               font-size: 3.733vmin;
               color: $colorMain;
               background-color: $white;
            }

            .ok {

               align-items: center;
               background-color: rgb(72, 160, 252);
               border-radius: 0 0 3.2vw 3.2vw;
               bottom: 0;
               color: $white;
               display: flex;
               font-weight: 600;
               height: 14.4vw;
               justify-content: center;
               left: 0;
               position: absolute;
               width: 56.267vw;
            }
         }
      }

   }
</style>
<script>
   export default {
      data: () => ({
         fileSendToReport: [],
         content: "",
         typeFeedback: "",
         email: "",
         state: 0
      }),
      watch: {
         fileSendToReport({ length }) {
            if (length > 4) {
               this.fileSendToReport = this.fileSendToReport.slice(0, 4)
            }
         },
         content({ length }) {
            if (length > 500) {
               this.content = this.content.slice(0, 500)
            }
         }
      },
      methods: {
         addFile({ target }) {
            this.fileSendToReport.push(...[...target.files].map(e => ({ file: e, error: false, progress: 0 })))
         },
         getBlob(file) {
            let blob = URL.createObjectURL(file)

            setTimeout(() => URL.revokeObjectURL(file), 1000)

            return blob
         },
         checkValid() {
            return !!this.content && !!this.email && !!this.typeFeedback
         },
         send() {
            this.state = 1 + 2
         }
      }
   }
</script>