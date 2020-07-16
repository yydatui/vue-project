<template>
  <div class="address clear-fix">
    <left-nav-bar />
    <main-address />
    <footer-box />
  </div>
</template>

<script>
import leftNavBar from '@/common/leftNavBar'
import mainAddress from '@/components/mainAddress'
import footerBox from '@/common/footerBox'
export default {
  name: '',
  components:{
    leftNavBar,
    mainAddress,
    footerBox
  },
  data() {
    return {

    }
  },
 }
</script>

<style scoped>
.address{
  width: 1000px;
  margin: 0 auto 0;
  padding: 20px 0;
}
</style>
