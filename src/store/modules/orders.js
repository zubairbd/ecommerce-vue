import axios from 'axios'
export const orders = {
    state: {
        orders:{},
        orderitem:{}
    },
    getters: {
        getOrders(state){
            return state.orders;
        },
        orderItems(state){
            return state.orderitem;
        }

    },
    actions: {
        getOrdersUser(context){
            axios.get('/get-orders')
                .then((res) =>{
                    context.commit('orderData', res.data.data)
                    console.log(res.data.data)
                })
        },
        orderDetails(context, invoice_no){
            axios.get('/order-details/' + invoice_no)
                .then((res) =>{
                    context.commit('orderItems', res.data.data)
                })
        }

    },
    mutations: {
        orderData(state, getOrders){
            return state.orders = getOrders;
        },
        orderItems(state, orderItem){
            return state.orderitem = orderItem
        }

    },

}