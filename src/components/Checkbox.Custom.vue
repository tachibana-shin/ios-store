<template>
   <div class="checkbox-custom">
      <input type="checkbox" hidden :checked="checked" :name="name">
      <span @click="checked = !checked"></span>
   </div>
</template>
<style lang="scss" scoped>
   @include "scss/variants";
   .checkbox-custom {
      display: inline-block;

      span {
         display: block;
         width: 5.333vw;
         height: 5.333vw;
         border: 1px solid $colorMain;
         border-radius: 50%;
         transition: background-color .333s ease;
      }

      input[type="checkbox"]:checked+span {
         background: {
            color: $colorMain;
            image: url("../assets/checked.svg");
            repeat: no-repeat;
            size: 80%;
            position: center;
         }
      }
   }
</style>
<script>
   export default {
      props: {
         state: Boolean,
         name: String
      },
      data() {
         return {
            checked: this.state
         }
      },
      model: {
         prop: "state"
      },
      watch: {
         "checked"(newVal) {
            this.$emit("input", newVal)
         },
         "state"(newVal) {
            this.checked = newVal
         }
      }
   }
</script>