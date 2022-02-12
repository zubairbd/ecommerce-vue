<template>
  <div class="body flex-grow-1 px-3">
    <div class="container-lg">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card mb-4">
            <form @submit.prevent="updateCategory">
              <div class="card-header bg-warning">Category Edit
                <span><router-link :to="{name:'category'}" class="btn btn-info btn-sm float-end">Category Manage</router-link></span>
              </div>
              <div class="card-body">
                <div class="mb-3 row">
                  <label class="col-sm-4 col-form-label" for="categoryName">Category Name</label>
                  <div class="col-sm-8">
                      <input type="text" class="form-control" :class="{'is-invalid':errors.category_name}" v-model="form.category_name" id="categoryName" placeholder="Category Name">
                  </div>
                </div>
                <div class="mb-3 row">
                  <label class="col-sm-4 col-form-label" for="categoryName">Status</label>
                  <div class="col-sm-8">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" id="Active" v-model="form.status" type="radio" value="1">
                      <label class="form-check-label" for="Active">Active</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" id="Inactive" v-model="form.status" type="radio" value="0">
                      <label class="form-check-label" for="Inactive">Inactive</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <button class="btn btn-success" type="submit">Update</button>
              </div>
            </form>
          </div>
        </div>
        <!-- /.col-->
      </div>
      <!-- /.row-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import toastr from "toastr";
export default {
  name: "Edit",
  data() {
    return{
      form: {},
      errors:{},
      id: this.$route.params.id,

    }
  },
  mounted() {
    this.getCategory()
  },
  methods:{
    getCategory(){
      axios.get(`/edit-category/${this.id}`).then((response) => {
        this.form = response.data.data
      }).catch((error) =>{
        console.log(error)
      })
    },
    updateCategory(){
      axios.post(`/update-category/${this.id}`, this.form).then((response) =>{
        // this.$toast.success();
        toastr.success(response.data.message)
        this.$router.push({name:'category'});
        this.errors = {}
      }).catch((error) =>{
        if (error.response.status === 422){
          this.errors = error.response.data.errors
          this.$toast.error('Ops');
        }
      })
    },
    isChecked() {
      return this.checked = false;
    }
  }
}
</script>

<style scoped>

</style>