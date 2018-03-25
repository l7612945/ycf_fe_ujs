
import vue from'vue';
import sbox from'./src/sbox.vue';

window.ve = new vue({
  el: '#app',
  //template: '<App/>',
  data:function(){
    return {
       value1:"文字1",
       value2:"文字2",
       placeholder: '请输入文字'
    }
  },
  components: { 
    'sbox':sbox
   },
  mounted:function(){
    
  }
})