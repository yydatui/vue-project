<template>
  <div class="footer clear-fix">
    <div class="foo">
      <div class="foo1 left">
        <p>
          <img src="http://doc.canglaoshi.org/tstore_v1/images/footer/logo.png" alt />
        </p>
        <p>
          <img src="http://doc.canglaoshi.org/tstore_v1/images/footer/footerFont.png" alt />
        </p>
      </div>
      <div class="foo2 left">
        <ul>
          <li>
            <a href="#">
              <h3>买家帮助</h3>
            </a>
          </li>
          <li>
            <a href="#">服务指南</a>
          </li>
          <li>
            <a href="#">服务保障</a>
          </li>
          <li>
            <a href="#">常见问题</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <h3>商家帮助</h3>
            </a>
          </li>
          <li>
            <a href="#">商家入驻</a>
          </li>
          <li>
            <a href="#">商家后台</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <h3>关于我们</h3>
            </a>
          </li>
          <li>
            <a href="#">关于达内</a>
          </li>
          <li>
            <a href="#">联系我们</a>
          </li>
          <li>
            <a href="#">
              <img src="http://doc.canglaoshi.org/tstore_v1/images/footer/wechat.png" alt />
              <img src="http://doc.canglaoshi.org/tstore_v1/images/footer/sinablog.png" alt />
            </a>
          </li>
        </ul>
      </div>

      <div class="server left">
        <p class="title">学生商城客户端</p>
        <a href="#">
          <img src="http://doc.canglaoshi.org/tstore_v1/images/footer/ios.png" alt />
        </a>
        <a href="#">
          <img src="http://doc.canglaoshi.org/tstore_v1/images/footer/android.png" alt />
        </a>
      </div>

      <div class="download left">
        <img src="http://doc.canglaoshi.org/tstore_v1/images/footer/erweima.png" alt="">
      </div>

      <div class="bottom">
        <p class="titl">©20202 洋洋的大腿们 版权所有 渝ICP证8888888888</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<style scoped>
.footer {
  background: #fff;
}
.foo {
  width: 1000px;
  padding: 62px 0 0 0;
  margin: 0 auto 0;
}
.foo1 {
  padding: 6px 50px 18px 20px;
}
.foo2 ul {
  float: left;
  margin-right: 57px;
}
.foo2 li {
  padding: 5px 10px;
}
.foo2 li a {
  font-size: 14px;
  font: 12px simhei;
  font-weight: inherit;
}
.foo2 li a img {
  padding: 0 3px;
}
.server p {
  text-align: center;
  margin-bottom: 11px;
  color: #333;
  font: 14px simhei;
}
.server img {
  display: block;
  margin: 5px 0;
}
.download{
  margin-left: 10px;
}
.bottom{
  clear: both;
  text-align: center;
  padding: 20px 0 10px 0;
  font: 14px simhei;
    font-weight: inherit;
}
</style>
