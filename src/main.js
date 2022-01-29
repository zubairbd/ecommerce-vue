import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'bootstrap'
import 'admin-lte'

import '../src/assets/scss/app.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
