import vue from'vue';
import loginbox from'./src/loginbox.vue';
console.log("loginbox"+loginbox)

window.vue = new vue({
  el: '#app',
  //template: '<App/>',
  data:function(){
    return {
       value1:"hchchc",
       radio: '1',
       showApp:false
    }
  },
  components: { 
    'loginbox':loginbox
   },
  mounted:function(){
    this.showApp = true;
  }
})