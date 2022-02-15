import axios from 'axios'
export const cart = {
    state: {
        cart: []
    },
    getters: {
        cartItemCount(state){
            return state.cart.length;
        },
        cartTotalPrice(state){
            let total = 0;
            state.cart.forEach(item => {
                total += item.product.price * item.quantity;
            })
            return total;
        }
    },
    actions: {
        addProductToCart({commit}, {product, quantity}){
            commit('ADD_TO_CART', {product, quantity});

            axios.post('/cart', {
                product_id: product.id,
                quantity
            });
        },
        getCartItems({commit}){
            axios.post('/cart')
            .then((response) =>{
                commit('SET_CART', response.data);
            })
                        
        },
    },
    mutations: {
        ADD_TO_CART(state, {product, quantity}){
            let productInCart = state.cart.find(item =>{
                return item.product.id === product.id
            });
            if(productInCart){
                productInCart.quantity += quantity;
                return;
            }
            state.cart.push({
                product,
                quantity,
            })
        },
        SET_CART(state, cartItems){
            state.cart = cartItems;
        }
    },

}