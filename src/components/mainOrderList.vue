<template>
  <div class="w-max-box clear-fix">
    <order-nav :orderNav="orderNavBar" />
    <left-nav-bar />
  </div>
</template>

<script>
import leftNavBar from '@/common/leftNavBar'
import orderNav from "@/common/orderNav";
export default {
  name: "",
  components: {
    leftNavBar,
    orderNav
  },
  data() {
    return {
      orderNavBar: ["首页", "订单管理"]
    };
  }
};
</script>

<style scoped>
</style>
