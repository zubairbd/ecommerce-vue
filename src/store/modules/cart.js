
export const cart = {
    state: {
        cart: []
    },
    getters: {

    },
    actions: {
        addProductToCart({commit}, {product, quantity}){
            commit('ADD_TO_CART', {product, quantity});

        },
    },
    mutations: {
        ADD_TO_CART(state, {product, quantity}){
            state.cart.push({
                product,
                quantity,
            })
        },
    },

}