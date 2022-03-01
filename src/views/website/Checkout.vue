<template>
  <div>
    <section class="mt-4">
      <div class="container text-left">
        <div class="row gutters-10">
          <div class="col-md-8">
            <Shipping />
            <div class="card text-center mr-5">
              <div class="card-header">
                <h4 class="fs-18">Select a payment option</h4>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-xxl-8 col-xl-10 mx-auto">
                    <div class="row gutters-5">
                      <div  class="col-6 col-md-4">
                        <label class="aiz-megabox d-block bg-white mb-0">
                          <input type="radio" name="address_id" value="" required="">
                          <span class="d-block p-3 aiz-megabox-elem">
                          <img src="https://bongobaba.com/public/assets/img/cards/sslcommerz.png" class="img-fluid mb-2">
                          <span class="d-block text-center">
                              <span class="d-block fw-600 fs-15">sslcommerz</span>
                          </span>
                      </span>
                        </label>
                      </div>
                      <div  class="col-6 col-md-4">
                        <label class="aiz-megabox d-block bg-white mb-0">
                          <input type="radio" name="address_id" value="" required="">
                          <span class="d-block p-3 aiz-megabox-elem">
                          <img src="https://bongobaba.com/public/assets/img/cards/nagad.png" class="img-fluid mb-2">
                          <span class="d-block text-center">
                              <span class="d-block fw-600 fs-15">Nagad</span>
                          </span>
                      </span>
                        </label>
                      </div>
                      <div  class="col-6 col-md-4">
                        <label class="aiz-megabox d-block bg-white mb-0">
                          <input type="radio" name="address_id" value="" required="">
                          <span class="d-block p-3 aiz-megabox-elem">
                          <img src="https://bongobaba.com/public/assets/img/cards/cod.png" class="img-fluid mb-2">
                          <span class="d-block text-center">
                              <span class="d-block fw-600 fs-15">Cash on Delivery</span>
                          </span>
                      </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <Load v-if="loadingStatus" />
              <div class="card-header">
                <h4 class="fs-18">Summary</h4>
              </div>
              <div class="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th class="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in products" :key="item.id">
                      <td>
                        {{item.product.product_name}}
                        <strong class="product-quantity">
                          × {{item.quantity}}
                        </strong>
                      </td>
                      <td v-if="item.product.discount == null" class="text-right">৳{{item.product.price * item.quantity}}.00</td>
                      <td v-if="item.product.discount !== null" class="text-right">৳{{item.product.discount * item.quantity}}.00</td>
                    </tr>
                  </tbody>
                </table>
                <table class="table">

                  <tfoot>
                    <tr>
                      <th>Subtotal</th>
                      <td class="text-right">৳{{cartTotalPrice}}.00</td>
                    </tr>
                    <tr>
                      <th>Tax</th>
                      <td class="text-right">৳.00</td>
                    </tr>
                    <tr>
                      <th>Total Shipping</th>
                      <td class="text-right">৳{{deliveryCharge}}.00</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td class="text-right">৳{{cartTotalPrice + deliveryCharge}}.00</td>
                    </tr>
                  </tfoot>
                </table>
                <div class="mt-3">
                  <form class="" id="apply-coupon-form" enctype="multipart/form-data">
                    <input type="hidden" name="_token" value="SjgkU0balPFsVZOuiigrk5wKKIbrzPDaJpti7poM">                        <input type="hidden" name="owner_id" value="9">
                    <div class="input-group">
                      <input type="text" class="form-control" name="code" onkeydown="return event.key != 'Enter';" placeholder="Have coupon code? Enter here" required="">
                      <div class="input-group-append">
                        <button type="button" id="coupon-apply" class="btn btn-primary">Apply</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary justify-content-end"> Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Shipping from "../../components/frontend/Shipping";
import Load from "../../components/frontend/Load";
export default {
  name: "Checkout",
  components:{Shipping, Load},
  data(){
    return{
      isLoaded: false,
      isLoading: false
    }
  },
  mounted() {
    // setTimeout(() => {this.loadingStatus = false}, 2000),

  },
  computed:{
    loadingStatus(){
      return this.$store.getters.loadingStatus
    },
    products(){
      return this.$store.getters.cartProducts
    },
    cartTotalPrice(){
      return this.$store.getters.cartTotalPrice
    },
    cartItemCount(){
      return this.$store.getters.cartItem;
    },
    deliveryCharge(){
      return this.$store.getters.deliveryCharge;
    }
  },


}
</script>

<style scoped>
.loading {
  background: transparent url('https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif') center no-repeat;
  height: 400px;
  width: 400px;
}
</style>