<template>
  <div class="foo-box">
    <ul>
      <li v-for="(item,index) in foolist" :key="index">
        <img :src="item.img" alt="">
        <h3>{{ item.title }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foolist:[
        {
          title: "品质保障",
          img: "http://doc.canglaoshi.org/tstore_v1/images/footer/icon1.png"
        },
        {
          title: "私人定制",
          img: "http://doc.canglaoshi.org/tstore_v1/images/footer/icon2.png"
        },
        {
          title: "学员特供",
          img: "http://doc.canglaoshi.org/tstore_v1/images/footer/icon3.png"
        },
        {
          title: "专属特权",
          img: "http://doc.canglaoshi.org/tstore_v1/images/footer/icon4.png"
        }
      ]
    }
  },
 }
</script>

<style scoped>
.foo-box{
  width: 1000px;
  margin: 0 auto 0;
  /* height: 82px; */
}
.foo-box li{
  display: inline-block;
  padding: 30px 85px;
  margin-bottom: 30px;
}
.foo-box h3{
  font: 14px simhei;
  font-weight: inherit;
  padding-left: 3px;
}
</style>
