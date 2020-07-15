<template>
  <div class="title-item">
    <p>
      <span>订单编号:{{ orderinfo.id  }}</span>
      <span>成交时间:{{ orderinfo.data }}</span>
      <span>
        <a href="#">联系客服
          <img src="http://doc.canglaoshi.org/tstore_v1/images/myOrder/kefuf.gif" alt="">
        </a>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    orderinfo: {
      type: Object,
      default(){
        return {
          id: 12345678910,
          data: "2020-07-14 18:38"
        }
      }
    }
  },
  data() {
    return {

    }
  },
 }
</script>

<style lang="scss" scoped>
.title-item{
  margin-top: 10px;
  width: 820px;
  background: #E8E8E8;
  height: 25px;
  font: 12px simhei;
  line-height: 25px;

  p{
    padding: 0 10px;
  }
  span{
    margin-right: 20px;
  }
}
</style>
