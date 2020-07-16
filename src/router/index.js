import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//路由懒加载
const About = () =>
  import ("@views/About")
const Home = () =>
  import ("@views/Home")

const Index = () =>
  import ("@views/index")
const Login = () =>
  import ("@views/login")
const Orders = () =>
  import ("@views/orders")
const Register = () =>
  import ("@views/register")
const Favorites = () =>
  import ("@views/favorites")
const Detail = () =>
  import ("@views/detail")
const Address = () =>
  import ("@views/address")
const PersonalPassword = () =>
  import ("@views/personalPassword")
const Personal = () =>
  import ("@views/personal")
const Cart = () =>
  import ("@views/cart")
const OrderConfirm = () =>
  import ("@views/orderConfirm")
const Payment = () =>
  import ("@views/payment")
const PaySuccess = () =>
  import ("@views/paySuccess")
  const Help = () => import ("@views/help")

// import About from '@views/About'
// import Home from '@views/Home'

// import Index from '@views/index'
// import Login from '@views/login'
// import Orders from '@views/orders'
// import Register from '@views/register'
// import Favorites from '@views/favorites'
// import Detail from '../views/detail.vue'

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
    meta: {
      title: "我的收藏 - 学子商城守护您的优质商品"
    }
  }, {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      title: "商品详情 - 学子商城守护您的优质商品"
    }
  }, {
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
    meta: {
      title: "注册 - 学子商城守护您的优质商品"
    }
  }, {
    path: "/address",
    name: "Address",
    component: Address,
    meta: {
      title: "地址管理 - 学子商城守护您的优质商品"
    }
  }, {
    path: "/personal_password",
    component: PersonalPassword,
    meta: {
      title: "账户安全 - 学子商城守护您的优质商品"
    }
  }, {
    path: "/personal",
    component: Personal,
    meta: {
      title: "我的信息 - 学子商城守护您的优质商品"
    }
  }, {
    path: "/cart",
    component: Cart,
    meta: {
      title: "购物车 - 学子商城守护您的优质商品"
    }
  }, {
    path: "/orderConfirm",
    component: OrderConfirm,
    meta: {
      title: "确认订单 - 学子商城守护您的优质商品"
    }
  }, {
    path: "/payment",
    component: Payment,
    meta: {
      title: "支付页面 - 学子商城守护您的优质商品"
    }
  }, {
    path: "/paySuccess",
    component: PaySuccess,
    meta: {
      title: "支付成功 - 学子商城守护您的优质商品"
    }
  }, {
    path: "/help",
    component: Help,
    meta: {
      title: "帮助中心 - 学子商城守护您的优质商品"
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
  let title = to.matched[0].meta.title
  document.title = typeof title != "undefined" ? title : "欢迎您 - 学子商城守护您的优质商品"
  window.scrollTo(0, 0)
  next()
})

export default router
