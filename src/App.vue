<template>
  <div id="app">
    <nav-bar />
    <index-nav />
  </div>
</template>

<script>
import navBar from '@common/navbar'
import indexNav from '@common/indexNav'
export default {
  components:{
    navBar,
    indexNav
  }
}
</script>
<style>
@import "./assets/css/base.css";

</style>
