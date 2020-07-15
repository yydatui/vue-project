<template>
  <div class="detail-item">
    <ul class="clear-fix">
      <li class="product bordert">
        <b class="left">
          <a href="/detail">
            <img :src="detail.img_url" alt />
          </a>
        </b>
        <b class="left name">
          <a href="#">{{detail.title}}</a>
          <br />
        </b>
        <b>颜色:{{detail.color}}</b>
      </li>
      <li class="price bordert clear-fix">
        <p>
          <br />
          <b>专属价</b>
          <br />
          <br />
          <b>￥{{ detail.price }}</b>
        </p>
      </li>
      <li class="count bordert">
        <p>{{ detail.count }}件</p>
      </li>
      <li class="sale bordert">
        <br />
        <p>
          <a href="#">退货/换货</a>
        </p>
        <br />
        <p>
          <a href="#">我要维权</a>
        </p>
      </li>
      <li class="payments bordert">
        <p>{{ subtotal }}</p>
      </li>
      <li class="status bordert">
        <br />
        <p>
          <a href="#">
            <img src="http://doc.canglaoshi.org/tstore_v1/images/myOrder/car.png" alt />
            <span>已发货</span>
          </a>
        </p>
        <p><a href="#">
          订单详细</a></p>
        <p><a href="#">查看物流</a></p>
      </li>
      <li class="operate">
        <p>
          <el-button type="primary">确认收货</el-button>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    detail: {
      type: Object,
      default() {
        return {
          img_url:
            "http://doc.canglaoshi.org/tstore_v1/images/myOrder/product_img1.png",
          title: "联想(Lenovo)YoGA5 PRO 标配版电脑",
          color: "深灰色",
          price: "8800.00",
          count: 1
        };
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    subtotal() {
      return "￥" + this.detail.price * this.detail.count;
    }
  }
};
</script>

<style lang="scss" scoped>
.detail-item {
  background: #fff;
  font: 12px simhei;
  .bordert {
    border-right: 1px solid #e8e8e8;
  }
  b {
    font: 12px simhei;
    // padding: 5px;
    padding-left: 10px;
  }
  .name {
    padding: 10px 0;
    padding-left: 10px;
    overflow: hidden;
  }
  li {
    padding-top: 10px;
    padding-bottom: 10px;
    // display: inline-block;
    height: 116px;
    max-height: 116px;
    float: left;
    p {
      text-align: center;
    }
  }
  .product {
    padding-left: 12px;
    vertical-align: middle;
    width: 320px;
    text-align: left;
  }
  .price {
    width: 80px;
    p {
      text-align: center;
      b {
        padding: 0;
        margin: 10px 0;
      }
    }
  }
  .count {
    width: 49px;
    line-height: 80px;
  }
  .sale {
    width: 81px;
  }
  .payments {
    width: 95px;
    line-height: 80px;
  }
  .status {
    width: 89px;
    p{
      margin-bottom: 5px;
    }
  }
  .operate{
    width: 80px;
    p{
      padding-left: 20px;
      padding-top: 30px;
    }
  }
}
</style>
