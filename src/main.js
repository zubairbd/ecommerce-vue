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

import Swal from 'sweetalert2'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  filter,
  render: h => h(App)
}).$mount('#app')
