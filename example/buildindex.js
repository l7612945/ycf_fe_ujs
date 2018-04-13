//添加需要编译的模块
import ylogin from '../src/module/login/index.js';



//配置
const components = {
	ylogin
};
const iview = {
   "y-login":ylogin
};
const install = function(Vue, opts = {}) {
    if (install.installed) return;
    // locale.use(opts.locale);
    // locale.i18n(opts.i18n);

    Object.keys(iview).forEach(key => {
        Vue.component(key, iview[key]);
    });

};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
	install,
    components
};


export default API;