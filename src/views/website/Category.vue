<template>
    <div>
      <Breadcrumb title="All Categories" />
      <section class="mb-4">
        <div class="container">
          <div class="card">
            <div class="card-header">
                <a href="https://bongobaba.com/category/electronic-device" class="text-reset fs-16 fw-600">Electronic Device</a>
            </div>
            <div class="card-body">
              <div class="row">
                <div v-for="category in categories" :key="category.id" class="col-lg-4 col-6 text-left">
                  <h6 class="mb-3"><router-link class="text-reset fw-600 fs-14" :to="`/category/${category.category_slug}`">{{category.category_name}}</router-link></h6>
                  <ul class="mb-3 list-unstyled pl-2">
                    <li v-for="subcat in category.subcategory" :key="subcat.id" class="mb-2">
                      <router-link class="text-reset" :to="`/category/${subcat.category_slug}`">{{subcat.category_name}}</router-link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
  import Breadcrumb from "../../components/frontend/Breadcrumb";
  import axios from "axios";
    export default {
      components: {Breadcrumb},
      data(){
        return {
          categories: {}
        }
      },
      mounted() {
        this.getCategory()
      },
      methods:{
        getCategory() {
          axios.get('get-all-categories')
              .then((response) =>{
                this.categories = response.data.data
              })
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>