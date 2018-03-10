const $ = require('zepto'),
	vue = require('vue');
import components01 from '../components/components01.vue'
import components02 from '../components/components02.vue'


new vue({
  el: '#app',
  data:function(){
    return {
       testdata:"这是一个测试数据",
       radio: '1',
       showApp:false,
       info1:'这是组件01',
       info2:'这是组件01',
    }
  },
  components: { 
    'components01':components01,
    'components02':components02
   },
  mounted:function(){
  	this.showApp = true;
  }
})