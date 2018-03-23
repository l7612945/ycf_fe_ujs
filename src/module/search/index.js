import sbox from './src/sbox.vue';
// import vue from'vue';
/* istanbul ignore next */
sbox.install = function(Vue) {
  vue.component(sbox.name, sbox);
};

export default sbox;