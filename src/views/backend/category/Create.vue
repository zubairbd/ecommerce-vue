<template>
  <div class="body flex-grow-1 px-3">
    <div class="container-lg">
      <div class="row">
        <div class="col-md-8">
          <div class="card mb-4">
            <form @submit.prevent="addCategory">
            <div class="card-header bg-warning">Category Add
              <span><router-link :to="{name:'admin-category'}" class="btn btn-info btn-sm float-end">Category Manage</router-link></span>
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
                      <label class="form-label" for="categoryName">Status</label>
                      <br>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" id="inlineRadio1" v-model="form.status" type="radio" name="inlineRadioOptions" value="1">
                        <label class="form-check-label" for="inlineRadio1">Active</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" id="inlineRadio2" v-model="form.status" type="radio" name="inlineRadioOptions" value="0">
                        <label class="form-check-label" for="inlineRadio2">Inactive</label>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="card-footer">
              <button class="btn btn-success" type="submit">Save</button>
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
    export default {
      name: 'Create',
      data() {
        return{
          form: this.initForm(),
          errors:{}
        }
      },
      methods:{
        addCategory(){
          axios.post('/add-category', this.form).then((response) =>{
            console.log(response)
            // this.$toast.success(response.data.message);
            this.form = this.initForm()
            this.errors = {}
          }).catch((error) =>{
            if (error.response.status === 422){
              this.errors = error.response.data.errors
              // this.$toast.error(this.errors)
              console.log(this.errors)
            }
          })
        },
        initForm() {
          return {
            category_name: null,
            category_slug: null,
            status: null,
          }
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>