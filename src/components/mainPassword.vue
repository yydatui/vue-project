<template>
  <div class="aqgl right">
    <div class="aqgl_title">
      <span>
        <a href="/personal">我的信息</a>
      </span>
      <span class="rs_header_active">
        <a href="/personal_password">安全管理</a>
      </span>
    </div>
    <div class="rs_content">
      <p class="change_pass_title">更改密码</p>
      <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
        <el-form-item class="pass old_pass" label="输入旧密码：">
          <el-input type="password" v-model="formLabelAlign.old_pass"></el-input>
        </el-form-item>
        <el-form-item class="pass new_pass" label="输入新密码：">
          <el-input type="password" v-model="formLabelAlign.new_pass"></el-input>
        </el-form-item>
        <el-form-item class="pass ok_newpass" label="确认新密码：">
          <el-input type="password" v-model="formLabelAlign.ok_pass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="savechange">保存修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        old_pass: "",
        new_pass: "",
        ok_pass: ""
      }
    };
  },
  methods:{
    savechange(){
      let {new_pass,ok_pass} = this.formLabelAlign
      new_pass != "" && new_pass === ok_pass ? this.clearLabel() : this.$message.error('信息为空或两次密码不一致');
    },
    clearLabel(){
      this.$message({message: '恭喜你，修改成功！',type: 'success'})
      let label = this.formLabelAlign
      label.old_pass = ""
      label.new_pass = ""
      label.ok_pass = ""
    }
  }
};
</script>
<style scoped>
.aqgl{
  background: #fff;
  min-height: 560px;
}
.aqgl_title {
  height: 36px;
  width: 820px;
  background: -webkit-linear-gradient(top, #f5f4f5 0%,#e6e6e5 100%);
  font: 16px simhei;
}
.aqgl_title span{
    display: inline-block;
    width: 100px;
    height: 100%;
    text-align: center;
    line-height: 36px;
    cursor: pointer;
}
.aqgl_title .rs_header_active{
    font-weight: bold;
}
.rs_content {
    position: relative;
    z-index: 1;
    padding: 30px 20px 80px 20px;
    width: 820px;
}
.aqgl_title span a:link{
    text-decoration: none;
    color: #808080;
    }
.change_pass_title {
    font: 16px;
    font-weight: bolder;
    color: #333;
    padding-bottom: 9px;
    margin-bottom: 20px;
    border-bottom:1px solid #e8e8e8;
    width: 820px;
}
.el-input__inner {
  width: 164px;
}
.el-button--primary{
    width: 140px;
}

</style>
