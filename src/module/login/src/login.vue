<template>
  <div class="y-login">
    <div class="y-login__lable">
        <y-input v-bind:noboder='true' :value="name" prefix-icon="icon-yonghu" clearable placeholder='请输入用户名' ></y-input>
    </div>
    <div class="y-login__lable">
        <y-input v-bind:noboder='true' :value="password" prefix-icon="icon-mima" placeholder='请输入密码'></y-input>
    </div>
    <div class="y-login__submit">
        <y-btn type="primary" pill size='large'>登录</y-btn>
    </div>
    <y-row class="y-login__links">
      <y-col :span="12"><a href="#">快速注册</a></y-col>
      <y-col :span="12" class='y-login__forget'><a href="#">忘记密码</a></y-col>
    </y-row>
  </div>
</template>
<style lang="scss">
</style>
<script>
  import './login.scss'; 
  import yinput from '../../../widgets/input/src/input.vue'; 
  import ybtn from '../../../widgets/button/src/button.vue'; 
  import ycol from '../../../widgets/col/src/col.js'; 
  import yrow from '../../../widgets/row/src/row.js'; 
  import comm from '../../../commonjs/config.js'; 
  export default {
    name: 'y-login',
    data:function(){
      return {
         status:''
      }
    },
    components: {
      'y-input':yinput,
      'y-col':ycol,
      'y-row':yrow,
      'y-btn':ybtn,
    },
    methods: {
      blur(val) {
        
      }
    },
    props: {
      name: String,
      password:String
    }
  };
</script>