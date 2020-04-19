import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './app.vue'

import './styles/main.css';

Vue.use(ElementUI);

// compiler
new Vue({
    // el: '#app',
    // router,
    // store,
    // template: '<App/>',
    // components: { App }
    render: h => h(App)
  }).$mount("#app")