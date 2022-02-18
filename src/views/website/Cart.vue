<template>
    <div>
         <!--Section Top--->
        <section class="feaure-section mb-4 pt-3">
        <div class="container">
            <div class="bg-white shadow-sm rounded p-4">
                <div class="row">
                    <div class="col-xxl-8 col-xl-10 mx-auto">
                        <div class="shadow-sm bg-white p-3 p-lg-4 rounded text-left">
                            <div class="mb-4">
                                <div class="row gutters-5 d-none d-lg-flex border-bottom mb-3 pb-3">
                                    <div class="col-md-5 fw-600">Product</div>
                                    <div class="col fw-600">Price</div>
                                    <div class="col fw-600">Quantity</div>
                                    <div class="col fw-600">Sub Total</div>
                                    <div class="col fw-600">Total</div>
                                    <div class="col-auto fw-600">Remove</div>
                                </div>
                                <div class="list-group list-group-flush">
                                    <div v-for="item in products" :key="item.id" class="row gutters-5 p-4 lists-group-item">
                                        <div class="col-lg-5 d-flex">
                                            <span class="mr-2 ml-0">
                                                <img :src="item.product.feature_image" class="img-fit size-60px rounded" :alt="item.product.product_name">
                                            </span>
                                            <span class="fs-14 opacity-60">{{item.product.product_name}}</span>
                                        </div>
                                        <div class="col-lg col-4 order-1 order-lg-0 my-3 my-lg-0">
                                            <span class="opacity-60 fs-12 d-block d-lg-none">Price</span>
                                            <span class="fw-600 fs-16">৳{{item.product.price}}.00</span>
                                        </div>
                                        <div class="col-lg col-6 order-2 order-lg-0 my-3 my-lg-0">
                                            <div class="row no-gutters align-items-center aiz-plus-minus mr-2 ml-0">
                                                <button class="btn col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="minus" data-field="quantity[426]" disabled="disabled">
                                                    <i class="fas fa-minus"></i>
                                                </button>
                                                <input type="number" name="quantity[426]" class="col border-0 text-center flex-grow-1 fs-16 input-number" :value="item.quantity" min="1" max="10" onchange="updateQuantity(426, this)">
                                                <button class="btn col-auto btn-icon btn-sm btn-circle btn-light" type="button" data-type="plus" @click="itemIncrement(item.product.id)">
                                                    <i class="fas fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-lg col-4 order-3 order-lg-0 my-3 my-lg-0">
                                            <span class="opacity-60 fs-12 d-block d-lg-none">Sub Total</span>
                                            <span class="fw-600 fs-16">৳{{item.product.price}}.00</span>
                                        </div>
                                        <div class="col-lg col-4 order-3 order-lg-0 my-3 my-lg-0">
                                            <span class="opacity-60 fs-12 d-block d-lg-none">Quantity</span>
                                            <span class="fw-600 fs-16">৳{{item.product.price * item.quantity}}.00</span>
                                        </div>
                                        <div class="col-lg-auto col-6 order-5 order-lg-0 text-right">
                                            <a href="javascript:void(0)" @click="removeFromCart(item.product.id)" class="btn btn-icon btn-sm btn-soft-primary btn-circle">
                                                <i class="fa fa-trash"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-3 py-2 mb-4 border-top d-flex justify-content-between">
                                    <span class="opacity-60 fs-15">Subtotal</span>
                                    <span class="fw-600 fs-17">৳{{cartTotalPrice}}.00</span>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 text-center text-md-left order-1 order-md-0">
                                        <router-link to="/" class="btn btn-link">
                                            <i class="fas fa-arrow-left"></i>
                                            Return to shop
                                        </router-link>
                                    </div>
                                    <div class="col-md-6 text-center text-md-right">
                                                                        <a href="https://bongobaba.com/checkout" class="btn btn-primary fw-600">
                                                Continue to Shipping
                                            </a>
                                                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
</template>

<script>
    import toastr from 'toastr'
    export default {
        name: "Cart",
        computed:{
            products(){
              return this.$store.getters.cartProducts
            },
            cartTotalPrice(){
              return this.$store.getters.cartTotalPrice
            },
            cartItemCount(){
              return this.$store.getters.cartItem;
            },
        },
        methods: {
            removeFromCart(id){
            this.$store.dispatch('removeCartProduct', id)
            toastr.success('Item has been removed from cart!')
            },
            itemIncrement(id){
                this.$store.dispatch('itemIncrementCart', id);
                toastr.success('Product added to cart!')
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>