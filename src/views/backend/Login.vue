<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="logo mb-4 text-center">
            <router-link to="/"><img src="logo-en.svg"></router-link>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card-group d-block d-md-flex row">
            <div class="card col-md-7 p-4 mb-0">
              <form @submit.prevent="adminLogin">
                <div class="card-body">
                  <h1>Login</h1>
                  <p class="text-medium-emphasis">Sign In to your account</p>
                  <div class="input-group mb-3"><span class="input-group-text">
                        <div class="icon">
                          <i class="cil-user"></i>
                        </div></span>
                    <input class="form-control" v-model="credential.email" type="text" placeholder="Username">
                  </div>
                  <div class="input-group mb-4"><span class="input-group-text">
                        <div class="icon">
                          <i class="cil-lock-locked"></i>
                        </div></span>
                    <input class="form-control" v-model="credential.password" type="password" placeholder="Password">
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <button class="btn btn-primary px-4" type="submit">Login</button>
                    </div>
                    <div class="col-6 text-end">
                      <button class="btn btn-link px-0" type="button">Forgot password?</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="card col-md-5 text-white bg-primary py-5">
              <div class="card-body text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <router-link :to="{name:'register'}" class="btn btn-lg btn-outline-light mt-3" type="button">Register Now!</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toastr from 'toastr'

export default {
  name: "Login",

  data() {
      return{
        credential:{
          email: 'superadmin@gmail.com',
          password: '1234',
        }
      }
  },

  methods: {
      adminLogin(){
          this.$store.dispatch("LOGIN", this.credential)
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