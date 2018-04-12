import login from './src/login.vue';
// import vue from'vue';
/* istanbul ignore next */
login.install = function(Vue) {
  vue.component(login.name, login);
};

export default login;