import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Logout from '../components/backend/Logout.vue'
import Home from '../views/website/Home.vue'

import CategoryManage from "../views/backend/category/Manage"
import CategoryCreate from "../views/backend/category/Create"
import CategoryEdit from "../views/backend/category/Edit"
import SubCategoryManage from "../views/backend/subcategory/Manage"
import SubCategoryCreate from "../views/backend/subcategory/Create"
import SubCategoryEdit from "../views/backend/subcategory/Edit"
import BrandManage from "../views/backend/brand/Manage"
import BrandCreate from "../views/backend/brand/Create"
import BrandEdit from "../views/backend/brand/Edit"
import ProductManage from "../views/backend/product/Manage"
import ProductCreate from "../views/backend/product/Create"
import ProductEdit from "../views/backend/product/Edit"

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
    path: '/admin/',
    component: () => import('../views/backend/Index'),
    children: [
      {
        path: '/admin/dashboard',
        name: 'admin-dashboard',
        component: () => import('../views/backend/Dashboard'),
        meta:{
          requiresAuth: true
        }
      },
      // Category Route
      {
        path: '/admin/category',
        name: 'category',
        component: CategoryManage,
        meta:{
          requiresAuth: true
        }
      },
      {
        path: '/admin/add-category',
        name: 'category-add',
        component: CategoryCreate,
        meta:{
          requiresAuth: true
        }
      },
      {
        path: '/admin/edit-category/:id',
        name: 'category-edit',
        component: CategoryEdit,
        meta:{
          requiresAuth: true
        }
      },
      // Sub Category Route
      {
        path: '/admin/subcategory',
        name: 'subcategory',
        component: SubCategoryManage,
        meta:{
          requiresAuth: true
        }
      },
      {
        path: '/admin/add-subcategory',
        name: 'subcategory-add',
        component: SubCategoryCreate,
        meta:{
          requiresAuth: true
        }
      },
      {
        path: '/admin/edit-subcategory/:id',
        name: 'subcategory-edit',
        component: SubCategoryEdit,
        meta:{
          requiresAuth: true
        }
      },

      // Brand Route
      {
        path: '/admin/brands',
        name: 'brands',
        component: BrandManage,
        meta:{
          requiresAuth: true
        }
      },
      {
        path: '/admin/add-brand',
        name: 'brand-add',
        component: BrandCreate,
        meta:{
          requiresAuth: true
        }
      },
      {
        path: '/admin/edit-brand/:id',
        name: 'brand-edit',
        component: BrandEdit,
        meta:{
          requiresAuth: true
        }
      },

      // Product Route
      {
        path: '/admin/products',
        name: 'products',
        component: ProductManage,
        meta:{
          requiresAuth: true
        }
      },
      {
        path: '/admin/add-product',
        name: 'product-add',
        component: ProductCreate,
        meta:{
          requiresAuth: true
        }
      },
      {
        path: '/admin/edit-product/:id',
        name: 'product-edit',
        component: ProductEdit,
        meta:{
          requiresAuth: true
        }
      },
      
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/backend/Login.vue'),
    meta:{
      visited: true
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
    
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({name: 'login'})
    }else{
      next()
    }
  }else if (to.matched.some(record => record.meta.visited)) {
    if (store.getters.loggedIn) {
      next({name: 'admin-dashboard'})
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router
