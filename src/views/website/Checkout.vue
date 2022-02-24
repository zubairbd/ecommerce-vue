<template>
  <div>
    <section class="mt-4">
      <div class="container">
        <div class="row gutters-10">
          <div class="col-md-8">
            <div class="card text-center">
              <div class="card-header">
                <h4 class="fs-18">DELIVERY & BILLING INFO</h4>
              </div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <button type="button" class="btn btn-primary" @click="show">Add Shipping Address</button>
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
    <modal name="address-modal" height="auto">
      <div class="modal-content">
        <form @submit.prevent="addShipping">
        <div class="modal-header">
          <h5 class="modal-title">New Address</h5>
          <button type="button" @click="hide" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="form-group row mb-3">
              <label for="address" class="col-sm-2 col-form-label">Address</label>
              <div class="col-md-10">
                <textarea v-model="form.address" class="form-control" id="address" rows="10"></textarea>
              </div>
            </div>
            <div class="form-group row mb-3">
              <label for="division" class="col-sm-2 col-form-label">Division</label>
              <div class="col-sm-10">
                <select class="form-control select2-single" v-model="form.division" id="division">
                  <option value="">Select Division</option>
                  <option :value="item.id" v-for="item in divisions" :key="item._id">{{item.name}}</option>
                </select>
              </div>
            </div>
            <div class="form-group row mb-3">
              <label for="district" class="col-sm-2 col-form-label">District</label>
              <div class="col-sm-10">
                <select class="form-control select2-single" v-model="form.district" id="district">
                  <option value="">Select District</option>
                  <option :value="item.id" v-for="item in districts" :key="item._id">{{item.name}}</option>
                </select>
              </div>
            </div>
            <div class="form-group row mb-3">
              <label for="upazilla" class="col-sm-2 col-form-label">City</label>
              <div class="col-sm-10">
                <select class="form-control select2-single" v-model="form.city" id="upazilla">
                  <option value="">Select District</option>
                  <option :value="item.id" v-for="item in upazillas" :key="item._id">{{item.name}}</option>
                </select>
              </div>
            </div>
            <div class="form-group row mb-3">
              <label for="postcode" class="col-sm-2 col-form-label">Post Code</label>
              <div class="col-sm-10">
                <input type="text" v-model="form.post_code" class="form-control" id="postcode" placeholder="Post Code">
              </div>
            </div>
            <div class="form-group row mb-3">
              <label for="phone" class="col-sm-2 col-form-label">Phone</label>
              <div class="col-sm-10">
                <input type="text" v-model="form.phone" class="form-control" id="phone" placeholder="+880" >
              </div>
            </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary">Save changes</button>
          <button type="button" @click="hide" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        </form>
      </div>
    </modal>
  </div>
</template>

<script>
import axios from "axios";
import toastr from "toastr";

export default {
  name: "Checkout",
  data(){
    return{
      form: this.initForm(),
      divisions:{},
      districts:{},
      upazillas:{}
    }
  },
  mounted() {
    this.getDivision()
  },
  computed:{
    Auth(){
      return this.$store.getters.GET_AUTH_TOKEN;
    },
  },
  watch: {
    'form.division': function(value){
      axios.get('/get-districts?id='+ value)
          .then((response)=>{
            this.districts = response.data.data
          })
    },
    'form.district': function(value){
      axios.get('get-upazilas?id='+ value)
          .then((response)=>{
            this.upazillas = response.data.data
          })
    },
  },
  methods: {
    show () {
      this.$modal.show('address-modal');
    },
    hide () {
      this.$modal.hide('address-modal');
      this.form = this.initForm()
    },
    getDivision(){
      axios.get('get-divisions')
      .then((response) =>{
        this.divisions = response.data.data
      })
    },
    addShipping(){
      axios.post('/add-shipping', this.form)
      .then((response) =>{
        toastr.success(response.data.message)
        this.form = this.initForm()
        this.$modal.hide('address-modal');
      })
    },
    initForm() {
      return {
        division: '',
        district: '',
        city: '',
        address: null,
        post_code: null,
        phone: null,
      }
    },
  }
}
</script>

<style scoped>

</style>