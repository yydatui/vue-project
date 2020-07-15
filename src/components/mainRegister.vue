<template>
  <div class="register">
    <div class="reg-box">
      <div class="head" style="padding:10px 0">
        <span class="title" style="color:#fff">新用户注册</span>
        <span class="directlogin"><a href="/login">直接登录</a></span>
      </div>
      <div class="clear" style="padding:10px 0"> </div>
      <el-form class="elform" :label-position="labelPosition" label-width="80px" :model="regitsterArry">
      <el-form-item label="用户名" prop="username">
        <el-input placeholder="请输入用户名" v-model="regitsterArry.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input placeholder="请输入密码" type="password" v-model="regitsterArry.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input placeholder="请确认密码" type="password" v-model="regitsterArry.qpassword"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input placeholder="请输入邮箱地址" type="e-mall" v-model="regitsterArry.emall"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="tel">
        <el-input placeholder="请输入您的手机号" v-model="regitsterArry.tel"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交注册信息</el-button>
    </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    var checkuser = (rule, value, callback) =>{
      if(!value){
        return callback(new Error('用户名不能为空'));
      }
      setTimeout()
    }
    return {
      labelPosition: "right",
      regitsterArry: {
        name: "",
        password: "",
        qpassword: "",
        tel: "",
        emall:""
      }
    };
  }
};
</script>

<style scoped>
.register{
  margin-top: 80px;
  width: 100%;
  height: 560px;
  position: relative;
  background-image: url("http://doc.canglaoshi.org/tstore_v1//images/regist.png");
}
.reg-box{
  padding: 20px;
  padding-right: 50px;
  position: absolute;
  top: 13%;
  right: 10%;
  background: rgba(0, 0, 0, .2);
  color: #fff;
}

.title{
  float: left;
}
.directlogin{
  float: right;
  font-size: 12px;
}
.directlogin a:link{color: white;text-decoration: none;}
.directlogin a:visited{color: white;}
.clear{
  clear: both;
}
</style>
