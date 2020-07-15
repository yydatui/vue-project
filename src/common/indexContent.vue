<template>
  <div class="content" :id="herf">
    <h2 class="stair">
      <span>
        <img :src="icon" alt />
      </span>
      {{ title }}
    </h2>
    <div v-if="color">
      <div class="top-box clear-fix">
        <div class="left shop max">
          <div class="con-box">
            <p class="title">{{ toplist[0].title }}</p>
            <p class="text">
              {{ toplist[0].text1 }}
              <br />
              {{ toplist[0].text2 }}
            </p>
            <p class="price" :class="{'bluecolor':color,'pinkcolor':!color}">￥{{ toplist[0].price }}</p>
            <el-button type="primary" @click="gotoMenu" :class="{'bluebg':color,'pinkbg':!color}">
              <span class="button">查看详细</span>
            </el-button>
          </div>
          <span class="img">
            <img :src="toplist[0].img" alt class="hand" />
          </span>
        </div>
        <div class="right shop min">
          <div class="con-box">
            <p class="title">{{ toplist[1].title }}</p>
            <p class="text">
              {{ toplist[1].text1 }}
              <br />
              {{ toplist[1].text2 }}
            </p>
            <p
              class="price pink"
              :class="{'bluecolor':color,'pinkcolor':!color}"
            >￥{{ toplist[1].price }}</p>
            <el-button type="primary"  @click="gotoMenu" :class="{'bluebg':color,'pinkbg':!color}">
              <span class="button">查看详细</span>
            </el-button>
          </div>
          <span class="img">
            <img :src="toplist[1].img" alt class="hand" />
          </span>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="top-box clear-fix pink">
        <div class="left shop max">
          <span class="img left">
            <img :src="toplist[0].img" alt class="hand" />
          </span>
          <div class="con-box right div-box">
            <p class="title">{{ toplist[0].title }}</p>
            <p class="text">
              {{ toplist[0].text1 }}
              <br />
              {{ toplist[0].text2 }}
            </p>
            <p class="price" :class="{'bluecolor':color,'pinkcolor':!color}">￥{{ toplist[0].price }}</p>
            <el-button type="primary" @click="gotoMenu" :class="{'bluebg':color,'pinkbg':!color}">
              <span class="button">查看详细</span>
            </el-button>
          </div>
        </div>
        <div class="right shop min">
          <span class="img left pinkimg">
            <img :src="toplist[1].img" alt class="hand" />
          </span>
          <div class="con-box right">
            <p class="title">{{ toplist[1].title }}</p>
            <p class="text">
              {{ toplist[1].text1 }}
              <br />
              {{ toplist[1].text2 }}
            </p>
            <p
              class="price pink"
              :class="{'bluecolor':color,'pinkcolor':!color}"
            >￥{{ toplist[1].price }}</p>
            <el-button type="primary" @click="gotoMenu" :class="{'bluebg':color,'pinkbg':!color}">
              <span class="button">查看详细</span>
            </el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-box clear-fix">
      <div class="left-box left">
        <div class="car-header" :class="{'bluebg':color,'pinkbg':!color}">
          <span>
            <img :src="icon2" alt />
          </span>
          {{ title2 }}
        </div>
        <div v-for="(item,index) in lflist" :key="index">
          <p :class="{'bluecolor':color,'pinkcolor':!color}">{{ item.title }}</p>
          <ul>
            <li v-for="(item,index) in item.list" :key="index">
              <a href="#" :class="{'bluecolor':color,'pinkcolor':!color}">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="left right-box clear-fix">
        <div class="item-msg" v-for="(item,index) in rglist" :key="index">
          <img :src="item.img" class="hand" />
          <p>{{ item.title }}</p>
          <p class="price" :class="{'bluecolor':color,'pinkcolor':!color}">￥{{ item.price }}</p>
          <el-button type="primary" @click="gotoMenu" :class="{'bluebg':color,'pinkbg':!color}">查看详细</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    shopinfo: {
      type: Object,
      default() {
        return {};
      }
    },
    color: {
      type: Boolean,
      default: true
    },
    herf: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      // color: false,
      toplist: "",
      bottlist: "",
      lflist: "",
      rglist: "",
      icon:
        "http://doc.canglaoshi.org/tstore_v1/images/itemCat/computer_icon.png",
      title: "办公电脑 /1F",
      title2: "办公.电脑 /1F",
      icon2:
        "http://doc.canglaoshi.org/tstore_v1/images/itemCat/computer_icon1.png"
      // shoplist: {
      //   toplist: [
      //     {
      //       title: "灵越 燃7000系列",
      //       text1: "酷睿双核i5处理器|256GB SSD| 8GB内存",
      //       text2: "英特尔HD显卡620含共享显卡内存",
      //       img:
      //         "http://doc.canglaoshi.org/tstore_v1/images/itemCat/study_computer_img1.png",
      //       price: "4999.00"
      //     },
      //     {
      //       title: "颜值 框不住",
      //       text1: "酷睿双核i5处理器|256GB SSD| 8GB内存",
      //       text2: "英特尔HD显卡620含共享显卡内存",
      //       img:
      //         "http://doc.canglaoshi.org/tstore_v1/images/itemCat/study_computer_img2.png",
      //       price: "6888.00"
      //     }
      //   ],
      //   bottlist: {
      //     lflist: [
      //       {
      //         title: "电脑整机",
      //         list: ["笔记本", "游戏机", "台式机", "一体机", "服务器", "联想"]
      //       },
      //       {
      //         title: "电脑配件",
      //         list: ["CPU", "SSD硬盘", "显示器", "组装电脑", "迹象"]
      //       },
      //       {
      //         title: "外设/游戏",
      //         list: ["键盘", "鼠标", "U盘", "移动硬盘", "游戏配备", "只能单车"]
      //       }
      //     ],
      //     rglist: {
      //       list: [
      //         {
      //           title: "戴尔(DELL)XPS13-9360-R1609 13.3英寸微边框笔记本电脑",
      //           img:
      //             "http://doc.canglaoshi.org/tstore_v1/images/itemCat/study_computer_img3.png",
      //           price: "4600.00"
      //         },
      //         {
      //           title:
      //             "14.8mm超轻薄笔记本电脑 航海王版 13.3英寸微边框笔记本电脑",
      //           img:
      //             "http://doc.canglaoshi.org/tstore_v1/images/itemCat/study_computer_img4.png",
      //           price: "5600.00"
      //         },
      //         {
      //           title: "联想(Lenovo) YOGA900 多彩版 13.3英寸微边框笔记本电脑",
      //           img:
      //             "http://doc.canglaoshi.org/tstore_v1/images/itemCat/study_computer_img5.png",
      //           price: "6600.00"
      //         }
      //       ]
      //     }
      //   }
      // }
    };
  },
  created() {
    // console.log(this.shopinfo);
    let { toplist, bottlist } = this.shopinfo.shoplist;
    this.toplist = toplist;
    this.bottlist = bottlist;
    this.lflist = bottlist.lflist;
    this.rglist = bottlist.rglist.list;
    this.icon = this.shopinfo.icon;
    this.title = this.shopinfo.title;
    this.icon2 = this.shopinfo.icon2;
    this.title2 = this.shopinfo.title2;

    // console.log(bottlist.rglist.list);
  },
  methods: {
    gotoMenu(){
      // console.log(this.$router);
      //指定跳转的地址 this.$router.replace('/menu')
      // this.$router.replace('/detail')
      //指定跳转的路由的名字下 this.$router.replace({name:'menu'})
      // this.$router.replace({name:'menu'})
      //通过push进行跳转
      this.$router.push('/detail')
    }
  },
}
</script>

