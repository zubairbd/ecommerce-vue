<template>
    <div>
        <section class="mt-4">
            <div class="container">
                <div class="row gutters-10">
                <Sidebar />
                <div class="col-xl-9 order-0 order-xl-1 mb-5">
                    <div class="row">
                        <div v-for="product in products.data" :key="product.id" class="col-md-4">
                            
                            <div class="product-items kz-card-box border border-light rounded hov-shadow-md mb-2 has-transition bg-white">
                                <Loader v-if="loadingStatus" />
                                <!-- <span class="badge-custom">OFF<span class="box ml-1 mr-0">&nbsp;43%</span></span>
                                <span v-if="product.product_quantity > 0" class="badge-stock">IN<span class="box mr-1 ml-0">&nbsp;STOCK</span></span>
                                <span v-if="product.product_quantity < 1" class="badge-stock-out">STOCK<span class="box mr-1 ml-0">&nbsp;OUT</span></span> -->
                                <router-link :to="`/product/${product.product_slug}`" class="product-card-link">
                                    <div class="img-box bg-image hover-zoom hovereffect">
                                        <img class="img-fit mx-auto h-140px h-md-210px ls-is-cached lazyloaded kz-img-box" :src="product.feature_image" alt="">
                                    </div>
                                    <div class="p-md-3 p-2 text-left align-items-baseline">
                                        <div class="fs-15 px-2">
                                            <del v-if="product.discount !== null" class="fw-600 opacity-50 mr-2">৳ {{product.price}}.00</del>
                                            <span v-if="product.discount == null" class="fw-700 text-primary">৳ {{product.price}}.00</span>
                                            <span v-if="product.discount !== null" class="fw-700 text-primary">৳ {{product.discount}}.00</span>
                                        </div>
                                        <h3 class="fs-16 mt-2 px-2 text-truncate-2"> {{product.product_name}} - {{product.product_quantity}} </h3>
                                    </div>
                                </router-link>
                                <div class="absolute-top-right kz-p-hov-icon mt-1">
                                    <a href="#" data-title="Add to Favorite">
                                        <i class="far fa-heart"></i>
                                    </a>
                                    <button @click="addToCart(product)" data-title="Add to Cart">
                                        <i class="fa fa-shopping-cart fs-12"></i>
                                    </button>
                                </div>
                                <!-- <button @click="addToCart(product)" :disabled="product.product_quantity < 1" class="simple-btn mt-2">add to orders</button> -->
                            </div>
                        </div>
                        <div class="mt-4 float-right">
                          <Pagination :data="products" @pagination-change-page="getAllProducts" />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Pagination from 'laravel-vue-pagination';
    import Loader from "../../components/frontend/Loader";
    import toastr from 'toastr'
    import axios from "axios";
    import Sidebar from "../../components/frontend/Sidebar";
    export default {
        components: {Sidebar, Loader, Pagination },
        data() {
            return {
              products: {},
              loadingStatus: true
            }
        },
        mounted() {
            this.getAllProducts();
        },
        methods: {
            addToCart(product){
                this.$store.dispatch('addProductToCart', product);
                toastr.success('Product added to orders!')
            },
            getAllProducts(page = 1){
                axios.get('/get-all-products?page=' + page)
              .then((response) =>{
                this.products = response.data.data
                setTimeout(() => { this.loadingStatus = false }, 500)
                console.log(response.data.data)
              })
            }

        }
    }
</script>

<style lang="scss" scoped>
.spinner-bg{
  z-index: 9999;
  background-color: rgb(255, 255, 255, 1);
  width: 100%;
  height: 99%;
  position: absolute;
 
}
.spinner{
    position: relative;
    top: 50% !important;
    left: 43%;
    margin-left: -15px;
    margin-top: -15px;
} 
.spinner-border{
  position: absolute;
  
} 
</style>