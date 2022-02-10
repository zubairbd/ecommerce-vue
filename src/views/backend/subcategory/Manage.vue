<template>
  <div class="body flex-grow-1 px-3">
    <div class="container-lg">
      <div class="row">
        <div class="col-md-12">
          <div class="card mb-4">
            <div class="card-header bg-info">Sub Category List
              <span><router-link :to="{name:'subcategory-add'}" class="btn btn-warning btn-sm float-end">Add Sub Category</router-link></span>
            </div>
            <div class="card-body">
              <table class="table table-hover">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Category</th>
                  <th scope="col">Sub Category Name</th>
                  <th scope="col">Slug</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(row, key) in subcategories" :key="key">
                  <th scope="row">{{ ++key}}</th>
                  <td>{{ row.category.category_name }}</td>
                  <td>{{ row.category_name }}</td>
                  <td>{{ row.category_slug }}</td>
                  <td><span class="badge" :class="statusColor(row.status)">{{statusName(row.status)}}</span></td>
                  <td>
                    <div class="btn-groups">
                      <button class="btn btn-outline-primary" type="button" data-coreui-toggle="dropdown" aria-expanded="false"><i class="cil-options"></i></button>
                      <ul class="dropdown-menu">
                        <li><router-link :to="`/admin/edit-subcategory/${row.id}`" class="dropdown-item">Show</router-link></li>
                        <li><router-link :to="`/admin/edit-subcategory/${row.id}`" class="dropdown-item">Edit</router-link></li>
                        <li><button type="button" class="dropdown-item" @click="remove(row.id)">Delete</button></li>

                      </ul>
                    </div>
                  </td>
                </tr>

                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <!-- <pagination :data="data" @pagination-change-page="getSubCategories"></pagination> -->

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
export default {
  name: "Manage",

  data(){
    return {
      data:{}
    }
  },
  mounted() {
    this.$store.dispatch("getSubCategories");
  },
 
  computed: {
    subcategories(){
        return this.$store.getters.subcategories;
    }
  },
  methods: {
    remove: function (id) {
      this.confirm(() =>{
        axios.get("remove-subcategory/" + id).then((response) => {
          // toastr.success(response.data.message)
          this.$swal.fire(
            'Deleted!',
              response.data.message,
            'success'
          )
          this.getSubCategory()
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