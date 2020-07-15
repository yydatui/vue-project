<template>
  <div class="scroll">
  <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
    <ul class="item">
      <li v-for="(item,index) in newsList" :key="index">
        <p>
          <a href="#"><img :src="item.img_url" alt /></a>
        </p>
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </vue-seamless-scroll></div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        {
          img_url:
            "http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_1.png",
          title: "ThinkPad New S2 (20GUA00QCD)13.3英寸超霸"
        },
        {
          img_url:
            "http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_2.png",
          title: "戴尔 DELL燃7000 R1605S 超霸"
        },
        {
          img_url:
            "http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_3.png",
          title: "戴尔(DELL)魔方15MF Pro-R2505TSS灵"
        },
        {
          img_url:
            "http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_4.png",
          title: "联想(Lenovo) YOGA900 (YOGA4 PRO)多彩版"
        }
      ]
    };
  },
  computed: {
    optionLeft() {
      return {
        step: 1, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 2, // 0向下 1向上 2向左 3向右
        openWatch: false, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      };
    }
  }
};
</script>

<style scoped>
.scroll{
  width: 1000px;
  margin: 10px auto 10px;
  border: 1px solid #ddd;
}
.seamless-warp2 {
  overflow: hidden;
  height: 205px;
  width: 1000px;
}
.seamless-warp2 ul.item {
  width: 1000px;
}
.seamless-warp2 li {
  width: 240px;
  float: left;
  margin-right: 10px;
  list-style-type: none;
}
.seamless-warp2 li p {
  font-weight: bolder;
  color: #333333;
  font-size: 11px;
  margin-top: 10px;
  text-align: center;
}
</style>
