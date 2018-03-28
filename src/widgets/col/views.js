
import vue from'vue';
import col from'./src/col.js';
import row from'../row/src/row.js';


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
    'y-col':col,
    'y-row':row
   },
  mounted:function(){
    this.showApp = true;
  }
})