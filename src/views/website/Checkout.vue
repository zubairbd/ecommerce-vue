<template>
  <div>
    <section class="mt-4">
      <div class="container">
        <div class="row gutters-10">
          <div class="col-md-8">
            <div class="card text-center">
              <div class="card-header">
                <h4 class="fs-18">DELIVERY & BILLING INFO</h4>
                <b-button  class="float-end btn btn-primary" v-b-modal.modal-1>Add Shipping Address</b-button>
              </div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
              <div class="card-footer text-muted">
                2 days ago
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center">
              <div class="card-header">
                <h4 class="fs-18">Featured</h4>
              </div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
              <div class="card-footer text-muted">
                2 days ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Modal -->
    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Checkout",
  data(){
    return{

    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>