<template>
  <div class="spinner-bg">
    <div class="spinner">
      <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style scoped>
.spinner-bg{
  z-index: 9999;
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 255, 255, 1);
  position: fixed;
  margin-left: -16px !important;
  margin-top: -10px;
}
.spinner{
  position: absolute;
  top: 26%;
  left: 35%;
  margin: 0 auto;
  height: 100%;
}


</style>