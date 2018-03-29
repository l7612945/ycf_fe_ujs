import row from './src/row.js';
// import vue from'vue';
/* istanbul ignore next */
row.install = function(Vue) {
  vue.component(row.name, row);
};

export default row;