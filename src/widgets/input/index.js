import input from './src/input.vue';
// import vue from'vue';
/* istanbul ignore next */
input.install = function(Vue) {
  vue.component(input.name, input);
};

export default input;