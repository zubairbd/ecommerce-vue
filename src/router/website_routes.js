import Vue from 'vue'
import VueRouter from 'vue-router'

import Checkout from "../views/website/Checkout";


Vue.use(VueRouter)

const router = [
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout,
        meta:{
        }
    },
]

export default router