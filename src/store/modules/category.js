
import axios from 'axios'

export const category = {
    state: {
        categoryData: [],
        subcategoryData: [],
        brandData: [],
    },
    getters: {
        categories(state){
            return state.categoryData;
        },
        subcategories(state){
            return state.subcategoryData;
        },
        brands(state){
            return state.brandData;
        },
    },
    actions: {
        getCategories(data){
            axios.get("./get-categories").then((response)=> {
                data.commit("categories", response.data.data);
                // console.log(response.data.data);
            }).catch((error)=> {
                console.log(error);
            })
        },
        getActiveCategories(data){
            axios.get("./get-active-categories").then((response)=> {
                data.commit("categories", response.data.data);
                // console.log(response.data.data);
            }).catch((error)=> {
                console.log(error);
            })
        },
        getSubCategories(data){
            axios.get("./get-subcategories").then((response)=> {
                data.commit("subcategories", response.data.data);
                // console.log(response.data);
            }).catch((error)=> {
                console.log(error);
            })
        },
        getBrands(data){
            axios.get("./get-brands").then((response)=> {
                data.commit("brands", response.data.data);
                // console.log(response.data);
            }).catch((error)=> {
                console.log(error);
            })
        },
    },
    mutations: {
        categories(state, data){
            return state.categoryData = data;
        },
        subcategories(state, data){
            return state.subcategoryData = data;
        },
        brands(state, data){
            return state.brandData = data;
        },
    },
  
}