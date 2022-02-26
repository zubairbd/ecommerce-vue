<template>
  <div>
    <Breadcrumb title="All Brands" />
    <section class="mb-4">
      <div class="container">
        <div class="bg-white shadow-sm rounded px-3 pt-3">
          <div class="row row-cols-xxl-6 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 gutters-10">
            <div v-for="brand in brands" :key="brand.id" class="col text-center">
              <router-link to="`/brand/`" class="d-block p-3 mb-3 border border-light rounded hov-shadow-md">
                <img :src="brand.image" class="mx-auto h-70px mw-100 ls-is-cached lazyloaded" :alt="brand.brand_name">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Breadcrumb from "../../components/frontend/Breadcrumb";
export default {
  name: "Brands",
  components: {Breadcrumb},
  data(){
    return {
      brands: {},

    }
  },
  mounted() {
    this.getBrands()
  },
  methods:{
    getBrands() {
      axios.get('get-brands')
      .then((response) =>{
        this.brands = response.data.data
      })
    }
  }
}
</script>

<style scoped>

</style>