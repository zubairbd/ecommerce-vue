import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';

export default new Vuex.Store({
  
  state: {
        auth_status:false,
        auth_token: null,
        auth_info:{
            name:null,
            email: null,
        }
    },
    getters: {
        GET_AUTH_STATUS(state){
            return state.auth_status;
        },
        GET_AUTH_TOKEN(state){
            return state.auth_token;
        },
        GET_AUTH_INFO(state){
            return state.auth_info;
        },
    },
    actions: {
        LOGIN(context, loginData){
           return new Promise((resolve,reject) =>{
                axios.post('/login', loginData)
                .then((res) =>{
                    // console.log(res.data)
                    context.commit('GET_AUTH_TOKEN',res.data.access_token)
                    resolve(res)
                }).catch((err) =>{
                    reject(err)
                    // console.log(err.response.data.errors);
                })
            })
        }
    },
    mutations: {
      GET_AUTH_TOKEN(state, payLoad){
        state.auth_token = payLoad;
      }
    },
  modules: {
  }
})
