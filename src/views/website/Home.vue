<template>
  <div>
    <div class="home-banner-area mb-4 pt-3">
        <div class="container">
            <div class="row gutters-10 position-relative">
                <div class="col-lg-3 position-static d-none d-lg-block">
                    <div class="category-menu bg-white rounded  shadow-sm">
                        <div class="p-3 bg-soft-primary d-none d-lg-block rounded-top all-category position-relative text-left">
                            <span class="fw-600 fs-16 mr-3">Categories</span>
                            <a href="https://bongobaba.com/categories" class="text-reset">
                                <span class="d-none d-lg-inline-block">See All &gt;</span>
                            </a>
                        </div>
                        <ul class="list-unstyled categories no-scrollbar py-2 mb-0 text-left">
                            <li v-for="(category, ind) in categories" :key="ind"  class="category-nav-element">
                              <router-link :to="`/category/${category.category_slug}`" class="text-truncate text-reset py-2 px-3 d-block">
                              <i class="fas fa-copyright mr-2"></i><span class="cat-name">{{category.category_name}}</span>
                              </router-link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class=" col-lg-9">
                    <div class="banner-carousel">
                        <carousel :autoplay="true" :nav="false" :items="1">
                            <div class="banner-item">
                                <img src="../../assets/frontend/images/01.jpg" alt="screenshot">
                            </div>
                            <div class="banner-item">
                                <img src="../../assets/frontend/images/02.jpg" alt="screenshot">
                            </div>
                            <div class="banner-item">
                                <img src="../../assets/frontend/images/03.jpg" alt="screenshot">
                            </div>
                            <div class="banner-item">
                                <img src="../../assets/frontend/images/04.jpg" alt="screenshot">
                            </div>
                            <div class="banner-item">
                                <img src="../../assets/frontend/images/05.png" alt="screenshot">
                            </div>
                        </carousel>
                        <!-- <carousel>

                            <img src="https://placeimg.com/200/200/any?1">

                            <img src="https://placeimg.com/200/200/any?2">

                            <img src="https://placeimg.com/200/200/any?3">

                            <img src="https://placeimg.com/200/200/any?4">

                        </carousel> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Ads Area -->
    <div class="ads-area mb-4">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="ads-item">
                        <img src="../../assets/frontend/images/ads/ads-1.png" alt="">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="ads-item">
                        <img src="../../assets/frontend/images/ads/ads-2.png" alt="">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="ads-item">
                        <img src="../../assets/frontend/images/ads/ads-3.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--Category Section-->
    <section class="feaure-section mb-4">
        <div class="container">
            <div class="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                <div class="d-flex mb-3 align-items-baseline border-bottom">
                    <h3 class="h5 fw-700 mb-0">
                        <span class="border-bottom border-primary border-width-2 pb-3 d-inline-block text-capitalize">Shop by categories</span>
                    </h3>
                </div>
                <div class="gutters-10 half-outside-arrow slick-initialized slick-slider">
                    <div class="row">
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6 pr-sm-2 pl-sm-2 pr-1 pl-0">
                            <div class="shadow-lg text-center" style="background: rgb(255, 255, 255) none repeat scroll 0% 0%; padding: 10px; margin: 10px 0px;">
                                <a href="#">
                                    <div style="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0">
                                        <img class="img-responsive" src="../../assets/frontend/images/category/cat-1.png" alt="">
                                    </div>
                                    <h3 style="text-align:center;font-size:14px;font-weight:500;padding-top:10px;margin:0px"> Electronic Devices</h3>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6 pr-sm-2 pl-sm-2 pr-1 pl-0">
                            <div class="shadow-lg text-center" style="background: rgb(255, 255, 255) none repeat scroll 0% 0%; padding: 10px; margin: 10px 0px;">
                                <a href="#">
                                    <div style="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0">
                                        <img class="img-responsive" src="../../assets/frontend/images/category/cat-2.webp" alt="">
                                    </div>
                                    <h3 style="text-align:center;font-size:14px;font-weight:500;padding-top:10px;margin:0px"> Electronic Devices</h3>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6 pr-sm-2 pl-sm-2 pr-1 pl-0">
                            <div class="shadow-lg text-center" style="background: rgb(255, 255, 255) none repeat scroll 0% 0%; padding: 10px; margin: 10px 0px;">
                                <a href="#">
                                    <div style="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0">
                                        <img class="img-responsive" src="../../assets/frontend/images/category/cat-3.png" alt="">
                                    </div>
                                    <h3 style="text-align:center;font-size:14px;font-weight:500;padding-top:10px;margin:0px"> Electronic Devices</h3>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6 pr-sm-2 pl-sm-2 pr-1 pl-0">
                            <div class="shadow-lg text-center" style="background: rgb(255, 255, 255) none repeat scroll 0% 0%; padding: 10px; margin: 10px 0px;">
                                <a href="#">
                                    <div style="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0">
                                        <img class="img-responsive" src="../../assets/frontend/images/category/cat-4.png" alt="">
                                    </div>
                                    <h3 style="text-align:center;font-size:14px;font-weight:500;padding-top:10px;margin:0px"> Electronic Devices</h3>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6 pr-sm-2 pl-sm-2 pr-1 pl-0">
                            <div class="shadow-lg text-center" style="background: rgb(255, 255, 255) none repeat scroll 0% 0%; padding: 10px; margin: 10px 0px;">
                                <a href="#">
                                    <div style="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0">
                                        <img class="img-responsive" src="../../assets/frontend/images/category/cat-5.png" alt="">
                                    </div>
                                    <h3 style="text-align:center;font-size:14px;font-weight:500;padding-top:10px;margin:0px"> Electronic Devices</h3>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6 pr-sm-2 pl-sm-2 pr-1 pl-0">
                            <div class="shadow-lg text-center" style="background: rgb(255, 255, 255) none repeat scroll 0% 0%; padding: 10px; margin: 10px 0px;">
                                <a href="#">
                                    <div style="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0">
                                        <img class="img-responsive" src="../../assets/frontend/images/category/cat-6.png" alt="">
                                    </div>
                                    <h3 style="text-align:center;font-size:14px;font-weight:500;padding-top:10px;margin:0px"> Electronic Devices</h3>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6 pr-sm-2 pl-sm-2 pr-1 pl-0">
                            <div class="shadow-lg text-center" style="background: rgb(255, 255, 255) none repeat scroll 0% 0%; padding: 10px; margin: 10px 0px;">
                                <a href="#">
                                    <div style="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0">
                                        <img class="img-responsive" src="../../assets/frontend/images/category/cat-7.png" alt="">
                                    </div>
                                    <h3 style="text-align:center;font-size:14px;font-weight:500;padding-top:10px;margin:0px"> Electronic Devices</h3>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6 pr-sm-2 pl-sm-2 pr-1 pl-0">
                            <div class="shadow-lg text-center" style="background: rgb(255, 255, 255) none repeat scroll 0% 0%; padding: 10px; margin: 10px 0px;">
                                <a href="#">
                                    <div style="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0">
                                        <img class="img-responsive" src="../../assets/frontend/images/category/cat-8.png" alt="">
                                    </div>
                                    <h3 style="text-align:center;font-size:14px;font-weight:500;padding-top:10px;margin:0px"> Electronic Devices</h3>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6 pr-sm-2 pl-sm-2 pr-1 pl-0">
                            <div class="shadow-lg text-center" style="background: rgb(255, 255, 255) none repeat scroll 0% 0%; padding: 10px; margin: 10px 0px;">
                                <a href="#">
                                    <div style="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0">
                                        <img class="img-responsive" src="../../assets/frontend/images/category/cat-9.webp" alt="">
                                    </div>
                                    <h3 style="text-align:center;font-size:14px;font-weight:500;padding-top:10px;margin:0px"> Electronic Devices</h3>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6 pr-sm-2 pl-sm-2 pr-1 pl-0">
                            <div class="shadow-lg text-center" style="background: rgb(255, 255, 255) none repeat scroll 0% 0%; padding: 10px; margin: 10px 0px;">
                                <a href="#">
                                    <div style="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0">
                                        <img class="img-responsive" src="../../assets/frontend/images/category/cat-10.webp" alt="">
                                    </div>
                                    <h3 style="text-align:center;font-size:14px;font-weight:500;padding-top:10px;margin:0px"> Electronic Devices</h3>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6 pr-sm-2 pl-sm-2 pr-1 pl-0">
                            <div class="shadow-lg text-center" style="background: rgb(255, 255, 255) none repeat scroll 0% 0%; padding: 10px; margin: 10px 0px;">
                                <a href="#">
                                    <div style="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0">
                                        <img class="img-responsive" src="../../assets/frontend/images/category/cat-11.webp" alt="">
                                    </div>
                                    <h3 style="text-align:center;font-size:14px;font-weight:500;padding-top:10px;margin:0px"> Electronic Devices</h3>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6 pr-sm-2 pl-sm-2 pr-1 pl-0">
                            <div class="shadow-lg text-center" style="background: rgb(255, 255, 255) none repeat scroll 0% 0%; padding: 10px; margin: 10px 0px;">
                                <a href="#">
                                    <div style="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0">
                                        <img class="img-responsive" src="../../assets/frontend/images/category/cat-12.webp" alt="">
                                    </div>
                                    <h3 style="text-align:center;font-size:14px;font-weight:500;padding-top:10px;margin:0px"> Electronic Devices</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Feature Section One--->
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
                            <button class="simple-btn mt-2">add to cart</button>
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
                            <button class="simple-btn mt-2">add to cart</button>
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
                            <button class="simple-btn mt-2">add to cart</button>
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
                            <button class="simple-btn mt-2">add to cart</button>
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
                            <button class="simple-btn mt-2">add to cart</button>
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
                            <button class="simple-btn mt-2">add to cart</button>
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
                            <button class="simple-btn mt-2">add to cart</button>
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
                            <button class="simple-btn mt-2">add to cart</button>
                        </div>
                    </carousel>
                </div>
            </div>
        </div>
    </section>
    <!--Feature Section Two--->
    <section class="feaure-section mb-4">
        <div class="container">
            <div class="px-2 py-4 px-md-4 py-md-3 bg-white shadow-sm rounded">
                <div class="d-flex mb-3 align-items-baseline border-bottom">
                    <h3 class="h5 fw-700 mb-0">
                        <span class="border-bottom border-primary border-width-2 pb-3 d-inline-block">Man's Fashion</span>
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
                            <button class="simple-btn mt-2">add to cart</button>
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
                            <button class="simple-btn mt-2">add to cart</button>
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
                            <button class="simple-btn mt-2">add to cart</button>
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
                            <button class="simple-btn mt-2">add to cart</button>
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
                            <button class="simple-btn mt-2">add to cart</button>
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
                            <button class="simple-btn mt-2">add to cart</button>
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
                            <button class="simple-btn mt-2">add to cart</button>
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
                            <button class="simple-btn mt-2">add to cart</button>
                        </div>
                    </carousel>
                </div>
            </div>
        </div>
    </section>
    <!--Feature Section Three--->
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
                            
                            <button @click="addToCart(product)" :disabled="product.product_quantity < 1" class="simple-btn mt-2">add to cart</button>
                        </div>
                    </carousel>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import Loader from "../../components/frontend/Loader";
import carousel from 'vue-owl-carousel';
import toastr from 'toastr'
export default {
  name: 'Home',
  components: { carousel, Loader },

data(){
    return {
      data:{},
      path: "http://127.0.0.1:8000/uploads/images/products/",
      product: {}
    }
  },
 
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.state.loadingStatus = true;
    this.$store.dispatch("getActiveCategories");
  },
  computed: {
    products(){
        return this.$store.getters.products;
    },
    categories(){
      return this.$store.getters.categories;
    },
    loadingStatus(){
      return this.$store.getters.loadingStatus
    },
    
  },
  methods: {
    addToCart(product){
      this.$store.dispatch('addProductToCart', product);
      toastr.success('Product added to cart!')
    },
    // getToCart(){
    //   this.$store.dispatch('getCartItems');
    // }

  }
}
</script>
<style lang="scss">


</style>
