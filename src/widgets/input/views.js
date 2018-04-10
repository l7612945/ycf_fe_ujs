import vue from'vue';
import yinput from'./src/input.vue';
import config from '../../commonjs/config.js';


window.ve = new vue({
  el: '#app',
  //template: '<App/>',
  data:function(){
    return {
       value1:"",
       placeholder:'请输入文字'
    }
  },
  components: { 
    'y-input':yinput
   },
  mounted:function(){
    this.showApp = true;
  }
})