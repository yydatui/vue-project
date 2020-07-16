<template>
  <div class="personal clear-fix">
    <left-nav-bar />
    <main-password />
    <footer-box />
  </div>
</template>

<script>
import leftNavBar from '@/common/leftNavBar'
import mainPassword from '@/components/mainPassword'
import footerBox from '@/common/footerBox'
export default {
  name: '',
  components: {
    leftNavBar,
    mainPassword,
    footerBox
  },
  data() {
    return {

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
</style>
