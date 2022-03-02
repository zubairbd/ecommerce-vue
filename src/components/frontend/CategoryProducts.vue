<template>
  <div>
    <section class="feaure-section mb-4">
      <div class="container">
        <div class="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
          <div class="d-flex mb-3 align-items-baseline border-bottom">
            <h3 class="h5 fw-700 mb-0">
              <span class="border-bottom border-primary border-width-2 pb-3 d-inline-block">Featured Products</span>
            </h3>

          </div>
          <div class="product-carousel gutters-10 half-outside-arrow slick-initialized slick-slider">
            <carousel :autoplay="true" :nav="false" :items="5" :dots="false">
              <div class="product-item">
                <a class="product-card-link" href="#">
                  <div class="img-box bg-image hover-zoom hovereffect">
                    <img class="img-responsive" src="../../assets/frontend/images/product/p-1.jpg" alt="">
                  </div>
                  <div class="fs-15">
                    <del class="fw-600 opacity-50 mr-1">৳550.00</del>
                    <span class="fw-700 text-primary">৳315.00</span>
                  </div>
                  <h3> Stylish Modern Analogue ladies Watch JW10 </h3>
                </a>
                <div class="absolute-top-right kz-p-hov-icon">
                  <a href="#" data-title="Add to Favorite">
                    <i class="far fa-heart"></i>
                  </a>
                  <a href="#" data-title="Add to Cart">
                    <i class="fas fa-cart-plus"></i>
                  </a>
                </div>
                <button class="simple-btn mt-2">add to orders</button>
              </div>
              <div class="product-item">
                <a class="product-card-link" href="#">
                  <div class="img-box bg-image hover-zoom hovereffect">
                    <img class="img-responsive" src="../../assets/frontend/images/product/p-2.jpg" alt="">
                  </div>
                  <div class="fs-15">
                    <del class="fw-600 opacity-50 mr-1">৳550.00</del>
                    <span class="fw-700 text-primary">৳315.00</span>
                  </div>
                  <h3> Stylish Modern Analogue ladies Watch JW10 </h3>
                </a>
                <button class="simple-btn mt-2">add to orders</button>
              </div>
              <div class="product-item">
                <a class="product-card-link" href="#">
                  <div class="img-box bg-image hover-zoom hovereffect">
                    <img class="img-responsive" src="../../assets/frontend/images/product/p-3.jpg" alt="">
                  </div>
                  <div class="fs-15">
                    <del class="fw-600 opacity-50 mr-1">৳550.00</del>
                    <span class="fw-700 text-primary">৳315.00</span>
                  </div>
                  <h3> Stylish Modern Analogue ladies Watch JW10 </h3>
                </a>
                <div class="absolute-top-right kz-p-hov-icon">
                  <a href="#" data-title="Add to Favorite">
                    <i class="far fa-heart"></i>
                  </a>
                  <a href="#" data-title="Add to Cart">
                    <i class="fas fa-cart-plus"></i>
                  </a>
                </div>
                <button class="simple-btn mt-2">add to orders</button>
              </div>
              <div class="product-item">
                <a class="product-card-link" href="#">
                  <div class="img-box bg-image hover-zoom hovereffect">
                    <img class="img-responsive" src="../../assets/frontend/images/product/p-4.jpg" alt="">
                  </div>
                  <div class="fs-15">
                    <del class="fw-600 opacity-50 mr-1">৳550.00</del>
                    <span class="fw-700 text-primary">৳315.00</span>
                  </div>
                  <h3> Stylish Modern Analogue ladies Watch JW10 </h3>
                </a>
                <div class="absolute-top-right kz-p-hov-icon">
                  <a href="#" data-title="Add to Favorite">
                    <i class="far fa-heart"></i>
                  </a>
                  <a href="#" data-title="Add to Cart">
                    <i class="fas fa-cart-plus"></i>
                  </a>
                </div>
                <button class="simple-btn mt-2">add to orders</button>
              </div>
              <div class="product-item">
                <a class="product-card-link" href="#">
                  <div class="img-box bg-image hover-zoom hovereffect">
                    <img class="img-responsive" src="../../assets/frontend/images/product/p-1.jpg" alt="">
                  </div>
                  <div class="fs-15">
                    <del class="fw-600 opacity-50 mr-1">৳550.00</del>
                    <span class="fw-700 text-primary">৳315.00</span>
                  </div>
                  <h3> Stylish Modern Analogue ladies Watch JW10 </h3>
                </a>
                <div class="absolute-top-right kz-p-hov-icon">
                  <a href="#" data-title="Add to Favorite">
                    <i class="far fa-heart"></i>
                  </a>
                  <a href="#" data-title="Add to Cart">
                    <i class="fas fa-cart-plus"></i>
                  </a>
                </div>
                <button class="simple-btn mt-2">add to orders</button>
              </div>
              <div class="product-item">
                <a class="product-card-link" href="#">
                  <div class="img-box bg-image hover-zoom hovereffect">
                    <img class="img-responsive" src="../../assets/frontend/images/product/p-2.jpg" alt="">
                  </div>
                  <div class="fs-15">
                    <del class="fw-600 opacity-50 mr-1">৳550.00</del>
                    <span class="fw-700 text-primary">৳315.00</span>
                  </div>
                  <h3> Stylish Modern Analogue ladies Watch JW10 </h3>
                </a>
                <div class="absolute-top-right kz-p-hov-icon">
                  <a href="#" data-title="Add to Favorite">
                    <i class="far fa-heart"></i>
                  </a>
                  <a href="#" data-title="Add to Cart">
                    <i class="fas fa-cart-plus"></i>
                  </a>
                </div>
                <button class="simple-btn mt-2">add to orders</button>
              </div>
              <div class="product-item">
                <a class="product-card-link" href="#">
                  <div class="img-box bg-image hover-zoom hovereffect">
                    <img class="img-responsive" src="../../assets/frontend/images/product/p-3.jpg" alt="">
                  </div>
                  <div class="fs-15">
                    <del class="fw-600 opacity-50 mr-1">৳550.00</del>
                    <span class="fw-700 text-primary">৳315.00</span>
                  </div>
                  <h3> Stylish Modern Analogue ladies Watch JW10 </h3>
                </a>
                <div class="absolute-top-right kz-p-hov-icon">
                  <a href="#" data-title="Add to Favorite">
                    <i class="far fa-heart"></i>
                  </a>
                  <a href="#" data-title="Add to Cart">
                    <i class="fas fa-cart-plus"></i>
                  </a>
                </div>
                <button class="simple-btn mt-2">add to orders</button>
              </div>
              <div class="product-item">
                <a class="product-card-link" href="#">
                  <div class="img-box bg-image hover-zoom hovereffect">
                    <img class="img-responsive" src="../../assets/frontend/images/product/p-4.jpg" alt="">
                  </div>
                  <div class="fs-15">
                    <del class="fw-600 opacity-50 mr-1">৳550.00</del>
                    <span class="fw-700 text-primary">৳315.00</span>
                  </div>
                  <h3> Stylish Modern Analogue ladies Watch JW10 </h3>
                </a>
                <div class="absolute-top-right kz-p-hov-icon">
                  <a href="#" data-title="Add to Favorite">
                    <i class="far fa-heart"></i>
                  </a>
                  <a href="#" data-title="Add to Cart">
                    <i class="fas fa-cart-plus"></i>
                  </a>
                </div>
                <button class="simple-btn mt-2">add to orders</button>
              </div>
            </carousel>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CategoryProducts"
}
</script>

<style scoped>

</style>