import loginbox from './src/loginbox.vue';
// import vue from'vue';
/* istanbul ignore next */
loginbox.install = function(Vue) {
  Vue.component(loginbox.name, loginbox);
};

export default loginbox;