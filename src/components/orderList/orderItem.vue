<template>
  <div class="orderitem">
    <div v-for="(item,index) in countArry" :key="index">
      <order-title-item />
      <order-detail-item />
    </div>
  </div>
</template>

<script>
import orderTitleItem from "@/components/orderList/orderTitleItem";
import orderDetailItem from "@/components/orderList/orderDetailItem";
export default {
  name: "",
  components: {
    orderTitleItem,
    orderDetailItem,
  },
  data() {
    return {
      countArry: [1, 2, 3, 4]
    };
  }
};
</script>

<style scoped>
.orderitem {
  width: 820px;
}
</style>
