<template>
  <div class="body flex-grow-1 px-3">
    <div class="container-lg">
      <div class="row">
        <div class="col-md-12">
          <div class="card mb-4">
            <form @submit.prevent="addProduct">
            <div class="card-header bg-warning">Product Add
              <span><router-link :to="{name:'admin-products'}" class="btn btn-info btn-sm float-end">Product Manage</router-link></span>
            </div>
            <div class="card-body">
                <div class="row">
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label" for="categoryName">Product Name</label>
                      <input type="text" class="form-control" :class="{'is-invalid':errors.product_name}" v-model="form.product_name" id="categoryName" placeholder="Product Name">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label" for="price">Product Price</label>
                      <input type="text" class="form-control" :class="{'is-invalid':errors.price}" v-model="form.price" id="price" placeholder="Product Price">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label" for="product_quantity">Product Quantity</label>
                      <input type="text" class="form-control" :class="{'is-invalid':errors.product_quantity}" v-model="form.product_quantity" id="product_quantity" placeholder="Product Quantity">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label" for="categoryName">Category</label>
                      <select class="form-select" v-model="form.category_id">
                        <option value="">Select Category</option>
                        <option :value="row.id" v-for="(row, key) in categories" :key="key">{{row.category_name}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label" for="categoryName">Sub Category</label>
                      <select class="form-select" v-model="form.subcategory_id" aria-label="Default select example">
                        <option value="">Select Sub Category</option>
                        <option :value="row.id" v-for="(row, key) in subcategories" :key="key">{{row.category_name}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label" for="categoryName">Brand</label>
                      <select class="form-select" v-model="form.brand_id">
                        <option value="">Select Brand</option>
                        <option :value="row.id" v-for="(row, key) in brands" :key="key">{{row.brand_name}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label" for="Summary">Product Summary</label>
                      <input type="text" class="form-control" :class="{'is-invalid':errors.summary}" v-model="form.summary" id="Summary" placeholder="Product Summary">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label" for="Discount">Product Discount</label>
                      <input type="text" class="form-control" :class="{'is-invalid':errors.discount}" v-model="form.discount" id="Discount" placeholder="Product Discount">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="mb-3">
                      <label class="form-label" for="categoryName">Size</label>
                      <select class="form-select" v-model="form.size">
                        <option value="">Select Size</option>
                        <option value="S">Size - S</option>
                        <option value="M">Size - M</option>
                        <option value="L">Size - L</option>
                        <option value="XL">Size - XL</option>
                        <option value="XXL">Size - XXL</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="form-label" for="Discount">Description</label>
                      <ckeditor v-model="form.description" :config="editorConfig"></ckeditor>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="image-input" :style="{'background-image': `url(${form.feature_image})`}" @click="chooseImage">
                      <span v-if="!form.feature_image" class="placeholder">Choose an Image</span>
                      <input class="file-input" ref="fileInput" type="file" @input="onSelectFile">
                      <span class="close-icon" v-if="form.feature_image" @click="removeImage()">
                        <i class="cil-trash"></i>
                      </span>
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
  import toastr from "toastr"
    export default {
      name: 'Create',
      data() {
        return{
          form: this.initForm(),
          errors:{},
          subcategories: {},
          editorConfig: {
              // The configuration of the editor.
          }
        }
      },
      mounted() {
        this.$store.dispatch("getActiveCategories");
        this.$store.dispatch("getBrands");
      },
      watch: {
        'form.category_id': function(value){
          axios.get('/get-subcat?category_id='+ value)
          .then((response)=>{
            this.subcategories = response.data.data
          })
        },
      },
      computed: {
        categories(){
          return this.$store.getters.categories;
        },
        brands(){
          return this.$store.getters.brands;
        }
      },
      methods:{
        addProduct(){
          axios.post('/add-product', this.form).then((response) =>{
            console.log(response)
            toastr.success(response.data.message)
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
            category_id: '',
            subcategory_id: '',
            brand_id: '',
            product_name: null,
            product_slug: null,
            product_code: null,
            product_quantity: null,
            summary: null,
            description: null,
            price: null,
            discount: null,
            size: '',
            feature_image: null,
            image_two: null,
            status: null,
          }
        },
        chooseImage () {
          this.$refs.fileInput.click()
        },

        onSelectFile () {
          const input = this.$refs.fileInput
          const files = input.files
          if (files && files[0]) {
            const reader = new FileReader
            reader.onload = e => {
              this.form.feature_image = e.target.result
            }
            reader.readAsDataURL(files[0])
            this.$emit('input', files[0])
          }
        },
        removeImage(){
          this.form.feature_image = null,
          this.chooseImage
        }

      }
    }
</script>

<style lang="scss" scoped>
.image-input{
  display: block;
  width: 200px;
  height: 200px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
  position: relative;
}
.close-icon{
  position: absolute;
  top: -10px;
  right: -10px;
  background: #596059;
  color: #fff;
  height: 26px;
  width: 26px;
  border-radius: 50%;
  text-align: center;
  line-height: 26px;
  font-size: 13px;
}
.placeholder{
  background: #F0F0F0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 18px;
  font-family: Helvetica;
}
.placeholder:hover{
  background: #E0E0E0;
}
.file-input{
  display: none;
  }
</style>