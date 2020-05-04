import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './app.vue'
import router from './router';

import './styles/main.css';

Vue.use(ElementUI);

// compiler
new Vue({
    render: h => h(App),
    // el: '#app',
    router,
    // store,
    // template: '<App/>',
    // components: { App }
  }).$mount("#app")