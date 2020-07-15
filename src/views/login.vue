<template>
  <div class="login">
    <main-login />
  </div>
</template>

<script>
import mainLogin from "@/components/mainLogin";
export default {
  components: {
    mainLogin
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  margin: 0 auto 0;
  margin-top: 80px;
  height: 560px;
}
</style>
