<template>
  <div class="personal clear-fix">
    <order-nav :orderNav="orderNav" />
    <left-nav-bar />
    <main-personal />
    <footer-box class="clear"/>
  </div>
</template>

<script>
import orderNav from '@/common/orderNav'
import leftNavBar from '@/common/leftNavBar'
import mainPersonal from '@/components/mainPersonal'
import footerBox from '@/common/footerBox'
export default {
  name: '',
  components:{
    leftNavBar,
    orderNav,
    footerBox,
    mainPersonal
  },
  data() {
    return {
      orderNav: ["首页","个人中心"]
    }
  },
 }
</script>

<style scoped>
.personal{
  width: 1000px;
  margin: 0 auto 0;
  padding: 20px 0;
}
.clear::before{
  content: "";
  display: block;
  clear: both;
}
</style>
