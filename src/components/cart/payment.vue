<template>
  <div id="body">
    <div class="navlist">
      <ul>
        <li></li>
        <li class="navlist_gray">确认订单信息</li>
        <li class="navlist_gray_arro">
          <canvas id="cancas_gray" width="20" height="38"></canvas>
        </li>
        <li class="navlist_blue">
          支付订单
          <b></b>
        </li>
        <li class="navlist_blue_arro">
          <canvas id="cancas_blue" width="20" height="38"></canvas>
        </li>
        <li class="navlist_gray">
          支付完成
          <b></b>
        </li>
      </ul>
    </div>
    <form method="post" action="#" id="pay_form">
      <div id="container" class="clearfix">
        <div class="pay_info">
          <b>
            支付金额：
            <i>4800</i>元
          </b>
          <span>支付订单：32523535&nbsp;收款方：达内商城</span>
        </div>
        <div id="pay_type">
          <div class="pay_type_title">
            <b>网上银行支付</b>
          </div>
          <div id="bank">
            <ul>
              <li>
                <input type="radio" name="bankId" id="zgbank" />
                <label for="zgbank">
                  <img v-bind:src="icont" />
                </label>
              </li>
              <li>
                <input type="radio" name="bankId" id="gsbank" />
                <label for="gsbank">
                  <img v-bind:src="icont1" />
                </label>
              </li>
              <li>
                <input type="radio" name="bankId" id="zsbank" />
                <label for="zsbank">
                  <img v-bind:src="icont2" />
                </label>
              </li>
              <li>
                <input type="radio" name="bankId" id="jsbank" />
                <label for="jsbank">
                  <img v-bind:src="icont3" />
                </label>
              </li>
              <li>
                <input type="radio" name="bankId" id="nybank" />
                <label for="nybank">
                  <img v-bind:src="icont4" />
                </label>
              </li>
            </ul>
          </div>
          <div id="count_bar">
            <span class="pay_time">
              剩余付款时间：
              <b>15:00</b>
            </span>
            <span class="pay_ok" @click="goToUrl">确认支付</span>
          </div>
        </div>
      </div>
    </form>
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
#container .pay_info {
  color: #808080;
  padding: 0 2px;
  font-size: 12px;
}
#container .pay_info b i {
  color: #0aa1ed;
  font-weight: bold;
}
#container .pay_info span {
  float: right;
  padding-right: 2px;
}
#pay_type .pay_type_title {
  background: -webkit-linear-gradient(top, #f5f4f5 0%, #e6e6e5 100%);
  box-shadow: 3px 3px 3px #ccc;
  color: #808080;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  padding: 0 18px;
}
#bank ul {
  background: #fff;
  width: 1000px;
  box-sizing: border-box;
  padding: 35px 16px 25px 18px;
  float: left;
  box-shadow: 3px 3px 6px #ccc;
}
#bank ul li {
  float: left;
  margin: 0 13px 10px;
}
#container #count_bar {
  margin-top: 260px;
  margin-bottom: 10px;
  width: 1000px;
  height: 54px;
  line-height: 54px;
  background: -webkit-linear-gradient(top, #f5f4f5 0%, #e6e6e5 100%);
  box-shadow: 3px 3px 6px 0px #ccc;
  clear: both;
}
#count_bar .pay_time {
  padding: 0 16px;
  color: #636363;
}
#count_bar .pay_ok {
  float: right;
  margin: 11px 16px;
  width: 86px;
  height: 32px;
  cursor: pointer;
  line-height: 32px;
  box-sizing: border-box;
  text-align: center;
  background: -webkit-linear-gradient(top, #ffb20f, #eda50b);
  color: #fff;
}

#count_bar span {
  font-size: 12px;
  text-align: left;
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
  context1.fillStyle = "rgba(30,152,233,.8)";
  context1.fill();
  context1.lineWidth = 1;
  context1.strokeStyle = "rgba(30,152,233,.8)";
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
      icont: "http://doc.canglaoshi.org/tstore_v1/images/pay/pay_img1.jpg",
      icont1: "http://doc.canglaoshi.org/tstore_v1/images/pay/pay_img2.jpg",
      icont2: "http://doc.canglaoshi.org/tstore_v1/images/pay/pay_img3.jpg",
      icont3: "http://doc.canglaoshi.org/tstore_v1/images/pay/pay_img4.jpg",
      icont4: "http://doc.canglaoshi.org/tstore_v1/images/pay/pay_img5.jpg"
    };
  },
  methods:{
    goToUrl(){
      this.$router.push("/paySuccess")
    }
  }
};
</script>
