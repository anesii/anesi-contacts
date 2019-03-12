import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes';
import VModal from 'vue-js-modal';
import 'vue-tel-input/dist/vue-tel-input.css';
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' ;// Ensure you are using css-loader
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import {store} from './store.js';
import VueTelInput from 'vue-tel-input';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VModal);
Vue.use(VueTelInput);
Vue.use(Vuetify);

const router = new VueRouter({
   routes: Routes,
   mode:'history'
});

new Vue({
  render: h => h(App),
  router: router,
  store: store,
}).$mount('#app');
