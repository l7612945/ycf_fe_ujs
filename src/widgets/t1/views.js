
import vue from'vue';
import mybotton from'./src/t1.vue';
console.log(mybotton)


window.ve = new vue({
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
    'mybotton':mybotton
   },
  mounted:function(){
    this.showApp = true;
  }
})