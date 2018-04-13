
import vue from'vue';
import row from'./src/row.js';

window.ve = new vue({
  el: '#app',
  //template: '<App/>',
  data:function(){
    return {
       value1:"",
    }
  },
  components: { 
    'y-row':row
   },
  mounted:function(){
    this.showApp = true;
  }
})