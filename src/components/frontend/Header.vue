<template>
    <div>
        <div class="header-area">
            <div class="top-navbar border-bottom border-soft-secondary z-1035">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-7 col">
                            <p class="heading-top-text text-white"><span class="d-none d-lg-block"> Get Your Holiday Shopping On Wholesale Pricing </span></p>
                        </div>
                        <div class="col-5 text-right d-none d-lg-block">
                            <ul class="list-inline mb-0 h-100 d-flex justify-content-end align-items-center text-white">
                                <li class="list-inline-item mr-3 border-right border-left-0 pr-3 pl-0">
                                    <a href="tel:+8801922-228111" class="text-reset d-inline-block opacity-60 py-2">
                                        <i class="fas fa-phone mr-2"></i>
                                        <span>Help line</span>  
                                        <span>+8801922-228111</span>    
                                    </a>
                                </li>
                                <li class="list-inline-item mr-3 border-right border-left-0 pr-3 pl-0">
                                    <router-link :to="{name:'login'}" class="text-reset d-inline-block opacity-60 py-2">Login</router-link>
                                </li>
                                <li class="list-inline-item">
                                    <a href="https://bongobaba.com/users/registration" class="text-reset d-inline-block opacity-60 py-2">Registration</a>
                                 </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <header class="sticky-top z-1020 bg-white border-bottom shadow-sm">
               
                <div class="position-relative logo-bar-area z-1">
                    <div class="container">
                        <div class="d-flex align-items-center">
                            <div class="col-auto col-xl-3 pl-0 pr-3 d-flex align-items-center">
                                <router-link :to="{name:'index'}" class="d-block py-20px mr-3 ml-0">
                                    <img src="https://bongobaba.com/public/uploads/all/RvCilg09ouiFKHzJXY2Bm5wg0OCQ8P7tJpJ8avZI.gif" alt="BongoBaba.com" class="mw-100 h-30px h-md-40px" height="40" />
                                </router-link>
                            </div>
                        
                            <div class="flex-grow-1 front-header-search d-flex align-items-center bg-white">
                                <div class="position-relative flex-grow-1">
                                    <form action="https://bongobaba.com/search" method="GET" class="stop-propagation">
                                        <div class="d-flex position-relative align-items-center">
                                            <div class="d-lg-none" data-toggle="class-toggle" data-target=".front-header-search">
                                                <button class="btn px-2" type="button"><i class="la la-2x la-long-arrow-left"></i></button>
                                            </div>
                                            <div class="input-group">
                                                <input type="text" class="border-0 border-lg form-control" id="search" name="keyword" placeholder="I am shopping for..." autocomplete="off" />
                                                <div class="input-group-append d-none d-lg-block">
                                                    <button class="btn btn-primary" type="submit">
                                                        <i class="fas fa-search fs-18"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="typed-search-box stop-propagation document-click-d-none d-none bg-white rounded shadow-lg position-absolute left-0 top-100 w-100" style="min-height: 200px;">
                                        <div class="search-preloader absolute-top-center">
                                            <div class="dot-loader">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div class="search-nothing d-none p-3 text-center fs-16"></div>
                                        <div id="search-content" class="text-left"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="header-nav flex-grow-1 front-header-search d-flex align-items-center bg-white">
                                <div class="position-relative d-flex flex-grow-1 ml-3 justify-content-end align-items-center">
                                    <div class="dropdown">
                                        <a href="javascript:void(0)" class="d-flex align-items-center text-reset h-100" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span class="header-nav-link pointer cart-nav-link mr-2">
                                                <i class="fas fa-shopping-bag"></i>
                                                <span class="cart-qty">{{cartItemCount}}</span>
                                            </span>
                                        </a>

                                        <div v-if="!cartItemCount" class="dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 stop-propagation" style="inset: 18px auto auto 0px;">
                                        <div class="text-center p-3">
                                            <i class="far fa-frown fa-3x opacity-60 mb-3"></i>
                                            <h3 class="h6 fw-700">Your Cart is empty</h3>
                                        </div>
                                        </div>
                                        <div v-if="cartItemCount" class="dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 stop-propagation" style="inset: 18px auto auto 0px;">
                                            <div class="p-3 fs-15 fw-600 p-3 border-bottom">
                                                Cart Items
                                            </div>
                                            <ul class="h-250px overflow-auto c-scrollbar-light list-group list-group-flush">
                                                <li v-for="item in products" :key="item.id" class="list-group-item">
                                                    <span class="d-flex align-items-center">
                                                        <router-link :to="`/product/${item.product.product_slug}`" class="text-reset d-flex align-items-center flex-grow-1">
                                                            <img :src="item.product.feature_image" data-src="item.product.feature_image" class="size-60px rounded lazyloaded" alt="Denim Printed Jacket BV1">
                                                            <span class="minw-0 pl-2 flex-grow-1">
                                                                <span class="fw-500 fs-13 mb-1 text-truncate-2">
                                                                    {{item.product.product_name}}
                                                                </span>
                                                                <span class="fs-12">{{item.quantity}}x</span>
                                                                <span v-if="item.product.discount == null" class="fs-12">৳{{item.product.price}}.00</span>
                                                                <span v-if="item.product.discount !== null" class="fs-12">৳{{item.product.discount}}.00</span>
                                                            </span>
                                                        </router-link>
                                                        <span class="">
                                                            <button @click="removeFromCart(item.product.id)" class="btn btn-sm btn-icon stop-propagation">
                                                                <i class="fas fa-times"></i>
                                                            </button>
                                                        </span>
                                                    </span>
                                                </li>
                                            </ul>
                                            <div class="px-3 py-2 fs-15 border-top d-flex justify-content-between">
                                                <span class="opacity-60">Subtotal</span>
                                                <span class="fw-600">৳{{cartTotalPrice}}.00</span>
                                            </div>
                                            <div class="px-3 py-2 text-center border-top">
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item">
                                                        <router-link to="/cart" class="btn btn-soft-primary btn-sm">
                                                            View cart
                                                        </router-link>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <router-link v-show="ChekcoutShow" to="/checkout" class="btn btn-primary btn-sm">
                                                            Checkout
                                                        </router-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="">
                                        <span class="header-nav-link pointer cart-nav-link">
                                            <i class="fas fa-heart"></i>
                                            <span class="cart-qty">0</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
            
                            
                        </div>
                    </div>
                </div>
                <div class="bg-white border-top border-gray-200 py-1">
                    <div class="container">
                        <ul class="list-inline mb-0 pl-0 mobile-hor-swipe text-center">
                            <li class="list-inline-item mr-0">
                                <router-link :to="{name:'index'}" active-class="active" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                    Home
                                </router-link>
                            </li>
                            <li class="list-inline-item mr-0">
                                <a href="https://bongobaba.com/flash-deals" active-class="active" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                    Campaigns
                                </a>
                            </li>
                            <li class="list-inline-item mr-0">
                                <a href="https://bongobaba.com/blog" active-class="active" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                    Blogs
                                </a>
                            </li>
                            <li class="list-inline-item mr-0">
                                <a href="https://bongobaba.com/brands" active-class="active" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                    All Brands
                                </a>
                            </li>
                            <li class="list-inline-item mr-0">
                                 <router-link :to="{name:'categories'}" active-class="active" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                    All categories
                                </router-link>
                            </li>
                            <li class="list-inline-item mr-0">
                                <router-link :to="{name:'products'}" active-class="active" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                    All Products
                                </router-link>
                            </li>
                            <li class="list-inline-item mr-0">
                                <a href="https://bongobaba.com/track-your-order" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                    Track Order
                                </a>
                            </li>
                            <li class="list-inline-item mr-0">
                                <a href="https://bongobaba.com/how-to-buy" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                    How to buy
                                </a>
                            </li>
                            <li class="list-inline-item mr-0">
                                <a href="https://bongobaba.com/shops/create" class="opacity-60 fs-14 px-3 py-2 d-inline-block fw-600 hov-opacity-100 text-reset">
                                    APPLY SELLER
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            
        </div>
    

    </div>
</template>

<script>
    // import $ from 'jquery';
    export default {
        
        data() {
            return{
               ChekcoutShow: false
            }
        },
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
        mounted() {
            // this.$store.dispatch('getCartItems');
        },
        methods: {
          removeFromCart(id){
            this.$store.dispatch('removeCartProduct', id)
            
          }
        },
        created() {
            if (this.$store.getters.loggedIn) {
            this.ChekcoutShow = true;
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>