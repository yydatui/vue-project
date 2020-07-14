<template>
  <div id="app">
    <nav-bar />
    <index-nav />
		<router-view></router-view>
    <footer-nav />
  </div>
</template>

<script>
import navBar from '@common/navbar'
import indexNav from '@common/indexNav'
import footerNav from '@common/footerNav'
export default {
  components:{
    navBar,
    indexNav,
    footerNav
  }
}
</script>
<style>
@import "./assets/css/base.css";
html,
body{
  background: #F5F5F5;
}
</style>