<style scoped>
.bluebg {
  background: #2ba7e6;
}
.bluebg:hover {
  background: #1b8bc4;
}
.bluecolor {
  color: #2ba7e6;
}
.bluecolor:hover {
  color: #1b8bc4;
}
.pinkbg {
  background: #ecafbb;
}
.pinkbg:hover {
  background: #d88391;
}
.pinkcolor {
  color: #ecafbb;
}
.pinkcolor:hover {
  color: #d88391;
}
.content {
  width: 1000px;
  margin: 0 auto 0;
  padding: 50px 0 0 0;
}
.stair {
  padding: 10px 0;
  border-bottom: 2px solid #e8e8e8;
}
.top-box {
  margin-top: 10px;
}
.con-box {
  margin: 68px 0 0 36px;
  padding: 5px 0;
}
.max {
  position: relative;
  width: 611px;
  height: 376px;
  background: #e8e8e8;
}
.shop img {
  width: 318px;
  height: 319px;
  transition: all 1s;
}
.shop img:hover {
  transform: scale(1.05);
}
.shop .img {
  position: absolute;
  top: 35px;
  right: 30px;
  z-index: 1;
}
.shop .title {
  color: #333333;
  font: 32px simhei;
  font-weight: lighter;
  margin-bottom: 12px;
}
.shop .text {
  font: 12px simhei;
  margin-bottom: 24px;
}
.shop .price {
  font: 24px simhei;
  margin-bottom: 12px;
}
.shop .button {
  font: 20px simhei;
}
.min {
  position: relative;
  width: 375px;
  height: 376px;
  background: #e8e8e8;
  overflow: hidden;
}
.min .img {
  width: 292px;
  height: 232px;
}
.min .con-box {
  margin: 39px 0 0 25px;
  padding: 4px;
}
.min .img {
  position: absolute;
  top: 45px;
  right: 40px;
}
.bottom-box {
  margin-top: 10px;
}
.car-header {
  color: #fff;
  width: 355px;
  height: 35px;
  line-height: 35px;
  padding-left: 11px;
}
.car-header img {
  display: inline-block;
  vertical-align: middle;
}
.left-box {
  font: 12px simhei;
  margin-right: 21px;
  background: #e8e8e8;
  height: 233px;
}
.left-box p {
  padding: 20px 10px 10px 10px;
}
.left-box li {
  display: inline-block;
  padding-left: 10px;
}
.item-msg {
  font: 12px simhei;
  font-weight: lighter;
  width: 198px;
  height: 233px;
  background: #e8e8e8;
  display: inline-block;
  margin-left: 10px;
  text-align: center;
}
.item-msg p {
  margin-bottom: 10px;
}
.item-msg .price {
  font-weight: bold;
}
.item-msg img {
  width: 198px;
  height: 136px;
  transition: all 1s;
}
.item-msg img:hover {
  transform: scale(1.1);
}
.pink .shop .img {
  position: absolute;
  top: 35px;
  left: 30px;
  width: 300px;
}
.pink .shop .img img {
  width: 254px;
  height: 279px;
}
.pinkimg img {
  width: 132px !important;
  height: 230px !important;
  position: absolute;
  top: 40px;
}
.pinkimg {
  position: absolute;
  left: 0 !important;
  width: 150px !important;
}
.pink .con-box {
  margin: 68px 0 0 36px;
  z-index: 99;
}
.div-box {
  width: 256px !important;
}
</style>
