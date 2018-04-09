
import vue from'vue';
import yButton from'./src/button.vue';


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
    yButton
   },
  mounted:function(){
    this.showApp = true;
    console.log('mounted');
  },
  methods: {
    handleClick(){
      console.log('click');
    },
    handleFocus(){
      console.log('focus');
    },
    handleBlur(){
      console.log('blur');
    }
  }
})