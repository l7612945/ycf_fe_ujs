<template>
  <div>
    <myinput></myinput>
    <div class="mybox mybox2">loginbox中文11122</div>
    <myinput></myinput>
  </div>
 

</template>
<style lang="scss">
  @import url("./loginbox.scss");
  .mybox{
   color: #999;
  }
</style>
<script>
  import myinput from '../../../widgets/t1/src/t1.vue'; 
  export default {
    name: 't1',
    inject: {
      elFormItem: {
        default: ''
      }
    },
    components: {
      myinput
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>