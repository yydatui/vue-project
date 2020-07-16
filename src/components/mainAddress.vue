<template>
  <div class="address-box right">
    <div class="title">
      <p>收货地址管理</p>
    </div>
    <div class="body">
      <el-form :model="form" ref="form" label-width="100px">
        <el-form-item class="name" label="*收货人：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item class="province" label="*省份：">
          <el-select v-model="form.province">
            <el-option label="北京市" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="city" label="城市：">
          <el-select v-model="form.city">
            <el-option label="北京市" value="beijingshi"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="county" label="区/县：">
          <el-select v-model="form.county">
            <el-option label="东城区" value="dongcheng"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="detailedaddress" label="*详细地址：">
          <el-input type="textarea" v-model="form.detailedaddress" placeholder="建议您如实填写详细收货地址"></el-input>
        </el-form-item>
        <el-form-item class="tel" label="*手机号码：">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item class="fiexdtel" label="固定电话：">
          <el-input v-model="form.fixedtel"></el-input>
        </el-form-item>
        <el-form-item class="postcode" label="邮政编码：">
          <el-input v-model="form.postcode"></el-input>
        </el-form-item>
        <el-form-item class="addressname" label="*地址名称：">
          <el-input v-model="form.addressname"></el-input>
        </el-form-item>
        <el-row class="example">
          <span>如：</span>
          <el-button @click="form.addressname='家'">家</el-button>
          <el-button @click="form.addressname='公司'">公司</el-button>
          <el-button @click="form.addressname='宿舍'">宿舍</el-button>
        </el-row>
        <el-form-item class="submit">
          <el-button type="primary" @click="onSubmit">保存收货人信息</el-button>
        </el-form-item>
      </el-form>
      <div class="below-title">
        <span class="dzmc dmc_title">地址名称</span>
        <span class="dzxm dzxm_title">姓名</span>
        <span class="dzxq dzxq_title">地址详情</span>
        <span class="lxdh lxdh_title">联系电话</span>
        <span class="operate operate_title">操作</span>
      </div>
      <div
        v-for="(item,index) in addressinfo"
        :key="index"
        :class="{active: indexCount === index}"
        class="below-content_one"
      >
        <span class="dzmc dzmc_active">{{ item.adname }}</span>
        <span class="dzxm dzxm_normal">{{ item.name }}</span>
        <span class="dzxq dzxq_normal">{{ item.address }}</span>
        <span class="lxdh lxdh_normal">{{ item.tel }}</span>
        <span class="operate operate_normal">
          <span class="cz_change">修改</span>|
          <span class="cz_delete">删除</span>
        </span>
        <span class="swmr swmr_normal" v-if="indexCount === index"></span>
        <span class="swmr swmr_normal" v-else @click="activIndex(index)">设为默认</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        province: "",
        city: "",
        county: "",
        detailedaddress: "",
        tel: "",
        fiexedtel: "",
        postcode: "",
        addressname: ""
      },
      addressinfo: [
        {
          adname: "办公室",
          name: "李雪",
          address: "重庆市涪陵区李渡街道",
          tel: "184****0514"
        },
        {
          adname: "宿舍",
          name: "洋洋",
          address: "重庆市涪陵区李渡街道",
          tel: "184****0514"
        },
        {
          adname: "家里",
          name: "小羊",
          address: "重庆市涪陵区李渡街道",
          tel: "184****0514"
        }
      ],
      indexCount: 0
    };
  },
  methods: {
    onSubmit() {
      let {
        name,
        province,
        city,
        county,
        detailedaddress,
        tel,
        addressname
      } = this.form;
      if (
        name + province + city + county + detailedaddress + tel + addressname !=
        ""
      ) {
        this.$message({
          message: "恭喜你，添加成功！",
          type: "success"
        });
        let newInfo = {
          adname: addressname,
          name: name,
          address: detailedaddress,
          tel: tel
        }
        this.addressinfo.push(newInfo)
      } else {
        this.$message.error("必要信息不能为空！");
      }
    },
    activIndex(index) {
      this.indexCount = index;
    }
  }
};
</script>
<style scoped>
.address-box {
  width: 820px;
  background: #fff;
  z-index: 1;
  border: 1px solid #e8e8e8;
  /* padding: 30px 20px 80px 20px; */
}
.body {
  padding: 20px 10px;
}
.title {
  width: 820px;
  height: 36px;
  /* background: rgba(0, 0, 0, 0.15); */
  font: 16px simhei;
  background: -webkit-linear-gradient(top, #f5f4f5 0%, #e6e6e5 100%);
}
.title p {
  padding-top: 5px;
  padding-left: 3%;
}
.province {
  float: left;
}
.city {
  float: left;
}
.tel {
  float: left;
}
.fiexdtel {
  float: left;
}
.postcode,
.submit {
  clear: both;
}
.addressname {
  float: left;
}
.example {
  margin-left: 30px;
  float: left;
}
.submit {
  margin-left: 0px;
}
.below-title {
  padding-bottom: 10px;
  border-bottom: 2px solid #e8e8e8;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: rgb(232, 232, 232);
  height: 40px;
  margin-bottom: 20px;
}
.dzmc {
  width: 103px;
}
.dzxm {
  width: 76px;
}
.dzxq {
  width: 312px;
}
.lxdh {
  width: 100px;
}
.operate {
  width: 93px;
  cursor: pointer;
}
.swmr {
  width: 112px;
}
.dzmc,
.dzxm,
.dzxq,
.lxdh,
.operate,
.swmr {
  float: left;
  text-align: center;
  height: 36px;
  line-height: 36px;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
}
.active {
  border: 1px solid #2ea8ee;
}
.below-content_one {
  overflow: hidden;
  height: 36px;
  margin-bottom: 10px;
}
.active .dzmc_active {
  background: #2ea8ee;
  color: #fff;
}
.dzmc_active {
  background: #cccccc;
  color: #fff;
}

.dzxm_normal,
.dzxq_normal,
.lxdh_normal,
.operate_normal,
.swmr_normal {
  background: #e8e8e8;
}
.operate_normal {
  color: #2ea8ee;
}
</style>
