<template>
  <div id="body">
    <div class="navlist">
      <ul>
        <li></li>
        <li class="navlist_blue">确认订单信息</li>
        <li class="navlist_blue_arro">
          <canvas id="cancas_blue" width="20" height="38"></canvas>
        </li>
        <li class="navlist_gray">
          支付订单
          <b></b>
        </li>
        <li class="navlist_gray_arro">
          <canvas id="cancas_gray" width="20" height="38"></canvas>
        </li>
        <li class="navlist_gray">
          支付完成
          <b></b>
        </li>
      </ul>
    </div>
    <div class="content_box">
      <b>确认商品信息</b>
    </div>
    <div class="orderconfirm">
      <el-table :data="productList" highlight-current-row>
        <el-table-column label="商品信息" width="400px">
          <template slot-scope="scope">
            <img v-bind:src="scope.row.img" height="80px;" class="f1" />
            <div class="des">
              <p>{{scope.row.name}}</p>
              <p>颜色：{{scope.row.color}}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="单价（元）" width="200px">
          <template slot-scope="scope">
            <p class="pices_des">达内专享价</p>
            <p>
              <b>￥</b>
              {{scope.row.price}}
            </p>
          </template>
        </el-table-column>
        <el-table-column label="数量" width="200px">
          <template slot-scope="scope">
            <p>
              <b></b>
              X{{scope.row.num}}
            </p>
          </template>
        </el-table-column>
        <el-table-column label="金额" width="200px">
          <template slot-scope="scope">
            <p>
              ￥
              <strong>{{scope.row.price*scope.row.num}}</strong>
            </p>
          </template>
        </el-table-column>
      </el-table>
      <div class="content_box">
        <div class="f3">
          <p>&lt;&lt;返回购物车</p>
        </div>
        <div class="f4">
          <div id="title">
            <p>
              已选
              <span class="total color">1</span>
              件商品
              <span class="interval"></span>
              合计(不含运费)
              <span class="totalPrices color susum">{{total}}</span>
              <span class="unit color">元</span>
            </p>
            <el-button type="primary" class="button_fukuan" @click="goToUrl">确认并付款</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
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
      total: 0,
      productList: [
        {
          id: 1,
          name:
            "联想（Lenovo) YOGA5 PRO 标配版电脑（i5-7200u  8G  512G SSD FHD IPS)银",
          color: "深空灰",
          img:
            "http://doc.canglaoshi.org/tstore_v1/images/cart/product_simg1.png",
          price: 4888.0,
          num: 1
        }
      ]
    };
  },
  methods: {
    handleChange() {
      console.log(this.productList);
      this.totalPrice();
    },
    totalPrice() {
      let total = 0;
      this.productList.forEach(p => {
        total += p.price * p.num;
      });
      console.log(total);
      this.total = total;
    },
    goToUrl(){
      this.$router.push("/payment")
    }
  },
  created() {
    this.totalPrice();
  }
};
</script>
<style scoped>
#body {
  width: 1000px;
  font: 12px;
}
.content_box b {
  text-align: left;
  line-height: 46px;
}
#title p {
  margin-top: 0px;
  float: left;
}
.total {
  font-size: 14px;
  padding: 0 3px;
  font-weight: bold;
}
.color {
  color: #0aa1ed;
}
.f1 {
  float: left;
  margin-top: 0px;
}
.f2 {
  float: right;
}
.des {
  display: inline-block;
  width: 270px;
  height: 28px;
  text-align: left;
  padding-left: 10px;
  margin-top: 0px;
  color: #959595;
}
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
.pices_des {
  color: #0aa1ed;
  /* margin-top: 46px; */
  font-weight: bold;
}
.f3 {
  float: left;
}
.f4 {
  float: right;
}
.content_box {
  width: 1000px;
  height: 46px;
  background: rgba(0, 0, 0, 0.05);
}
.button_fukuan {
  margin-left: 10px;
  background: #0aa1ed;
  width: 140px;
  height: 44px;
  color: #fff;
  text-align: center;
  font-size: 16px;
  right: 0px;
  box-shadow: 0 1px 2px #8fcaee inset, 0 -1px 0px #aff inset,
    0 -2px 3px #aaa inset;
  float: right;
}
.f4 #title p {
  padding-top: 8px;
}
</style>
