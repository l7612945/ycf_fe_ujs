import sbox from './src/module/search/index.js';
import loginbox from './src/module/loginbox/index.js';


const components = {
	sbox,
	loginbox
};
const iview = {
   sbox:sbox,
   loginbox:loginbox
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