import col from './src/col.js';
// import vue from'vue';
/* istanbul ignore next */
col.install = function(Vue) {
  vue.component(col.name, col);
};

export default col;