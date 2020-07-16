<template>
  <div class="cart">
    <cars />
    <footer-box />
  </div>
</template>

<script>
import cars from '@/components/cart/cars'
import footerBox from '@/common/footerBox'
export default {
  name: '',
  components: {
    cars,
    footerBox
  },
  data() {
    return {

    }
  },
 }
</script>

<style scoped>
.cart{
  width: 1000px;
  margin: 0 auto 0;
}
</style>
