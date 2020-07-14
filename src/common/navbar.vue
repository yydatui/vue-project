<template>
  <div class="nav">
    <top-nav>
      <div slot="content">
        <div class="top-input left">
          <el-input placeholder="请输入您要输入的内容" v-model="input" clearable suffix-icon="el-icon-search"></el-input>
        </div>
      </div>
      <div slot="right">
        <div class="top-right right">
          <ul>
            <li>
              <a href="/favorites" title="我的收藏">
                <i class="el-icon-folder"></i>
              </a>
              <b>|</b>
            </li>
            <li>
              <a href="/orders" title="我的订单">
                <i class="el-icon-s-order"></i>
              </a>
              <b>|</b>
            </li>
            <li>
              <a href="/cart" title="我的购物车">
                <i class="el-icon-shopping-cart-full"></i>
              </a>
              <b>|</b>
            </li>
            <li>
              <a href="/help">帮助</a>
              <b>|</b>
            </li>
            <li>
              <a href="/login">登陆</a>
            </li>
          </ul>
        </div>
      </div>
    </top-nav>
  </div>
</template>

<script>
import topNav from "@common/NavBar/topNav";
export default {
  name: "navbar",
  components: {
    topNav
  },
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style>
.nav{
  background: #F5F5F5;
  transition: all 0.1s;
}
.top-input {
  position: relative;
  margin-left: 113px;
}
.top-input .el-input__inner {
  width: 410px;
}
.top-right ul li {
  display: inline-block;
  line-height: 40px;
}
.top-right ul li b{
  padding: 3px 14px;
}
.top-right ul li a:hover{
  color: #0AA1ED;
}
.top-right li i{
  font-size: 20px;
}
</style>
