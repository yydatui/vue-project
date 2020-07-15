<template>
  <div class="pagecode">
    <el-pagination
      prev-text="上一页"
      next-text="下一页"
      background
      layout="prev, pager, next"
      :total="60"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<style scoped>
.pagecode {
  background-image: linear-gradient(to bottom, #f5f4f5 0%, #e6e6e5 100%);
  border-radius: 3px;
  padding-right: 20px;
  text-align: right;
  color: #ccc;
  float: right;
  right: 10px;
  width: 820px;
  height: 41px;
  line-height: 41px;
  box-shadow: 3px 3px 6px #ccc;
  margin-top: 25px;
}
</style>
