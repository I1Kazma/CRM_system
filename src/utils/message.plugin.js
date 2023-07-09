/* eslint-disable no-param-reassign */
export default {
    install(Vue) {
      Vue.prototype.$message = (text) => {
        window.M.toast({ html: text });
      };
  
      Vue.prototype.$error = (text) => {
        window.M.toast({ html: `Error: ${text}` });
      };
    },
  };
  /* eslint-disable no-param-reassign */
