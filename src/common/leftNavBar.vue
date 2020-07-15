<template>
  <div class="navbar">
    <el-col :span="4">
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo"
        background-color="#0AA1ED"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-unfold"></i>
            <span>我的订单</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">全部订单</el-menu-item>
            <el-menu-item index="1-2">待付款</el-menu-item>
            <el-menu-item index="1-3">代收款 <span style="color:#0AA1ED"> 1</span></el-menu-item>
            <el-menu-item index="1-4">待评价</el-menu-item>
            <el-menu-item index="1-5">退货退款</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-coin"></i>
            <span>我的优惠券</span>
          </template>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-map-location"></i>
            <span>收货地址</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">全部订单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-s-custom"></i>
            <span>账号管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">我的信息</el-menu-item>
            <el-menu-item index="4-2">安全管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
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
.navbar i {
  color: #fff;
}
</style>
