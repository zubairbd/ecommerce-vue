<template>
    <div>
        <span class="badge-custom">OFF<span class="box ml-1 mr-0">&nbsp;43%</span></span>
        <span v-if="product.product_quantity > 0" class="badge-stock">IN<span class="box mr-1 ml-0">&nbsp;STOCK</span></span>
        <span v-if="product.product_quantity < 1" class="badge-stock-out">STOCK<span class="box mr-1 ml-0">&nbsp;OUT</span></span>
        <router-link :to="`/product/${product.product_slug}`" class="product-card-link">
            <div class="img-box bg-image hover-zoom hovereffect">
                <img class="img-responsive" :src="product.feature_image" alt="">
            </div>
            <div class="fs-15">
                <del class="fw-600 opacity-50 mr-1">৳ {{product.price}}.00</del>
                <span class="fw-700 text-primary">৳ {{product.discount}}.00</span>
            </div>
            <h3> {{product.product_name}} </h3>
        </router-link>
        
        <button @click="addToCart()" :disabled="product.product_quantity < 1" class="simple-btn mt-2">add to cart</button>
    </div>
</template>

<script>
    
    export default {
     props: ["product"]
    }
</script>

<style lang="scss" scoped>

</style>