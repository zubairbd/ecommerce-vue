import axios from 'axios'
export const orders = {
    state: {
        orders:{}
    },
    getters: {
        getOrders(state){
            return state.orders;
        }

    },
    actions: {
        getOrdersUser(context){
            axios.get('/get-orders')
                .then((res) =>{
                    context.commit('orderData', res.data.data)
                    console.log(res.data.data)
                })
        }

    },
    mutations: {
        orderData(state, getOrders){
            return state.orders = getOrders;
        }

    },

}