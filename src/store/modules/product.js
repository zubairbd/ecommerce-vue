
import axios from 'axios'

export const product = {
    state: {
        productData: [],
    },
    getters: {
        products(state){
            return state.productData;
        },
    },
    actions: {
        getProducts(data){
            axios.get("./get-products").then((response)=> {
                data.commit("products", response.data.data);
                setTimeout(() => {data.commit("loadingStatus", false) }, 500)

            }).catch((error)=> {
                console.log(error);
            })
        },

    },
    mutations: {
        products(state, data){
            return state.productData = data;
        },
    },

}