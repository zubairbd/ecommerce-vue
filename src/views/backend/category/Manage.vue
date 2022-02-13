<template>
  <div class="body flex-grow-1 px-3">
    <Preloader v-if="loadingStatus" />
    <div class="container-lg">
      <div class="row">
        <div class="col-md-12">
          <div class="card mb-4">
            <div class="card-header bg-info">Category List
              <span><router-link :to="{name:'category-add'}" class="btn btn-warning btn-sm float-end">Add Category</router-link></span>
            </div>
            <div class="card-body">
              <table class="table table-hover">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Category Name</th>
                  <th scope="col">Slug</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(row, key) in categories" :key="key">
                  <th scope="row">{{ ++key}}</th>
                  <td>{{ row.category_name }}</td>
                  <td>{{ row.category_slug }}</td>
                  <td><span class="badge" :class="statusColor(row.status)">{{statusName(row.status)}}</span></td>
                  <td>
                    <div class="btn-groups">
                      <button class="btn btn-outline-primary" type="button" data-coreui-toggle="dropdown" aria-expanded="false"><i class="cil-options"></i></button>
                      <ul class="dropdown-menu">
                        <li><router-link :to="`/admin/edit-category/${row.id}`" class="dropdown-item">Show</router-link></li>
                        <li><router-link :to="`/admin/edit-category/${row.id}`" class="dropdown-item">Edit</router-link></li>
                        <li><button type="button" class="dropdown-item" @click="remove(row.id)">Delete</button></li>

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
import Preloader from "../../../components/backend/Preloader";
export default {
  name: "Manage",
  components: {Preloader},
  data(){
    return {
      data:{},
      // isLoading: true
    }
  },
  mounted() {
    this.$store.dispatch("getCategories");
    // this.isLoading = false;
  },
  computed: {
    categories(){
        return this.$store.getters.categories;
    },
    loadingStatus(){
      return this.$store.getters.loadingStatus;
    }
  },
  methods: {

    remove: function (id) {
      this.confirm(() =>{
        axios.get("remove-category/" + id).then((response) => {
          toastr.success(response.data.message)
          this.$store.dispatch("getCategories");
          // this.$swal.fire(
          //   'Deleted!',
          //   'Your file has been deleted.',
          //   'success'
          // )
          this.getCategory()
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