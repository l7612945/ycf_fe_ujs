import t1 from './src/t1.vue';
// import vue from'vue';
/* istanbul ignore next */
t1.install = function(Vue) {
  vue.component(t1.name, t1);
};

export default t1;