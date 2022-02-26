
import axios from 'axios'

export const brand = {
    state: {
        brandData: [],
    },
    getters: {
        brands(state){
            return state.brandData;
        },
    },
    actions: {
        getBrands(data){
            axios.get("./admin/get-brands").then((response)=> {
                data.commit("brands", response.data.data);
                setTimeout(() => {data.commit("loadingStatus", false) }, 500)
            }).catch((error)=> {
                console.log(error);
            })
        },
    },
    mutations: {
        brands(state, data){
            return state.brandData = data;
        },
    },

}