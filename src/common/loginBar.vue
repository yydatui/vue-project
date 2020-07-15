<template>
  <div class>
    <top-nav :style="{marginBottom:margin}">
      <span slot="left" class="login-text">欢迎登陆</span>
    </top-nav>
  </div>
</template>

<script>
import topNav from "@common/NavBar/topNav";
export default {
  name: "",
  props:{
    margin:{
      type: String,
      default: "30px"
    }
  },
  components: {
    topNav
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.login-text {
  color: #4f4d4e;
  font-size: 24px;
  vertical-align: baseline;
  position: relative;
  top: -10px;
  left: 20px;

}
</style>
