
import vue from'vue';
import row from'./src/row.js';

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
    'y-row':row
   },
  mounted:function(){
    this.showApp = true;
  }
})