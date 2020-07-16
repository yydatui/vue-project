<template>
  <div id="body">
    <div class="big">
      <div id="title">
        <b>购物车</b>
        <p>
          已选
          <span class="total color">0</span>
          件商品
          <span class="interval"></span>
          合计(不含运费)
          <span class="totalPrices color susum">{{total}}</span>
          <span class="unit color">元</span>
        </p>
      </div>
    </div>
    <div>
      <el-table :data="productList" highlight-current-row>
        <el-table-column label="全选" width="100" style="color:red">
          <template scope="scope">
            <el-checkbox v-model="scope.row.checked"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column label="商品" width="400px">
          <template slot-scope="scope">
            <img v-bind:src="scope.row.img" height="80px;" class="f1" />
            <div class="des">
              <p>{{scope.row.name}}</p>
              <p>颜色：{{scope.row.color}}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="单价（元）" width="100px">
          <template slot-scope="scope">
            <p class="pices_des">达内专享价</p>
            <p>
              <b>￥</b>
              {{scope.row.price}}
            </p>
          </template>
        </el-table-column>
        <el-table-column label="数量" width="150px">
          <template slot-scope="scope">
            <el-input-number
              v-model="scope.row.num"
              @change="handleChange"
              :min="1"
              :max="10"
              size="small"
            ></el-input-number>
          </template>
        </el-table-column>
        <el-table-column label="金额">
          <template slot-scope="scope">
            <p>{{scope.row.price*scope.row.num}}</p>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100px">
          <template slot-scope="scope">
            <el-popover placement="top" v-model="scope.row.remove">
              <p>亲！确定删除此商品吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="scope.row.remove=false">取消</el-button>
                <el-button type="primary" size="mini" @click="removeId(scope.row)">确定</el-button>
              </div>
              <el-button slot="reference" size="small" type="text">删除</el-button>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
      <div class="content_box">
        <div>
          <el-checkbox v-model="checked" class="f3">多选</el-checkbox>
        </div>
        <template slot-scope="scope">
          <el-popover placement="top" v-model="scope.row.remove">
            <p>亲！确定删除所选商品吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="scope.row.remove=false">取消</el-button>
              <el-button type="primary" size="mini" @click="removeId(scope.row)">确定</el-button>
            </div>
            <el-button slot="reference" size="small" type="text">删除</el-button>
          </el-popover>
        </template>
        <div class="f4">
          <div id="title">
            <p>
              已选
              <span class="total color">0</span>
              件商品
              <span class="interval"></span>
              合计(不含运费)
              <span class="totalPrices color susum">{{total}}</span>
              <span class="unit color">元</span>
            </p>
            <el-button type="primary" class="button_jiesuan" @click="goToUrl">结算</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
        },
        {
          id: 2,
          name:
            "联想（Lenovo) YOGA5 PRO 标配版电脑（i5-7200u  8G  512G SSD FHD IPS)银",
          color: "星空白",
          img:
            "http://doc.canglaoshi.org/tstore_v1/images/cart/product_simg1.png",
          price: 4888.0,
          num: 1
        },
        {
          id: 3,
          name:
            "联想（Lenovo) YOGA5 PRO 标配版电脑（i5-7200u  8G  512G SSD FHD IPS)银",
          color: "玫瑰金",
          img:
            "http://doc.canglaoshi.org/tstore_v1/images/cart/product_simg1.png",
          price: 4888.0,
          num: 1
        }
      ],
      checked: true
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
      this.$router.push('/orderConfirm')
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
  height: 560px;
  margin-top: 20px;
}
.big {
  margin: 0 auto;
  position: relative;
}
#title {
  margin-bottom: 15px;
  height: 28px;
  float: right;
}
#title b {
  width: 60px;
  font: 18px "Microsoft yahei";
  color: black;
  font-weight: bold;
  float: left;
  margin-right: 650px;
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
  padding-top: 58px;
}
.button_jiesuan {
  cursor: pointer;
  width: 133px;
  height: 42px;
  margin-left: 22px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  border-radius: 2px;
  float: right;
}
.f4 #title p {
  padding-top: 8px;
}
</style>
