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
window.toastr = toastr;

import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  filter,
  render: h => h(App)
}).$mount('#app')
