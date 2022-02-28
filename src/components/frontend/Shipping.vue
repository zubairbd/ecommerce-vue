<template>
    <div class="col-md-8">
      <div class="card text-center">
        <div class="card-header">
          <h4 class="fs-18">DELIVERY & BILLING INFO</h4>
        </div>
        <div class="card-body">
          <div class="row gutters-5">
            <div v-for="shipping in shippings" :key="shipping.id" class="col-md-6 mb-3 position-relative">
              <label @click="deliveryCharge(shipping)" class="aiz-megabox d-block bg-white mb-0">
                <input type="radio" v-model="shipping.address_id" name="address_id" :value="shipping.id" required="">
                <span class="d-flex p-3 aiz-megabox-elem">
                        <span class="aiz-rounded-check flex-shrink-0 mt-1"></span>
                        <span class="flex-grow-1 pl-3 text-left">
                            <div>
                                <span class="opacity-60">Address:</span>
                                <span class="fw-600 ml-2">{{shipping.address}}</span>
                            </div>
                            <div>
                                <span class="opacity-60">Postal code:</span>
                                <span class="fw-600 ml-2">{{shipping.post_code}}</span>
                            </div>
                            <div>
                                <span class="opacity-60">City:</span>
                                <span class="fw-600 ml-2">{{shipping.city_name}}</span>
                            </div>
                            <div>
                                <span class="opacity-60">State:</span>
                                <span class="fw-600 ml-2">{{shipping.district_name}}</span>
                            </div>
                            <div>
                                <span class="opacity-60">Division:</span>
                                <span class="fw-600 ml-2">{{shipping.division_name}}</span>
                            </div>
                            <div>
                                <span class="opacity-60">Phone:</span>
                                <span class="fw-600 ml-2">{{shipping.phone}}</span>
                            </div>
                        </span>
                    </span>
              </label>
              <div class="dropdown position-absolute right-0 top-0">
                <button class="btn bg-gray px-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="la la-ellipsis-v"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" style="">
                  <a @click="editAddress(shipping.id)" class="dropdown-item">
                    Edit
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 mt-auto mb-3">
              <div @click="show" class="border p-3 rounded mb-3 c-pointer text-center bg-white h-100 d-flex flex-column justify-content-center" onclick="add_new_address()">
                <i class="las la-plus la-2x mb-3"></i>
                <div class="alpha-7">Add New Address</div>
              </div>
            </div>
          </div>
        </div>

      </div>
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
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </modal>
      <modal name="address-edit-modal" height="auto">
        <div class="modal-content">
          <form @submit.prevent="updateAddress">
            <div class="modal-header">
              <h5 class="modal-title">Edit Shipping Address</h5>
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
              <button type="submit" class="btn btn-primary">Save</button>
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
  name: "Shipping",
  data(){
    return{
      form: this.initForm(),
      divisions:{},
      districts:{},
      upazillas:{},
      shippings: {},
    }
  },
  mounted() {
    this.getDivision();
    this.getShipping();
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
      this.$modal.hide('address-edit-modal');
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
            this.getShipping()
          })
          .catch(error=>{
            for (const [, v] of Object.entries(error.response.data.errors)){
              toastr.error(v)
            }
          })
    },
    getShipping(){
      axios.get('/get-shipping')
          .then((response)=> {
            this.shippings = response.data.data
          })
    },
    editAddress (id) {
      this.$modal.show('address-edit-modal');
      axios.get('/edit-shipping/' + id)
          .then((response) =>{
            this.form = response.data.data
          })
    },
    updateAddress() {
      axios.post(`/update-shipping/${this.form.id}`, this.form)
          .then((response) =>{
            toastr.success(response.data.message)
            this.getShipping()
            this.$modal.hide('address-edit-modal');
          })
    },
    deliveryCharge(shipping){
      this.$store.dispatch('deliveryCharge', shipping);
    },

    initForm() {
      return {
        division: '',
        district: '',
        city: '',
        address: null,
        post_code: null,
        phone: null,
        id: null
      }
    },
  }
}
</script>

<style scoped>

</style>