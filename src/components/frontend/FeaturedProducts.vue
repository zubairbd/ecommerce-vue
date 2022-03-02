<template>
  <div>
    <section class="feaure-section mb-4">
      <div class="container">
        <div class="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">

          <div class="d-flex mb-3 align-items-baseline border-bottom">
            <h3 class="h5 fw-700 mb-0">
              <span class="border-bottom border-primary border-width-2 pb-3 d-inline-block">Featured Products</span>
            </h3>
            <a href="javascript:void(0)" class="ml-auto mr-0 btn btn-primary btn-sm shadow-md">Top 20</a>
          </div>
          <div v-if="products.length > 0" class="product-carousel gutters-10 half-outside-arrow slick-initialized slick-slider">

            <carousel :autoplay="true" :nav="false" :items="5" :dots="false" >

              <div v-for="product in products" :key="product.id" class="product-item mt-4">
                <Loader v-if="loadingStatus" />
                <span class="badge-custom">OFF<span class="box ml-1 mr-0">&nbsp;43%</span></span>
                <span v-if="product.product_quantity > 0" class="badge-stock">IN<span class="box mr-1 ml-0">&nbsp;STOCK</span></span>
                <span v-if="product.product_quantity < 1" class="badge-stock-out">STOCK<span class="box mr-1 ml-0">&nbsp;OUT</span></span>
                <router-link :to="`/product/${product.product_slug}`" class="product-card-link">
                  <div class="img-box bg-image hover-zoom hovereffect">
                    <img class="img-responsive" :src="product.feature_image" alt="">
                  </div>
                  <div class="fs-15">
                    <del v-if="product.discount !== null" class="fw-600 opacity-50 mr-1">৳ {{product.price}}.00</del>
                    <span v-if="product.discount == null" class="fw-700 text-primary">৳ {{product.price}}.00</span>
                    <span v-if="product.discount !== null" class="fw-700 text-primary">৳ {{product.discount}}.00</span>
                  </div>
                  <h3> {{product.product_name}} - {{product.product_quantity}} </h3>
                </router-link>

                <button @click="addToCart(product)" :disabled="product.product_quantity < 1" class="simple-btn mt-2">add to orders</button>
              </div>
            </carousel>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import toastr from 'toastr';
import Loader from "../../components/frontend/Loader";
import carousel from 'vue-owl-carousel';
export default {
  name: "FeaturedProducts",
  components:{ carousel, Loader},
  data(){
    return {

    }
  },
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.state.loadingStatus = true;
  },
  computed: {
    products(){
      return this.$store.getters.products;
    },
    loadingStatus(){
      return this.$store.getters.loadingStatus
    },

  },
  methods: {
    addToCart(product){
      this.$store.dispatch('addProductToCart', product);
      toastr.options = {
        "debug": false,
        "positionClass": "toast-top-center",
        "onclick": null,
        "fadeIn": 300,
        "fadeOut": 1000,
        "timeOut": 5000,
        "extendedTimeOut": 1000
      }
      toastr.success('Product added to orders!')
    },

  }
}
</script>

<style scoped>

</style>