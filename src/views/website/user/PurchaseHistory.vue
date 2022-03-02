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
                  <h5 class="mb-0 h6">Purchase History</h5>
                </div>
                <div class="card-body">
                  <table class="table kz-table mb-0 footable footable-1 breakpoint-lg" style="">
                    <thead>
                    <tr class="footable-header">

                      <th style="display: table-cell;">Product</th><th style="display: table-cell;" width="20%">Option</th></tr>
                    </thead>
                    <tbody>
                      <tr v-for="order in getOrders" :key="order.id" class="">
                        <td>{{ order.invoice_no }}</td>
                      </tr>

                      <tr v-if="!getOrders" class="footable-empty"><td colspan="2">Nothing found</td></tr>
                    </tbody>
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
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "PurchaseHistory",
  components: {UserSidebar},
  computed:{
    ...mapGetters([
        'getOrders'
    ]),
  },
  mounted() {
    this.getOrdersUser();
  },
  methods:{
    ...mapActions([
      'getOrdersUser'
    ]),
  }
}
</script>

<style scoped>

</style>