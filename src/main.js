import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import VModal from 'vue-js-modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import {store} from './store.js'
import VueTelInput from 'vue-tel-input'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VModal);
Vue.use(VueTelInput);

const router = new VueRouter({
   routes: Routes,
   mode:'history'
});

new Vue({
  render: h => h(App),
  router: router,
  store: store,
}).$mount('#app')
