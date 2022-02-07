import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "@/core/plugins/keenthemes";
import "@/core/plugins/prismjs";
import 'bootstrap'

// Global Javascript Bundle
// import './assets/plugins/global/plugins.bundle.js'
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
  render: h => h(App)
}).$mount('#app')
