import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filter from './filter'

import '@coreui/coreui'
import 'bootstrap'
import 'jquery'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import '../src/assets/scss/app.scss'

window.axios = require('axios');


import toastr from "toastr";
// window.toastr = toastr;
Vue.use(toastr);
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";


import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

Vue.component('pagination', require('laravel-vue-pagination'));
Vue.config.productionTip = false

new Vue({
  router,
  store,
  filter,
  Toast,
  render: h => h(App)
}).$mount('#app')
