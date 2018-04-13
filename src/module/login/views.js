
import vue from'vue';
import login from'./src/login.vue';

window.ve = new vue({
  el: '#app',
  //template: '<App/>',
  data:function(){
    return {
        name: '',
        password:'',
        placeholder: '请输入文字'
    }
  },
  components: { 
    'y-login':login
   },
  mounted:function(){
  }
})