<template>
  <div class="inputbox"> 
    <div class="box1">
      <span>输入框:</span><yinput :value="value1" :placeholder="placeholder"></yinput>
    </div>
    <br>
    <div class="box1">
     <span>输入框2:</span><yinput :value="value2" :placeholder="placeholder" size='small'></yinput>
    </div>
  </div>
 

</template>
<style lang="scss">
 .inputbox{
  width: 400px;
  border: 1px solid #ccc;
  margin: 20px auto;
  padding: 20px;
  color: #999;
  span{
    display: inline-block;
    width: 70px;
  }
 }
</style>
<script>
  import yinput from '../../../widgets/input/src/input.vue'; 
  export default {
    name: 'y-input',
    data:function(){
      return {
         
      }
    },
    components: {
      'yinput':yinput
    },
    methods: {
      // handleClick(evt) {
      //   this.$emit('click', evt);
      // }
    },
    props: {
      value1: [String, Number],
      value2: [String, Number],
      placeholder: String
    }
  };
</script>