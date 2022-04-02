<template>
  <div>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="aiz-user-sidenav-wrap position-relative z-1 shadow-sm">

            </div>
          </div>
          <div class="col-md-8"></div>
        </div>
      </div>
      <div class="container">
        <div class="main-body">
          <div class="row">
            <div class="col-lg-3">
              <UserSidebar />
            </div>
            <div class="col-lg-9">
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0 h6">Order Details</h5>
                </div>
                <div class="card-body">
                  <table class="table kz-table mb-0 footable footable-1 breakpoint-lg" style="">
                    <thead>
                    <tr class="footable-header">

                      <th style="display: table-cell;">Product</th>
                      <th style="display: table-cell;">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="orderitem in orderItems" :key="orderitem.id" class="">
                      <td>{{ orderitem.product.product_name }} | {{orderitem.product_id}}<span class="fw-bold">x {{orderitem.product_qty}}</span></td>
                      <td v-if="orderitem.product.discount !== null">{{orderitem.product_qty * orderitem.product.discount }} </td>
                      <td v-if="orderitem.product.discount == null">{{ orderitem.product.price }} </td>
<!--                      <td v-if="orderitem.product.discount == null">{{ orderitem.product.price * orderitem.product_qty}} </td>-->
<!--                      <td v-if="orderitem.product.discount !== null">{{ orderitem.product.discount * orderitem.product_qty}} </td>-->
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr class="cart-subtotal">
                      <th>Subtotal</th>
                      <td class="text-rights">৳{{orderdetail.total}}.00</td>
                    </tr>
                    <tr class="cart-subtotal">
                      <th>Shipping</th>
                      <td class="text-rights">৳{{orderdetail.total}}.00</td>
                    </tr>
                    <tr class="cart-subtotal">
                      <th>Payment Method</th>
                      <td class="text-rights">{{orderdetail.payment_type}}</td>
                    </tr>
                    <tr class="cart-subtotal">
                      <th>Total</th>
                      <td class="text-rights">৳{{orderdetail.total}}.00</td>
                    </tr>
                    </tfoot>
                  </table>
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
import UserSidebar from "../../../components/frontend/UserSidebar";
import {mapGetters} from "vuex";
import axios from "axios";
export default {
  name: "OrderDetails",
  components:{UserSidebar},
  data(){
    return{
      orderdetail:{}
    }
  },
  mounted() {
    this.$store.dispatch('orderDetails', this.$route.params.invoice_no)

  },
  created() {
    this.OrderDetail();
  },
  computed:{
    ...mapGetters([
      'orderItems'
    ]),
  },
  methods:{
    OrderDetail(){
      axios.get('/order-detail/' + this.$route.params.invoice_no)
          .then((res) =>{
            // this.orderdetail = res.data.data)
            console.log(res.data.data)
            this.orderdetail = res.data.data
          })
    }
  }
}
</script>

<style scoped>
.table > :not(:first-child) {
  border-top: 0;
}
</style>