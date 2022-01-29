
import axios from 'axios'

export const auth = {
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
                    resolve(res)
                }).catch((err) =>{
                    reject(err)
                    // console.log(err.response.data.errors);
                })
            })
        }
    },
    mutations: {
    },
  
}