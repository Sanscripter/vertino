import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueMaterial from 'vue-material';
import * as VueFire from 'vuefire';
import 'vue-material/dist/vue-material.min.css';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';


Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(VueFire.firestorePlugin);
Vue.use(VueMaterial);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
