<template>
  <div class="inputbox"> 
    <yrow align="center" class="inputbox_p1">
      <ycol :span="4"> <span>输入框:</span></ycol>
      <ycol :span="20">
        <yinput :value="myvalue1" csstype='px' :status="status" :placeholder="placeholder" @blur="blur"></yinput>
      </ycol>
    </yrow>
    <yrow align="center"  class="inputbox_p2">
       <ycol :span="4"> <span>输入框2:</span></ycol>
      <ycol :span="20"><yinput :value="myvalue2" csstype='px' :placeholder="placeholder" size='small'></yinput></ycol>
    </yrow>
     <yrow align="center"  class="inputbox_p3">
       <ycol :span="4"> <span>输入框3:</span></ycol>
      <ycol :span="20"><yinput :value="myvalue2" csstype='px' :placeholder="placeholder" size='large'></yinput></ycol>
    </yrow>
  </div>
</template>
<style lang="scss">
</style>
<script>
  import './sbox.scss'; 
  import yinput from '../../../widgets/input/src/input.vue'; 
  import ycol from '../../../widgets/col/src/col.js'; 
  import yrow from '../../../widgets/row/src/row.js'; 
  import remfun from '../../../commonjs/config.js'; 
  export default {
    name: 'y-input',
    data:function(){
      return {
         myvalue1:this.value1||'',
         myvalue2:this.value2||'',
         status:''
      }
    },
    components: {
      'yinput':yinput,
      'ycol':ycol,
      'yrow':yrow
    },
    methods: {
      blur(val) {
        this.myvalue1 = val;
        if(val.length==0){
          this.status = "error"
        }else{
          this.status = ""
        }
      }
    },
    props: {
      value1: [String, Number],
      value2: [String, Number],
      placeholder: String
    }
  };
</script>