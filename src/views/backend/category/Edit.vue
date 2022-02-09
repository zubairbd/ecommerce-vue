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
                <div class="row justify-content-center">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label" for="categoryName">Category Name</label>
                      <input type="text" class="form-control" :class="{'is-invalid':errors.category_name}" v-model="form.category_name" id="categoryName" placeholder="Category Name">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label" for="status">Status</label>

                      <div class="form-check form-switch form-switch-xl">
                        <input class="form-check-input" :checked="isChecked()" v-model="form.status" id="status" type="checkbox">
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4"></div>
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