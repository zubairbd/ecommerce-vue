
import axios from 'axios'

export const category = {
    state: {
        categoryData: [],
        subcategoryData: [],
    },
    getters: {
        categories(state){
            return state.categoryData;
        },
        subcategories(state){
            return state.subcategoryData;
        },
    },
    actions: {
        getCategories({ commit }){
            commit('loadingStatus', true)
            return axios.get("./get-categories")
                .then((response)=> {
                commit("categories", response.data.data);
                commit("loadingStatus", false);
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
                setTimeout(() => {data.commit("loadingStatus", false) }, 500)
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
    },
  
}