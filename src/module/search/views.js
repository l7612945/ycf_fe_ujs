
import vue from'vue';
import sbox from'./src/sbox.vue';
console.log(sbox)


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
    'sbox':sbox
   },
  mounted:function(){
    this.showApp = true;
  }
})