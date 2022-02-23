<template>
  <div class="col-xl-3 order-1 order-xl-0">
    <div class="bg-white rounded shadow-sm mb-3">
      <div class="p-3 border-bottom fs-16 fw-600">
        Categories
      </div>
      <div class="px-3">
        <ul class="list-group list-group-flush">
          <li v-for="category in categories" :key="category.id" class="py-1 px-0 list-group-item border-light">
            <router-link :to="`/category/${category.category_slug}`" class="text-reset fs-14">{{category.category_name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  mounted() {
    this.$store.dispatch("getActiveCategories");
  },
  computed:{
    categories(){
      return this.$store.getters.categories;
    },
  },
}
</script>

<style scoped>

</style>