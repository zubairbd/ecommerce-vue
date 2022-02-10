<template>
  <div class="body flex-grow-1 px-3">
    <div class="container-lg">
      <div class="row">
        <div class="col-md-12">
          <div class="card mb-4">
            <div class="card-header bg-info">Product List
              <span><router-link :to="{name:'product-add'}" class="btn btn-warning btn-sm float-end">Add Product</router-link></span>
            </div>
            <div class="card-body">
              <table class="table table-hover">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">Images</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(product, key) in products" :key="key">
                  <th scope="row">{{ ++key}}</th>
                  <td>{{ product.product_name }}</td>
                  <td>{{ product.category.category_name }} <i class="cil-arrow-right"></i> {{ product.subcategory.category_name }}</td>
                  <td>{{ product.price }}</td>
                  <td><img width="80px" :src="product.image_one"></td>
                  <td><span class="badge" :class="statusColor(product.status)">{{statusName(product.status)}}</span></td>
                  <td>
                    <div class="btn-groups">
                      <button class="btn btn-outline-primary" type="button" data-coreui-toggle="dropdown" aria-expanded="false"><i class="cil-options"></i></button>
                      <ul class="dropdown-menu">
                        <li><router-link :to="`/admin/edit-product/${product.id}`" class="dropdown-item">Show</router-link></li>
                        <li><router-link :to="`/admin/edit-product/${product.id}`" class="dropdown-item">Edit</router-link></li>
                        <li><button type="button" class="dropdown-item" @click="remove(product.id)">Delete</button></li>

                      </ul>
                    </div>
                  </td>
                </tr>

                </tbody>
              </table>
            </div>
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
import toastr from 'toastr';
export default {
  name: "Manage",

  data(){
    return {
      data:{}
    }
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products(){
        return this.$store.getters.products;
    }
  },
  methods: {

    remove: function (id) {
      this.confirm(() =>{
        axios.get("remove-product/" + id).then((response) => {
          // this.$toast.success(response.data.message)
          toastr.success(response.data.message)
          // this.$swal.fire(
          //   'Deleted!',
          //   'Your file has been deleted.',
          //   'success'
          // )
          this.getProducts()
        }).catch((error) =>{
          console.log(error)
        })
      });
    },
    
  }
}
</script>

<style scoped>

</style>