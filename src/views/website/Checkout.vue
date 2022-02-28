<template>
  <div>
    <section class="mt-4">
      <div class="container text-left">
        <div class="row gutters-10">
          <Shipping />
          <div class="col-md-4">
            <div class="card">
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
                      <td class="text-right">৳{{item.product.price}}.00</td>
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
                      <td class="text-right">৳.00</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td class="text-right">৳.00</td>
                    </tr>
                  </tfoot>
                </table>
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
export default {
  name: "Checkout",
  components:{Shipping},
  data(){
    return{

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
  }

}
</script>

<style scoped>

</style>