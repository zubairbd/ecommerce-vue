<template>
  <div>
    <section class="pt-4 mb-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 text-center text-lg-left">
            <h1 class="fw-600 h4">{{ title }}</h1>
          </div>
          <div class="col-lg-6">
            <ul class="breadcrumb bg-transparent p-0 justify-content-center justify-content-lg-end">
              <li class="breadcrumb-item opacity-50">
                <router-link class="text-reset" to="/">Home</router-link>
              </li>
              <li class="text-dark fw-600 breadcrumb-item">
                <a class="text-reset">{{ title }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
    title: String
  }
}
</script>

<style scoped>

</style>