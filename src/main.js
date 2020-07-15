import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import scroll from 'vue-seamless-scroll'
Vue.use(scroll)
Vue.use(scroll, { componentName: 'scroll-seamless' })

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
