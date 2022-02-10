import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
import {auth} from './modules/auth'
import {category} from './modules/category'
import {product} from './modules/product'
// import createPersistedState from "vuex-persistedstate"

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';

export default new Vuex.Store({
  
  state: {
    sidebarClick: false,
  },
    getters: {
      isActive(state){
        return state.isActive;
      }
    },
    actions: {
    },
    mutations: {
      OPEN_MENU(state, active){
        state.isActive = active;
      }
    },
    modules: {
        auth,
      category,
      product,
    },
    // plugins: [createPersistedState({
    //     paths: ['auth'],
    //
    // })],
})
