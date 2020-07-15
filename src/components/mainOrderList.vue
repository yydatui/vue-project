<template>
  <div class="w-max-box clear-fix">
    <div class="order-box right">
      <order-table />
      <order-item />
      <page-code />
    </div>
  </div>
</template>

<script>
import orderTable from '@/components/orderList/orderTable'
import orderItem from '@/components/orderList/orderItem'
import pageCode from '@/components/orderList/pageCode'
export default {
  name: "",
  components: {
    orderTable,
    orderItem,
    pageCode
  },
  data() {
    return {

    };
  }
};
</script>

<style scoped>
</style>
