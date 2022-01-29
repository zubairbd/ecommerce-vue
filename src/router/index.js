import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/website/Home.vue'
import Manage from "../views/backend/agent/Manage";
import Create from "../views/backend/agent/Create";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/website/About.vue')
  },
  {
    path: '/',
    component: () => import('../views/backend/Index'),
    children: [
      {
        path: '/admin/dashboard',
        name: 'admin-dashboard',
        component: () => import('../views/backend/Dashboard'),
      },
      {
        path: '/admin/agents',
        name: 'agents',
        component: Manage,
      },
      {
        path: '/admin/add-agent',
        name: 'agent-add',
        component: Create,
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/backend/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
