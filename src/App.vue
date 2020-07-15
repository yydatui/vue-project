<template>
  <div id="app">
    <nav-bar v-if="isShowBar" />
    <login-bar v-else />
    <index-nav v-if="isShowBar" />
		<router-view></router-view>
    <footer-box v-if="!isShowBar" />
    <footer-nav />
  </div>
</template>

<script>
import loginBar from '@common/loginBar'
import navBar from '@common/navbar'
import indexNav from '@common/indexNav'
import footerNav from '@common/footerNav'
import footerBox from '@/common/footerBox'
export default {
  components:{
    loginBar,
    navBar,
    indexNav,
    footerNav,
    footerBox
  },
  data(){
    return {
      isShowBar: true
    }
  },
  watch:{   //监听路由变化
    $route( to , from ){
      let path = to.path
      this.isShowBar = (path == "/login" || path == "/register") ? false : true
     }
}
}
</script>
<style>
@import "./assets/css/base.css";
@import "./assets/css/public.css";
html,
body{
  scroll-behavior: smooth;
  background: #F5F5F5;
}
</style>
