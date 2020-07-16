<template>
  <div class="myinform right">
    <div class="myinform_title">
      <span class="myinform_title_active">
        <a href="/personal">我的信息</a>
      </span>
      <span>
        <a href="/personal_password">安全管理</a>
      </span>
    </div>
    <div class="myinform_body">
      <div class="touxiang">
        <span class="same">我的头像：</span>
        <img src="http://doc.canglaoshi.org/tstore_v1/images/personage/touxiang.png" id="icon" width="50px" height="50px" />
        <span class="change_touxiang same_click">更改头像</span>
      </div>
      <div class="myinform_username">
        <span class="same">用户名：</span>
        <span class="same username">王小明</span>
        <input class="ed_username" style="display:none" />
        <span class="change_username same_click">更改用户名</span>
      </div>
      <div class="myinform_sex">
        <span class="same">性别：</span>
        <span class="man selected">
          <el-radio v-model="radio" label="man">男</el-radio>
        </span>
        <span class="women">
          <el-radio v-model="radio" label="women">女</el-radio>
        </span>
      </div>
      <div class="myinform_tel">
          <span class="same">绑定电话：</span>
          <input type="text" value="tel" v-model="input"/>
      </div>
      <div class="myinform_mail">
          <span class="same">绑定邮箱：</span>
          <input class="ed_mail" value="" style="display:none"/>
            <span class="mail">2608251088@qq.com</span>
          <span class="same_click change_mail">更改邮箱</span>
      </div>
      <div class="save">
          <el-button type="primary" @click="onSubmit">保存更改</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1",
      input:''
    };
  },
  methods:{
    onSubmit(){
      this.$message({
          message: '恭喜你，修改成功',
          type: 'success'
        });
    }
  }
};
</script>
<style scoped>
.myinform {
  width: 820px;
  background: #fff;
}
.myinform_title {
  height: 36px;
  background: rgba(0, 0, 0, 0.05);
}
.myinform_title_active {
  color: #333;
  font-weight: bold;
}
.myinform_title span {
  display: inline-block;
  width: 100px;
  height: 100%;
  text-align: center;
  line-height: 36px;
}
.myinform_title span a:link {
  color: black;
  text-decoration: none;
}
.myinform_body {
  position: relative;
  z-index: 1;
  padding: 30px 20px 80px 20px;
}
.touxiang {
  height: 70px;
  border-bottom: 1px solid #e8e8e8;
}
.touxiang span {
  position: relative;
  bottom: 20px;
}
img {
  vertical-align: middle;
}
.same_click {
  font-size: 12px;
  color: #2ea8ee;
  font-weight: bold;
  margin-left: 20px;
  cursor: pointer;
}
.myinform_username,.myinform_sex,.myinform_tel,.myinform_mail {
  height: 58px;
  line-height: 58px;
  border-bottom: 1px solid #e8e8e8;
}
.man,.woman{margin: 0 10px;}
.save{margin-top: 20px;}
.el-button--primary{width: 136px;}
</style>
