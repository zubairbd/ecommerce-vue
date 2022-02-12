<template>
  <div>
    <Sidebar/>
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <header class="header header-sticky mb-4">
        <Header/>

      </header>
      <Spinner :load="spin.val" />
      <router-view/>
      <footer class="footer">
        <div><a href="https://coreui.io">CoreUI </a><a href="https://coreui.io">Bootstrap Admin Template</a> © 2021 creativeLabs.</div>
        <div class="ms-auto">Powered by&nbsp;<a href="https://coreui.io/bootstrap/ui-components/">CoreUI UI Components</a></div>
      </footer>
    </div>
  </div>
</template>

<script>
import Sidebar from "../../components/backend/Sidebar";
import Header from "../../components/backend/Header";
import Spinner from '../../components/backend/Spinner.vue'
export default {
  name: "Index",
  components: {Header, Sidebar, Spinner},
  data() {
    return{
      spin:{
        val: false
      }
    }
  },
  provide(){
    return{
      mySpinner: this.spin
    }
  },
  methods: {

  },
}
</script>

<style scoped>

</style>