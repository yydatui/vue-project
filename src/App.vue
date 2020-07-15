<template>
  <div id="app">
    <nav-bar v-if="isShowBar" />
    <login-bar v-else />
    <index-nav v-if="isShowBar" />
		<router-view></router-view>
    <footer-nav />
  </div>
</template>

<script>
import loginBar from '@common/loginBar'
import navBar from '@common/navbar'
import indexNav from '@common/indexNav'
import footerNav from '@common/footerNav'
export default {
  components:{
    loginBar,
    navBar,
    indexNav,
    footerNav
  },
  data(){
    return {
      isShowBar: true
    }
  },
  created(){
    let path = this.$route.path
    this.isShowBar = (path == "/login" || path == "/register") ? false : true
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
