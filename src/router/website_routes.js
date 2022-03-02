import Vue from 'vue'
import VueRouter from 'vue-router'
import PurchaseHistory from "../views/website/user/PurchaseHistory";

Vue.use(VueRouter)

const routers = [
    {
        path: '/purchase-history',
        name: 'purchase',
        component: PurchaseHistory,
        meta:{
        }
    },
]

export default routers