<template>
  <div class="nav">
    <div class="logo left">
      <img src="@img/ia_100000000.png" alt="学子商城" srcset />
    </div>
    <slot name="content"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'topNav',
  data() {
    return {

    }
  },
 }
</script>

<style scoped>
.nav {
  padding: 15px 3px 0;
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
