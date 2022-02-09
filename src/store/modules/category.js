
import axios from 'axios'

export const category = {
    state: {
        categoryData: [],
    },
    getters: {
        categories(state){
            return state.categoryData;
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
    },
    mutations: {
        categories(state, data){
            return state.categoryData = data;
        },
    },
  
}