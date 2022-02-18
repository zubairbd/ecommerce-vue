import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
import {auth} from './modules/auth'
import {category} from './modules/category'
import {product} from './modules/product'
import {brand} from "./modules/brand";
import {cart} from "./modules/cart";
import createPersistedState from "vuex-persistedstate"

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';

export default new Vuex.Store({
  
  state: {
    loadingStatus: false
  },
    getters: {
      loadingStatus(state){
        return state.loadingStatus
      },
    },
    actions: {

    },
    mutations: {
      loadingStatus(state, newloadingStatus){
        state.loadingStatus = newloadingStatus
      }
    },
    modules: {
        auth,
      category,
      product,
      brand,
      cart,
    },
    plugins: [createPersistedState({
        paths: ['product'],

    })],
})
