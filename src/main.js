import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filter from './filter'

// import "@/core/plugins/keenthemes";
// import "@/core/plugins/prismjs";
import 'bootstrap'

import './assets/js/scripts'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Global Javascript Bundle
// import './assets/plugins/global/plugins.bundle'
// import './assets/js/scripts.bundle'
// Page Vendors Javascript
// import './assets/plugins/custom/fullcalendar/fullcalendar.bundle'

// Page Custom Javascript
// import './assets/js/custom/widgets'
// import './assets/js/custom/apps/chat/chat'
// import './assets/js/custom/modals/create-app'
// import './assets/js/custom/modals/upgrade-plan'

import '../src/assets/scss/app.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  filter,
  render: h => h(App)
}).$mount('#app')
