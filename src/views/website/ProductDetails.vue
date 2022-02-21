<template>
  <div>
    <!--Section Top--->
    <section class="feaure-section mb-4 pt-3">
      <div class="container">
        <div class="bg-white shadow-sm rounded p-4">
          <div class="row">
            <div class="col-xl-5 col-lg-6 mb-4">
              <div class="sticky-top z-3 row gutters-10">
                <div class="col order-1 order-md-2">
                  <div class="carousel-box img-zoom rounded">
                    <img class="img-responsive" :src="product.feature_image" alt="">
                  </div>
                </div>
                <div class="col-12 col-md-auto w-md-80px order-2 order-md-1 mt-3 mt-md-0">
                  
                  <img class="img-responsive" style="width:90px" :src="product.image_two" alt="">
                </div>
              </div>
            </div>
            <div class="col-xl-7 col-lg-6">
              <div class="text-left">
                <h1 class="mb-2 fs-20 fw-600">
                  {{product.product_name}}
                </h1>
                <hr />

                <div class="row no-gutters pb-1 align-items-center">
                  <div class="col-sm-3">
                    <div class="opacity-50 fs-14">Category:</div>
                  </div>
                  <div class="col-sm-9">
                    <div class="fs-16 opacity-100">
                         <span>Mobile Accessories </span>
                    </div>
                  </div>
                </div>
                <div class="row no-gutters pb-1 align-items-center">
                  <div class="col-sm-3">
                    <div class="opacity-50 fs-14">Brand:</div>
                  </div>
                  <div class="col-sm-9">
                    <div class="fs-16 opacity-100">
                         <span>Mobile Accessories </span>
                    </div>
                  </div>
                </div>
                <div class="row no-gutters align-items-center">
                  <div class="col-sm-3">
                    <div class="opacity-50 fs-14">SKU:</div>
                  </div>
                  <div class="col-sm-9">
                    <div class="fs-16 opacity-100 text-danger fw-600">
                         <span>DESHI12541</span>
                    </div>
                  </div>
                </div>
                <hr />

                <div class="row no-gutters mt-3 align-items-center">
                  <div class="col-sm-3">
                    <div class="opacity-50 my-2 fs-14">Regular Price:</div>
                  </div>
                  <div class="col-sm-9">
                    <div class="fs-16 opacity-60">
                      <del>
                        ৳{{product.price}}.00
                        <span>/Pc</span>
                      </del>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="opacity-50 fs-14">Discount Price:</div>
                  </div>
                  <div class="col-sm-9">
                    <div class="">
                      <strong class="fs-20 fw-600 text-primary">
                        ৳{{product.discount}}.00
                      </strong>
                      <span class="opacity-70">/Pc</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="mt-3">
                  <button type="button" class="btn btn-soft-primary mr-2 add-to-cart fw-600" @click="addToCart(product)">
                    <i class="fas fa-shopping-bag"></i>
                    <span class="d-none d-md-inline-block">Add to cart</span>
                  </button>
                  <button type="button" class="btn btn-primary buy-now fw-600 mr-2" onclick="buyNow()"><i class="fas fa-shopping-cart"></i> Buy Now</button>
                  <button type="button" class="btn btn-warning buy-now fw-600" onclick="buyNow()"><i class="fas fa-heart"></i> Add to Wishlist</button>
                  <button type="button" class="btn btn-secondary out-of-stock fw-600 d-none" disabled=""><i class="la la-cart-arrow-down"></i> Out of Stock</button>
                </div>
                <hr>
                <div class="row no-gutters mt-3">
                  <div class="col-3">
                    <div class="opacity-50 mt-2 fs-14">Refund:</div>
                  </div>
                  <div class="col-9">
                    <a href="https://bongobaba.com/return-policy" target="_blank">
                      <img src="https://bongobaba.com/public/uploads/all/p2NNpWV5II3OTWZEeqWmbF2pPUo9vO41nAQs9sbn.png" height="36" />
                    </a>
                    <a href="https://bongobaba.com/return-policy" class="ml-2 fs-12" target="_blank">View Policy</a>
                  </div>
                </div>
                <div class="row no-gutters mt-4">
                  <div class="col-sm-3">
                    <div class="opacity-50 my-2 fs-14">Share:</div>
                  </div>
                  <div class="col-sm-9">
                    <div class="aiz-share jssocials">
                      <div class="jssocials-shares">
                        <div class="jssocials-share jssocials-share-email">
                          <a target="_self" href="mailto:?subject=Age%3A%20Age%203%20year%20to%209%20years&amp;body=https%3A%2F%2Fbongobaba.com%2Fproduct%2Fball-gowns-party-dress-bp13" class="jssocials-share-link">
                            <i class="lar la-envelope jssocials-share-logo"></i>
                          </a>
                        </div>
                        <div class="jssocials-share jssocials-share-twitter">
                          <a target="_blank" href="https://twitter.com/share?url=https%3A%2F%2Fbongobaba.com%2Fproduct%2Fball-gowns-party-dress-bp13&amp;text=Age%3A%20Age%203%20year%20to%209%20years" class="jssocials-share-link">
                            <i class="lab la-twitter jssocials-share-logo"></i>
                          </a>
                        </div>
                        <div class="jssocials-share jssocials-share-facebook">
                          <a target="_blank" href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbongobaba.com%2Fproduct%2Fball-gowns-party-dress-bp13" class="jssocials-share-link">
                            <i class="lab la-facebook-f jssocials-share-logo"></i>
                          </a>
                        </div>
                        <div class="jssocials-share jssocials-share-linkedin">
                          <a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fbongobaba.com%2Fproduct%2Fball-gowns-party-dress-bp13" class="jssocials-share-link">
                            <i class="lab la-linkedin-in jssocials-share-logo"></i>
                          </a>
                        </div>
                        <div class="jssocials-share jssocials-share-whatsapp">
                          <a target="_self" href="whatsapp://send?text=https%3A%2F%2Fbongobaba.com%2Fproduct%2Fball-gowns-party-dress-bp13 Age%3A%20Age%203%20year%20to%209%20years" class="jssocials-share-link">
                            <i class="lab la-whatsapp jssocials-share-logo"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-4">
      <div class="container">
        <div class="row gutters-10">
          <div class="col-xl-3 order-1 order-xl-0">
            <div class="bg-white rounded shadow-sm mb-3">
              <div class="p-3 border-bottom fs-16 fw-600">
                Top Selling Products
              </div>
              <div class="p-3">
                <ul class="list-group list-group-flush">
                  <li class="py-3 px-0 list-group-item border-light">
                    <div class="row gutters-10 align-items-center">
                      <div class="col-5">
                        <a href="https://bongobaba.com/product/nihar-anti-hairfall-5-seeds-hair-oil-100ml-75gm-soap-free-m1076" class="d-block text-reset">
                          <img
                              class="img-fit h-xxl-110px h-xl-80px h-120px ls-is-cached lazyloaded"
                              src="https://bongobaba.com/public/uploads/all/55Ipak9wGTZMqCP2z46q1E6E8ekvIO6O2CYWYphR.jpg"
                              data-src="https://bongobaba.com/public/uploads/all/55Ipak9wGTZMqCP2z46q1E6E8ekvIO6O2CYWYphR.jpg"
                              alt="Nihar Anti Hairfall 5 Seeds Hair Oil 100ml (75gm Soap Free) m1076"
                              onerror="this.onerror=null;this.src='https://bongobaba.com/public/assets/img/placeholder.jpg';"
                          />
                        </a>
                      </div>
                      <div class="col-7 text-left">
                        <h4 class="fs-13 text-truncate-2">
                          <a href="https://bongobaba.com/product/nihar-anti-hairfall-5-seeds-hair-oil-100ml-75gm-soap-free-m1076" class="d-block text-reset">
                            Nihar Anti Hairfall 5 Seeds Hair Oil 100ml (75gm Soap Free) m1076
                          </a>
                        </h4>
                        <div class="rating rating-sm mt-1"><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i></div>
                        <div class="mt-2">
                          <span class="fs-17 fw-600 text-primary">৳110.00</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="py-3 px-0 list-group-item border-light">
                    <div class="row gutters-10 align-items-center">
                      <div class="col-5">
                        <a href="https://bongobaba.com/product/lg-electric-kettle-1" class="d-block text-reset">
                          <img
                              class="img-fit h-xxl-110px h-xl-80px h-120px ls-is-cached lazyloaded"
                              src="https://bongobaba.com/public/uploads/all/0ZyPlQiT08ylo3SX5XMzsvlMHB6ZdRzMEMGUp9hb.jpg"
                              data-src="https://bongobaba.com/public/uploads/all/0ZyPlQiT08ylo3SX5XMzsvlMHB6ZdRzMEMGUp9hb.jpg"
                              alt="LG Electric Kettle A201"
                              onerror="this.onerror=null;this.src='https://bongobaba.com/public/assets/img/placeholder.jpg';"
                          />
                        </a>
                      </div>
                      <div class="col-7 text-left">
                        <h4 class="fs-13 text-truncate-2">
                          <a href="https://bongobaba.com/product/lg-electric-kettle-1" class="d-block text-reset">LG Electric Kettle A201</a>
                        </h4>
                        <div class="rating rating-sm mt-1"><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i></div>
                        <div class="mt-2">
                          <span class="fs-17 fw-600 text-primary">৳585.00</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="py-3 px-0 list-group-item border-light">
                    <div class="row gutters-10 align-items-center">
                      <div class="col-5">
                        <a href="https://bongobaba.com/product/htc-1103-hair-trimmer" class="d-block text-reset">
                          <img
                              class="img-fit h-xxl-110px h-xl-80px h-120px ls-is-cached lazyloaded"
                              src="https://bongobaba.com/public/uploads/all/VtpU9MCRNu6tMt1IybvabKlLvvmixjTSjQtKdrtX.jpg"
                              data-src="https://bongobaba.com/public/uploads/all/VtpU9MCRNu6tMt1IybvabKlLvvmixjTSjQtKdrtX.jpg"
                              alt="HTC 1103 Hair Trimmer"
                              onerror="this.onerror=null;this.src='https://bongobaba.com/public/assets/img/placeholder.jpg';"
                          />
                        </a>
                      </div>
                      <div class="col-7 text-left">
                        <h4 class="fs-13 text-truncate-2">
                          <a href="https://bongobaba.com/product/htc-1103-hair-trimmer" class="d-block text-reset">HTC 1103 Hair Trimmer</a>
                        </h4>
                        <div class="rating rating-sm mt-1"><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i></div>
                        <div class="mt-2">
                          <span class="fs-17 fw-600 text-primary">৳530.00</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="py-3 px-0 list-group-item border-light">
                    <div class="row gutters-10 align-items-center">
                      <div class="col-5">
                        <a href="https://bongobaba.com/product/joefox-men-luxury-waterproof-quartz-watch-model-jfx1730-1" class="d-block text-reset">
                          <img
                              class="img-fit h-xxl-110px h-xl-80px h-120px ls-is-cached lazyloaded"
                              src="https://bongobaba.com/public/uploads/all/GEqy5wbgCXFXvAZxl6LPmNd0wZuCVXRwaHNufkKR.jpg"
                              data-src="https://bongobaba.com/public/uploads/all/GEqy5wbgCXFXvAZxl6LPmNd0wZuCVXRwaHNufkKR.jpg"
                              alt="Joefox Men Luxury Waterproof Quartz Watch Model: JFX1730"
                              onerror="this.onerror=null;this.src='https://bongobaba.com/public/assets/img/placeholder.jpg';"
                          />
                        </a>
                      </div>
                      <div class="col-7 text-left">
                        <h4 class="fs-13 text-truncate-2">
                          <a href="https://bongobaba.com/product/joefox-men-luxury-waterproof-quartz-watch-model-jfx1730-1" class="d-block text-reset">Joefox Men Luxury Waterproof Quartz Watch Model: JFX1730</a>
                        </h4>
                        <div class="rating rating-sm mt-1"><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i></div>
                        <div class="mt-2">
                          <span class="fs-17 fw-600 text-primary">৳899.00</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="py-3 px-0 list-group-item border-light">
                    <div class="row gutters-10 align-items-center">
                      <div class="col-5">
                        <a href="https://bongobaba.com/product/acer-tmp249-g3-m-i5-8250u-laptop-without-bag" class="d-block text-reset">
                          <img
                              class="img-fit h-xxl-110px h-xl-80px h-120px ls-is-cached lazyloaded"
                              src="https://bongobaba.com/public/uploads/all/TFxusZIx5AHamKfsjp4CO6ogA6CZ2ZVuDdSZeiot.jpg"
                              data-src="https://bongobaba.com/public/uploads/all/TFxusZIx5AHamKfsjp4CO6ogA6CZ2ZVuDdSZeiot.jpg"
                              alt="Acer TMP249 G3 M I5-8250U Laptop (Without Bag)"
                              onerror="this.onerror=null;this.src='https://bongobaba.com/public/assets/img/placeholder.jpg';"
                          />
                        </a>
                      </div>
                      <div class="col-7 text-left">
                        <h4 class="fs-13 text-truncate-2">
                          <a href="https://bongobaba.com/product/acer-tmp249-g3-m-i5-8250u-laptop-without-bag" class="d-block text-reset">Acer TMP249 G3 M I5-8250U Laptop (Without Bag)</a>
                        </h4>
                        <div class="rating rating-sm mt-1"><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i></div>
                        <div class="mt-2">
                          <span class="fs-17 fw-600 text-primary">৳66,000.00</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="py-3 px-0 list-group-item border-light">
                    <div class="row gutters-10 align-items-center">
                      <div class="col-5">
                        <a href="https://bongobaba.com/product/real-madrid-grey-stock-limited-rz-2" class="d-block text-reset">
                          <img
                              class="img-fit h-xxl-110px h-xl-80px h-120px lazyloaded"
                              src="https://bongobaba.com/public/uploads/all/g33kEP0SImT9AWjYw7NQURvbEeSG3a8pPXVkRF1o.jpg"
                              data-src="https://bongobaba.com/public/uploads/all/g33kEP0SImT9AWjYw7NQURvbEeSG3a8pPXVkRF1o.jpg"
                              alt="Real Madrid Grey stock limited  RZ-2"
                              onerror="this.onerror=null;this.src='https://bongobaba.com/public/assets/img/placeholder.jpg';"
                          />
                        </a>
                      </div>
                      <div class="col-7 text-left">
                        <h4 class="fs-13 text-truncate-2">
                          <a href="https://bongobaba.com/product/real-madrid-grey-stock-limited-rz-2" class="d-block text-reset">Real Madrid Grey stock limited RZ-2</a>
                        </h4>
                        <div class="rating rating-sm mt-1"><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i><i class="las la-star"></i></div>
                        <div class="mt-2">
                          <span class="fs-17 fw-600 text-primary">৳370.00</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-9 order-0 order-xl-1">
            <div class="bg-white mb-3 shadow-sm rounded">
              <div class="nav border-bottom aiz-nav-tabs">
                <a href="#tab_default_1" data-toggle="tab" class="p-3 fs-16 fw-600 text-reset show active">Description</a>
                <a href="#tab_default_4" data-toggle="tab" class="p-3 fs-16 fw-600 text-reset">Reviews</a>
              </div>

              <div class="tab-content pt-0">
                <div class="tab-pane fade active show" id="tab_default_1">
                  <div class="p-4">
                    <div class="mw-100 overflow-hidden text-left aiz-editor-data">
                      <ul>
                        <li>
                                              <span
                                                  data-sheets-value='{"1":2,"2":"Age: Age 3 year to 9 years"}'
                                                  data-sheets-userformat='{"2":4867,"3":{"1":0},"4":{"1":2,"2":16777215},"11":4,"12":0,"15":"Arial"}'
                                                  style="font-size: 10pt; font-family: Arial;"
                                              >
                                                  Age: Age 3 year to 9 years
                                              </span>
                          <br />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="tab_default_2">
                  <div class="p-4">
                    <div class="embed-responsive embed-responsive-16by9"></div>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab_default_3">
                  <div class="p-4 text-center">
                    <a href="" class="btn btn-primary">Download</a>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab_default_4">
                  <div class="p-4">
                    <ul class="list-group list-group-flush"></ul>

                    <div class="text-center fs-18 opacity-70">
                      There have been no reviews for this product yet.
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
// import axios from "axios";
import toastr from 'toastr'
export default {
  name: "ProductDetails",
  props: ["product_slug"],
  mounted() {
    // this.viewProduct();
    this.$store.dispatch('getProduct', this.$route.params.product_slug)
  },
  computed:{
    product(){
      return this.$store.state.product.product;
    }
  },
  methods:{
    // viewProduct () {
    //   axios.get("/view-product/" + this.$route.params.product_slug).then((response) => {
    //     // this_.form.fill(response.data.category);
    //     this.product = response.data.data
    //     console.log(response.data.data);
    //   }).catch((error) =>{
    //     console.log(error)
    //   })
    // },
    // addToCart(){
    //   this.$store.dispatch('addProductToCart',{
    //     product: this.product,
    //     quantity: 1
    //   });
    // },
    addToCart(product){
      this.$store.dispatch('addProductToCart', product);
      toastr.success('Product added to cart!')
    },
  }

}
</script>

<style scoped>

</style>