import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
=======
import Home from '../views/Home.vue'
import ShouCang from '../views/shouCang.vue'

>>>>>>> commit
Vue.use(VueRouter)


import Index from '@views/index'
import Login from '@views/login'

const routes = [{
    path: '/',
    name: 'Index',
    component: Index
  },
  {
<<<<<<< HEAD
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
=======
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
		path: '/shoucang',
		name: 'ShouCang',
		component: ShouCang
	}
>>>>>>> commit
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