import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const baseURL = "http://127.0.0.1:8000/api/v1"

const token = LocalStorage.getItem('token')

export default {
  baseURL,
  headers: {
    'Content-type': 'application/json',
    Authorization: 'Bearer ${token}'
  }
}