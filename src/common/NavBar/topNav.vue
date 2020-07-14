<template>
  <div class="nav">
    <div class="logo left">
      <a href="/index"><img :src="logourl" alt="学子商城" srcset /></a>
      <slot name="left"></slot>
    </div>

    <slot name="content"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'topNav',
  props:{
    logourl:{
      type: String,
      default: "http://doc.canglaoshi.org/tstore_v1/images/header/logo.png"
    }
  },
  data() {
    return {

    }
  },
 }
</script>

<style scoped>
.nav {
  padding: 15px 0;
  width: 1000px;
  height: 60px;
  margin: 0 auto 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>
