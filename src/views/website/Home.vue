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
                              <span><img class="cat-img" :src="category.image"> </span><span class="cat-name">{{category.category_name}}</span>
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
    <AllCategory />
    <!--Hot Deals Section Three--->
    <HotDeals />
    <!--Feature Section One--->
    <FeaturedProducts />
    <!--Feature Section Two--->

  </div>
</template>

<script>

import carousel from 'vue-owl-carousel';

import FeaturedProducts from "../../components/frontend/FeaturedProducts";
import AllCategory from "../../components/frontend/AllCategory";
import HotDeals from "../../components/frontend/HotDeals";
export default {
  name: 'Home',
  components: {HotDeals, AllCategory, FeaturedProducts, carousel },

  mounted() {
    this.$store.dispatch("getActiveCategories");
  },
  computed: {
    categories(){
      return this.$store.getters.categories;
    },
  },
 

}
</script>
<style lang="scss">


</style>
