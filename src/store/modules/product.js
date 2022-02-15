
import axios from 'axios'

export const product = {
    state: {
        productData: [],
        product: {},

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
                setTimeout(() => {data.commit("loadingStatus", false) }, 1000)

            }).catch((error)=> {
                console.log(error);
            })
        },
        getProduct({commit}, productSlug){
            axios.get(`/view-product/${productSlug}`).then((response) => {
                commit('SET_PRODUCT', response.data.data);
            }).catch((error) =>{
                console.log(error)
            })
        },

    },
    mutations: {
        products(state, data){
            return state.productData = data;
        },
        SET_PRODUCT(state, product){
            state.product = product;
        }
    },

}