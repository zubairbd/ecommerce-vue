import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filter from './filter'
import VueAxios from 'vue-axios'
import axios from 'axios'
import '@coreui/coreui'
import 'bootstrap'
import jQuery from 'jquery';

global.jQuery=jQuery
global.$=jQuery

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import '../src/assets/scss/app.scss'

Vue.use(VueAxios, axios);

// Toastr
import toastr from "toastr";
// window.toastr = toastr;
Vue.use(toastr);
import Toast from "vue-toastification";


//Sweetalert2
import "vue-toastification/dist/index.css";
import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

// CKEditor
import CKEditor from 'ckeditor4-vue';
Vue.use( CKEditor );

// VModal
import VModal from 'vue-js-modal'
Vue.use(VModal)


// Pagination
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.config.productionTip = false

new Vue({
  router,
  store,
  filter,
  Toast,
  toastr,
  render: h => h(App)
}).$mount('#app')
