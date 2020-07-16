<template>
  <div id="body" class=" clear-fix">
    <div class="navlist">
      <ul>
        <li></li>
        <li class="navlist_gray">确认订单信息</li>
        <li class="navlist_gray_arro">
          <canvas id="cancas_blue" width="20" height="38"></canvas>
        </li>
        <li class="navlist_gray">
          支付订单
          <b></b>
        </li>
        <li class="navlist_gray_arro">
          <canvas id="cancas_gray" width="20" height="38"></canvas>
        </li>
        <li class="navlist_blue">
          支付完成
          <b></b>
        </li>
      </ul>
      <div id="container">
        <br />
        <br />
        <h1>
          <i>支付结果</i>
          <span class="rt">
            支付订单：123455666677&nbsp;支付金额：
            <b>4999.00元</b>
          </span>
        </h1>
        <div class="rightsidebar_box rt">
          <div class="pay_result">
            <img v-bind:src="icont" alt />
            <p>支付成功</p>
            <span>
              <a href="#">查看订单状态？</a>
              <b>
                <a href="#">查看订单状态？&gt;&gt;</a>
              </b>
            </span>
            <br />达内学子商城不会以系统异常、订单升级为由，要求你点击任何链接进行退款操作！
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.navlist {
  width: 1000px;
  height: 38px;
  margin: 25px auto;
}
ul {
  margin: 0px;
  padding: 0px;
  border: none;
  list-style: none;
}
.navlist li {
  float: left;
  height: 38px;
  line-height: 38px;
  position: relative;
}
.navlist_gray {
  background: rgba(0, 0, 0, 0.05);
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  width: 325px;
}
.navlist_blue {
  background: -webkit-linear-gradient(top, #27b0b6 0%, #0aa1ed 100%);
  text-align: center;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  width: 310px;
  height: 38px;
}
.navlist ul li b {
  width: 0;
  height: 0;
  border-bottom: 19px solid transparent;
  border-top: 19px solid transparent;
  border-left: 20px solid #fff;
  position: absolute;
  left: 0;
}
#container {
  width: 1000px;
  margin: 10px auto;
}
h1 {
  font-size: 12px;
  color: #808080;
  font-family: "microsoft yahei";
  margin-bottom: 11px;
  border-bottom: 1px solid #bbb;
  margin-top: 30px;
}
.rt {
  float: right;
}
h1 b {
  color: #0aa1ed;
  font: 16px;
  font-weight: bold;
}
#container .pay_result p {
  padding: 15px 15px 0 5px;
  font-size: 32px;
  font-family: simhei;
  color: #0aa1ed;
  margin-top: 46px;
  margin-bottom: 5px;
}
#container .pay_result img {
  float: left;
  padding: 50px 20px 0 66px;
}
img {
  border: 0px;
  vertical-align: middle;
  cursor: pointer;
}
b {
  font-weight: normal;
}
#container .pay_result {
  float: right;
  width: 448px;
  height: 90px;
  margin-right: 260px;
  margin-top: 130px;
  color: #808080;
  clear: both;
  margin-bottom: 176px;
  font-size: 12px;
}
#container .pay_result a {
  color: #bbb;
}
a,
a:hover {
  text-decoration: none;
}
i {
  font-style: normal;
}
h1 i {
  font-size: 16px;
}
</style>
<script>
window.onload = function() {
  var canvas1 = document.getElementById("cancas_blue");
  var context1 = canvas1.getContext("2d");
  canvas1.width = 20;
  canvas1.height = 38;
  context1.moveTo(0, 0);
  context1.lineTo(20, 19);
  context1.lineTo(0, 38);
  context1.fillStyle = "rgba(0,0,0,.05)";
  context1.fill();
  context1.lineWidth = 1;
  context1.strokeStyle = "rgba(0,0,0,.05)";
  context1.stroke();
  var canvas = document.getElementById("cancas_gray");
  var context = canvas.getContext("2d");
  canvas.width = 20;
  canvas.height = 38;
  context.moveTo(0, 0);
  context.lineTo(20, 19);
  context.lineTo(0, 38);
  context.fillStyle = "rgba(0,0,0,.05)";
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = "rgba(0,0,0,.05)";
  context.stroke();
};
export default {
  data() {
    return {
      icont: "http://doc.canglaoshi.org/tstore_v1/images/pay/pay_succ.png"
    };
  }
};
</script>
