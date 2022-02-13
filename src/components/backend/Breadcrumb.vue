<template>
  <!-- <div class="header-divider"></div> -->
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb my-0 ms-2">
        <li class="breadcrumb-item">
          <!-- if breadcrumb is single--><span><router-link :to="{name:'admin-dashboard'}">Home</router-link></span>
        </li>
        <li class="breadcrumb-item active"><span>{{ title }}</span></li>
      </ol>
    </nav>
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