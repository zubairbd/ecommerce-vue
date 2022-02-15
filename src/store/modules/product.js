
import axios from 'axios'

export const product = {
    state: {
        productData: [],
        product: null,

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
        viewProducts(){
            axios.get('/view-product/'  + this.$route.params.product_slug).then((response) => {
                this.form = response.data.data
            }).catch((error) =>{
                console.log(error)
            })
        },

    },
    mutations: {
        products(state, data){
            return state.productData = data;
        },
    },

}