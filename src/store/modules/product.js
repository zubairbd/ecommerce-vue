
import axios from 'axios'

export const product = {
    state: {
        productData: [],
        product: {},
        cart: [],

    },
    getters: {
        products(state){
            return state.productData;
        },
        cartProducts(state){
            return state.cart.map(cartItem => {
                const product = state.productData.find(product => product.id === cartItem.id)
                return {
                    // title: product.product_name,
                    // images: product.feature_image,
                    // price: product.price,
                    product: product,
                    quantity: cartItem.quantity
                }
            })
        },
        cartTotalPrice(state, getters){
            // let total = 0
            // getters.cartProducts.forEach(product => {
            //     total+= product.price * product.quantity
            // })
            // return total

            return getters.cartProducts.reduce(function (total, product) {
                if(product.product.discount === null) return total + product.product.price * product.quantity;
                if(product.product.discount !== null) return total + product.product.discount * product.quantity;

            },0)
        },
        cartItemCount(state){
            return state.cart.length;
        },
        cartItem(state, gretters){
            return gretters.cartProducts.reduce((cartTotal, product) => cartTotal + product.quantity, 0);
        },



    },
    actions: {
        // Backend
        getProducts(data){
            axios.get("./admin/get-products").then((response)=> {
                data.commit("products", response.data.data);
                setTimeout(() => {data.commit("loadingStatus", false) }, 1000)

            }).catch((error)=> {
                console.log(error);
            })
        },

        // Frontend
        getProduct({commit}, productSlug){
            axios.get(`/view-product/${productSlug}`).then((response) => {
                commit('SET_PRODUCT', response.data.data);
            }).catch((error) =>{
                console.log(error)
            })
        },
        addProductToCart(context, product){
            if (product.product_quantity > 0){
                const cartItem = context.state.cart.find(item => item.id === product.id)
                // find item
                if (!cartItem){
                    context.commit('pushProductToCart', product.id)
                }else {
                    context.commit('incrementItemQuantity', cartItem)
                }
                context.commit('decrementProductInventory', product)
            }
        },
        removeCartProduct(context, id){
            context.commit('removeCartProduct', id)
        },
        addQty(context, id){
            context.commit('addQty', id)
        },
        reduceQty(context, id){
            context.commit('reduceQty', id)
        },

        getActiveProducts(data){
            axios.get("./get-active-products").then((response)=> {
                data.commit("products", response.data.data.data);
                setTimeout(() => {data.commit("loadingStatus", false) }, 1000)

            }).catch((error)=> {
                console.log(error);
            })
        },

        

    },
    mutations: {
        products(state, data){
            return state.productData = data;
        },
        SET_PRODUCT(state, product){
            state.product = product;
        },
        pushProductToCart(state, productId){
            state.cart.push({
                id: productId,
                quantity: 1
            })
        },
        incrementItemQuantity(state, cartItem){
            cartItem.quantity++
        },
        decrementProductInventory(state, product){
            product.quantity--
        },
        removeCartProduct(state, id){
            state.cart = state.cart.filter(product => product.id !== id)
            // state.orders = state.orders.id !== id
        },
        addQty(state, id){
            const currentItem = state.cart.find((product) => product.id === id);
            currentItem.quantity++;
        },
        reduceQty(state, id){
            const currentItem = state.cart.find((product) => product.id === id);
            if (currentItem.quantity > 1){
                currentItem.quantity--;
            }else {
                state.cart = state.cart.filter(product => product.id !== id)
            }
        },
        removeAllCart(state){
            state.cart = [];
        },

    },

}