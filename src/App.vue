<template>
  <div id="app">
    <nav-bar />
		<router-view></router-view>
    <footer-nav />
  </div>
</template>

<script>
import navBar from '@common/navbar'
import footerNav from '@common/footerNav'
export default {
  components:{
    navBar,
    footerNav
  }
}
</script>
<style>
@import "./assets/css/base.css";
@import "./assets/css/public.css";
html,
body{
  background: #F5F5F5;
}
</style>
