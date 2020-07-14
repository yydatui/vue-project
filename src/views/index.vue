<template>
  <div class>
    <index-nav />
    <banner />
    <index-content :shopinfo="content1" :color="true" :herf="herf1" />
    <index-content :shopinfo="content2" :color="false" :herf="herf2" />
    <footer-box />
  </div>
</template>

<script>
import indexNav from "@common/indexNav";
import banner from "@components/banner"
import indexContent from "@common/indexContent";
import footerBox from "@common/footerBox";
export default {
  components:{
    indexNav,
    indexContent,
    footerBox,
    banner
  },
  data() {
    return {
      herf1: "computer",
      herf2: "stationery",
      content1: {
        icon:
          "http://doc.canglaoshi.org/tstore_v1/images/itemCat/computer_icon.png",
        title: "办公电脑 /1F",
        title2: "办公.电脑 /1F",
        icon2:
          "http://doc.canglaoshi.org/tstore_v1/images/itemCat/computer_icon1.png",
        shoplist: {
          toplist: [
            {
              title: "灵越 燃7000系列",
              text1: "酷睿双核i5处理器|256GB SSD| 8GB内存",
              text2: "英特尔HD显卡620含共享显卡内存",
              img:
                "http://doc.canglaoshi.org/tstore_v1/images/itemCat/study_computer_img1.png",
              price: "4999.00"
            },
            {
              title: "颜值 框不住",
              text1: "酷睿双核i5处理器|256GB SSD| 8GB内存",
              text2: "英特尔HD显卡620含共享显卡内存",
              img:
                "http://doc.canglaoshi.org/tstore_v1/images/itemCat/study_computer_img2.png",
              price: "6888.00"
            }
          ],
          bottlist: {
            lflist: [
              {
                title: "电脑整机",
                list: ["笔记本", "游戏机", "台式机", "一体机", "服务器", "联想"]
              },
              {
                title: "电脑配件",
                list: ["CPU", "SSD硬盘", "显示器", "组装电脑", "迹象"]
              },
              {
                title: "外设/游戏",
                list: [
                  "键盘",
                  "鼠标",
                  "U盘",
                  "移动硬盘",
                  "游戏配备",
                  "只能单车"
                ]
              }
            ],
            rglist: {
              list: [
                {
                  title: "戴尔(DELL)XPS13-9360-R1609 13.3英寸微边框笔记本电脑",
                  img:
                    "http://doc.canglaoshi.org/tstore_v1/images/itemCat/study_computer_img3.png",
                  price: "4600.00"
                },
                {
                  title:
                    "14.8mm超轻薄笔记本电脑 航海王版 13.3英寸微边框笔记本电脑",
                  img:
                    "http://doc.canglaoshi.org/tstore_v1/images/itemCat/study_computer_img4.png",
                  price: "5600.00"
                },
                {
                  title: "联想(Lenovo) YOGA900 多彩版 13.3英寸微边框笔记本电脑",
                  img:
                    "http://doc.canglaoshi.org/tstore_v1/images/itemCat/study_computer_img5.png",
                  price: "6600.00"
                }
              ]
            }
          }
        }
      },
      content2: {
        icon:
          "http://doc.canglaoshi.org/tstore_v1/images/itemCat/stationery_icon.png",
        title: "办公文具 /2F",
        title2: "办公.文具 /2F",
        icon2:
          "http://doc.canglaoshi.org/tstore_v1/images/itemCat/stationery_icon1.png",
        shoplist: {
          toplist: [
            {
              title: "雅致布面年历本",
              text1: "有色更有范！变色PU皮，撞色搭配，绚丽色",
              text2: "彩，张扬个性，点亮生活新时尚！",
              img:
                "http://doc.canglaoshi.org/tstore_v1/images/itemCat/study_stationery_img1.png",
              price: "49.00"
            },
            {
              title: "透视网格拉链袋",
              text1: "韩国创意卡通 丛林物语网格文件袋",
              text2: "",
              img:
                "http://doc.canglaoshi.org/tstore_v1/images/itemCat/study_stationery_img2.png",
              price: "28.00"
            }
          ],
          bottlist: {
            lflist: [
              {
                title: "办公设备",
                list: [
                  "投影机",
                  "打印机",
                  "点钞机",
                  "碎纸机",
                  "考勤机",
                  "保险柜"
                ]
              },
              {
                title: "文具耗材",
                list: [
                  "学生文具",
                  "办公文具",
                  "纸类",
                  "打印耗材",
                  "服务器",
                  "联想"
                ]
              },
              {
                title: "电脑整机",
                list: ["笔记本", "游戏机", "台式机", "服务器", "一体机"]
              }
            ],
            rglist: {
              list: [
                {
                  title: "得力（deli）1548A商务办公桌面计算器 太阳能双电源",
                  img:
                    "http://doc.canglaoshi.org/tstore_v1/images/itemCat/study_stationery_img3.png",
                  price: "58.00"
                },
                {
                  title: "施耐德（Schneider） K15 经典款圆珠笔 ",
                  img:
                    "http://doc.canglaoshi.org/tstore_v1/images/itemCat/study_stationery_img4.png",
                  price: "12.00"
                },
                {
                  title: "齐心皮面日程本子2017.1-2018.6计划记事本效率手册",
                  img:
                    "http://doc.canglaoshi.org/tstore_v1/images/itemCat/study_stationery_img5.png",
                  price: "23.00"
                }
              ]
            }
          }
        }
      }
    };
  }
};
</script>

<style scoped>
</style>
