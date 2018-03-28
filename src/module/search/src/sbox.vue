<template>
  <div class="inputbox"> 
    <yrow align="center" class="inputbox_p1">
      <ycol :span="4"> <span>输入框:</span></ycol>
      <ycol :span="20">
        <yinput :value="myvalue1" :status="status" :placeholder="placeholder" @blur="blur"></yinput>
      </ycol>
    </yrow>
    <yrow align="center"  class="inputbox_p2">
       <ycol :span="4"> <span>输入框2:</span></ycol>
      <ycol :span="20"><yinput :value="myvalue2" :placeholder="placeholder" size='small'></yinput></ycol>
    </yrow>
  </div>
</template>
<style lang="scss">
 .inputbox{
  width: 400px;
  border: 1px solid #ccc;
  margin: 20px auto;
  padding: 20px;
  color: #999;
  .inputbox_p1{
    margin-bottom: 10px;
    line-height:40px;
  }
  .inputbox_p2{
    line-height: 32px;
  }
 }
</style>
<script>
  import yinput from '../../../widgets/input/src/input.vue'; 
  import ycol from '../../../widgets/col/src/col.js'; 
  import yrow from '../../../widgets/row/src/row.js'; 
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