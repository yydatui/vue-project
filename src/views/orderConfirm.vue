<template>
  <div class="order-confirm">
    <order-confirm />
    <footer-box />
  </div>
</template>

<script>
import orderConfirm from '@/components/cart/orderConfirm'
import footerBox from '@/common/footerBox'
export default {
  name: '',
  components:{
    footerBox,
    orderConfirm
  },
  data() {
    return {

    }
  },
 }
</script>

<style scoped>
.order-confirm{
  width: 1000px;
  margin: 0 auto 0;
}
</style>
