<template>
  <div> 
    <myinput></myinput>
    搜索
    <myinput></myinput>
  </div>
 

</template>
<style lang="scss">
 
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