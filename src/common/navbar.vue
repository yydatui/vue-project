<template>
  <div class="nav">
    <div class="logo"></div>
    <div class="top-input">
      <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
    </div>
    <div class="top-right"></div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style scoped>
.nav {
  width: 1000px;
  margin: 0 auto;
}
</style>
