<template>
  <div>
    <div class="main-wrapper">
        <Header />
        <div class="main-area">
            <router-view/>
        </div>
        <footer class="footer-section">
            <div class="footer-bottom">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-md-12 col-lg-12">
                            <div class="footer-bottom-info">
                                <span>© <!-- --> 2021 Deshibazaarbd.com | All rights reserved </span>
                                <ul class="social-media mb-0">
                                    <li class="social-facebook">
                                        <a href="https://www.facebook.com/Deshibazaarbd21" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li class="social-youtube">
                                        <a href="https://www.youtube.com/channel/UCRQDLHqRMH4efiE7u89kVIg" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
                                    </li>
                                    <li class="social-twitter">
                                        <a href="https://twitter.com/DeshibazaarbdC" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li class="social-linkedIn">
                                        <a href="https://www.linkedin.com/in/deshi-bazaar-bd-com-64ab2620b/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <router-link to="/cart" class="flashDealButton d-flex flex-column align-items-center pointer">
        <div class="fixed-cart-items">
            <span><i style="font-size: 18px;" class="fas fa-shopping-bag"></i></span>
            <span>
                {{cartItemCount}}<!-- -->
                items
            </span>
        </div>
        <div class="fixed-cart-price d-flex justify-content-center align-item-center">
            <span><span>৳{{cartTotalPrice}}</span></span>
            
        </div>
    </router-link>
  </div>
</template>

<script>
// import "../../assets/frontend/js/jquery-2.2.4.min.js";
// import "../../assets/frontend/js/owl.carousel.min.js";
// import "../../assets/frontend/js/scripts.js";

// import carousel from 'vue-owl-carousel'
import Header from '../../components/frontend/Header.vue'
export default {
  name: 'Master',
  components: { Header },
  computed:{
    products(){
      return this.$store.getters.cartProducts
    },
    cartItemCount(){
      return this.$store.getters.cartItem;
    },
    cartTotalPrice(){
      return this.$store.getters.cartTotalPrice;
    },
  },
  mounted() {
      // this.$store.dispatch('getCartItems');
  },

}
</script>
<style lang="scss">

@import "../../assets/frontend/css/main.css";
@import "../../assets/frontend/css/style.css";


</style>
