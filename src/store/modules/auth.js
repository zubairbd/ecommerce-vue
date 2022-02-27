
import axios from 'axios'
import moment from 'moment'
import setAuthHeader from "../../utils/setAuthHeader";
export const auth = {
    state: {
        auth_status:false,
        auth_token: localStorage.getItem('SET_AUTH_TOKEN') || null,
        auth_info: JSON.parse(localStorage.getItem('SET_AUTH_INFO')) || null,
    },
    getters: {
        loggedIn(state){
            return state.auth_token !== null
        },
        GET_AUTH_STATUS(state){
            return state.auth_status;
        },
        GET_AUTH_TOKEN(state){
            return state.auth_token;
        },
        GET_AUTH_INFO(state){
            return state.auth_info;
        },
        expired: (state) => {
            const decoded = state.auth_token;
            return decoded && moment.unix(decoded.exp).isBefore(moment().format())
        }
    },
    actions: {

        register(context, formData){
            return new Promise((resolve,reject) => {
                axios.post('/register', {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    password_confirmation: formData.password_confirmation,
                }).then((res) => {
                    localStorage.setItem('SET_AUTH_TOKEN', res.data.data.access_token)
                    context.commit('SET_AUTH_TOKEN', res.data.data.access_token)
                    localStorage.setItem('SET_AUTH_INFO', JSON.stringify(res.data.data.user))
                    context.commit('SET_AUTH_INFO', res.data.data.user)
                    setAuthHeader(res.data.data.access_token)
                    resolve(res)
                }).catch(error => {
                    console.log(error)
                    reject(error)
                })
            })

        },

        LOGIN(context, credential){
            return new Promise((resolve,reject) => {
                axios.post('/login', {
                    email: credential.email,
                    password: credential.password,
                }).then((res) => {
                    localStorage.setItem('SET_AUTH_TOKEN', res.data.data.access_token)
                    context.commit('SET_AUTH_TOKEN', res.data.data.access_token)
                    localStorage.setItem('SET_AUTH_INFO', JSON.stringify(res.data.data.user))
                    context.commit('SET_AUTH_INFO', res.data.data.user)
                    resolve(res)
                }).catch(error => {
                    console.log(error)
                    reject(error)
                })
            })

        },
        Logout(context){
            axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.auth_token;

            return new Promise((resolve,reject) =>{
                axios.post('/logout')
                .then((res) =>{
                    console.log(res.data.data)
                    localStorage.removeItem('SET_AUTH_TOKEN')
                    localStorage.removeItem('SET_AUTH_INFO')
                    context.commit('SET_AUTH_LOGOUT')
                    resolve(res)
                }).catch((err) =>{
                    reject(err)
                    console.log(err.response.data.message);
                })
            })
        }
    },
    mutations: {
        SET_AUTH_TOKEN(state,token){
            state.auth_token = token;
            state.auth_status = true;
        },
        SET_AUTH_INFO(state, info){
            state.auth_info = info;
            // state.auth_info.email = info.email;
            // state.auth_info.phone = info.phone;
            // state.auth_info.images = info.images;
            // state.auth_info.id = info.id;
        },
        SET_AUTH_LOGOUT(state){
            state.auth_token = null;
            state.auth_status = false;
            state.auth_info = {
                name:null,
                email: null,
                phone: null,
                images: null,
                id: null,

            }
        }
    },
  
}