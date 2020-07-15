import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//路由懒加载
const About = () =>
  import ("@views/About")
const Home = () =>
  import ("@views/Home")

const Index = () => import("@views/index")
const Login = () => import("@views/login")
const Orders = () => import("@views/orders")
const Register = () => import("@views/register")
const Favorites = () => import("@views/favorites")
const Detail = () => import("@views/detail")

// import About from '@views/About'
// import Home from '@views/Home'

// import Index from '@views/index'
// import Login from '@views/login'
// import Orders from '@views/orders'
// import Register from '@views/register'
// import Favorites from '@views/favorites'
// import Detail from '../views/detail.vue'

import Detail from '../views/detail.vue'

const routes = [{
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      title: "首页 - 学子商城守护您的优质商品"
    }
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    meta: {
      title: "首页 - 学子商城守护您的优质商品"
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: "登陆 - 学子商城守护您的优质商品"
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: "首页 - 学子商城守护您的优质商品"
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: "关于 - 学子商城守护您的优质商品"
    }
  }, {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
    meta:{
       title: "我的收藏 - 学子商城守护您的优质商品"
     }
  },{
		path: '/detail',
		name: 'Detail',
		component:Detail,
		meta:{
		   title: "商品详情 - 学子商城守护您的优质商品"
		 }
	},{
		path: '/orders',
		name: 'Orders',
    component: Orders,
    meta: {
      title: "我的订单 - 学子商城守护您的优质商品"
    }
  }, {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
       title: "注册 - 学子商城守护您的优质商品"
     }
  },{
		path: '/detail',
		name: 'Detail',
    component:Detail,
    meta: {
      title: "商品详情 - 学子商城守护您的优质商品"
    }
	}
]

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

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router