<template>
  <div class="order w-max-box">
    <order-nav :orderNav="orderNavBar" />
    <left-nav-bar />
    <main-order-list />
    <footer-box />
  </div>
</template>

<script>
import orderNav from "@/common/orderNav";
import leftNavBar from "@/common/leftNavBar";
import mainOrderList from "@components/mainOrderList";
import footerBox from '@/common/footerBox'
export default {
  name: "",
  components: {
    orderNav,
    leftNavBar,
    mainOrderList,
    footerBox
  },
  data() {
    return {
      orderNavBar: ["首页", "订单管理"]
    };
  }
};
</script>

<style scoped>
.order{
  min-height: 560px;
  margin-bottom: 30px;
}
</style>
