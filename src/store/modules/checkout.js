// import axios from 'axios'
export const checkout = {
    state: {
        delivery: null,
        shipping: null,
    },
    getters: {
        deliveryCharge(state){
            return state.delivery;
        },
        addressId(state){
            return state.shipping
        }
    },
    actions: {
        deliveryCharge(context, shipping){
            if (shipping.district == 47){
                setTimeout(() => {context.commit("loadingStatus", true)}, )
                setTimeout(() => {
                    context.commit("loadingStatus", false),
                        context.commit('deliveryCharge', 50)
                }, 2000)

            }else if (shipping.district !== 47) {
                setTimeout(() => {context.commit("loadingStatus", true)}, )
                setTimeout(() => {
                    context.commit("loadingStatus", false),
                        context.commit('deliveryCharge', 100)
                }, 2000)

            }else {
                context.commit('deliveryCharge', 0)
            }
            context.commit('addressId', shipping.id)
        }
    },
    mutations: {
        deliveryCharge(state, id){
            state.delivery = id
        },
        addressId(state, id){
            state.shipping = id
        },
    },

}