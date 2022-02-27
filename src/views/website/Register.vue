<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card mb-4 mx-4">
            <form @submit.prevent="register">
            <div class="card-body p-4">
              <h1>Register</h1>
              <p class="text-medium-emphasis">Create your account</p>
              <div class="input-group mb-3"><span class="input-group-text">
                    <div class="icon">
                      <i class="la la-user"></i>

                    </div></span>
                <input class="form-control" v-model="formData.name" type="text" placeholder="Full Name">
              </div>
              <div class="input-group mb-3"><span class="input-group-text">
                    <div class="icon">
                      <i class="la la-email"></i>
                    </div></span>
                <input class="form-control" v-model="formData.email" type="text" placeholder="Email">
              </div>
              <div class="input-group mb-3"><span class="input-group-text">
                    <div class="icon">
                      <i class="cil-user"></i>
                    </div></span>
                <input class="form-control" v-model="formData.password" type="password" placeholder="Password">
              </div>
              <div class="input-group mb-4"><span class="input-group-text">
                    <div class="icon">
                      <i class="cil-user"></i>
                    </div></span>
                <input class="form-control" v-model="formData.password_confirmation" type="password" placeholder="Repeat password">
              </div>
              <button class="btn btn-block btn-success" type="submit">Create Account</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toastr from "toastr";

export default {
  name: "Register",
  data() {
    return{
      formData:{
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      }
    }
  },

  methods: {
    register(){
      this.$store.dispatch("register", this.formData)
          .then((res) =>{
            window.location.href = '/admin/dashboard'
            toastr.success(res.data.message)
          })
          .catch((error) =>{
            for (const [, v] of Object.entries(error.response.data.errors)){
              toastr.error(v)
            }
            // toastr.error(error.response.data.message)
          })
    }
  },
}
</script>

<style scoped>

</style>