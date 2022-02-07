import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
import {auth} from './modules/auth'
import createPersistedState from "vuex-persistedstate"

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';

export default new Vuex.Store({
  
  state: {},
    getters: {},
    actions: {},
    mutations: {},
    modules: {
        auth
    },
    plugins: [createPersistedState({
        paths: ['auth']
    })],
})
