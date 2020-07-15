<template>
  <div class="login">
    <div class="form">
      <div>
        <p class="left-box title">登录学子商城</p>
        <p class="right-box" style="padding-top:10px">
          <a href="/register" class="text">新用户注册</a>
        </p>
      </div>
      <hr class="clear" style="margin:0 0 10px 0" />
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="name">
          <el-input
            v-model="ruleForm.name"
            type="text"
            placeholder="请输入您的用户名"
            suffix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
            placeholder="请输入您的密码"
            suffix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>

        <el-checkbox class="left-box login-span">
          <span style="color:#fff">自动登录</span>
        </el-checkbox>
        <span class="right-box password">
          <a href="##" class="text">忘记密码？</a>
        </span>
        <p>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </p>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      console.log("pass");
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    return {
      ruleForm: {
        pass: "",
        name: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        name: [{ validator: checkUserName, trigger: "blur" }]
      }
    };
  },
  methods: {}
};
</script>

<style scoped>
.login {
  background-image: url("http://doc.canglaoshi.org/tstore_v1//images/regist.png");
  width: 100%;
  height: 560px;
  position: relative;
}

.login .title{
  color: #fff;
  font-weight: 400px !important;
}

.form {
  width: 290px;
  padding: 20px 20px;
  color: aliceblue;
  position: absolute;
  top: 20%;
  right: 10%;
  background: rgba(0, 0, 0, 0.2);
}
.input-item {
  padding: 10px;
}
.el-button--primary {
  padding: 10px 130px;
}
.left-box {
  float: left;
}
.right-box {
  float: right;
}
.login-span {
  display: inline-block;
  padding: 10px;
}
.password {
  display: inline-block;
  padding: 10px;
  font-size: 14px;
  color: #fff;
}
.clear {
  clear: both;
}
.title {
  font-size: 18px;
}
.right-box .text:link {
  text-decoration: none;
  color: #fff;
  font-size: 12px;
}
.right-box .text:visited {
  color: #fff;
}
</style>
