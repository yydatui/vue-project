import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Favorites from '../views/favorites'
import About from '@views/About'
Vue.use(VueRouter)


import Index from '@views/index'
import Login from '@views/login'
import Orders from '@views/orders'
import Detail from '../views/detail.vue'

const routes = [{
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  }, {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },{
		path: '/detail',
		name: 'Detail',
		component:Detail
	}
]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

export default router
