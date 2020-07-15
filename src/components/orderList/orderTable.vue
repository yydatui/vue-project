<template>
  <div class="order-table">
    <table cellpadding="0" cellspacing="0">
      <tbody>
        <th v-for="(item,index) in tbtile" :key="index" :width="item.width">{{ item.title}}</th>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      tbtile: [
        {
          width: 325,
          title: "商品"
        },
        {
          width: 82,
          title: "单价（元）"
        },
        {
          width: 50,
          title: "数量"
        },
        {
          width: 82,
          title: "售后"
        },
        {
          width: 100,
          title: "实际付款（元）"
        },
        {
          width: 90,
          title: "交易状态"
        },
        {
          width: 92,
          title: "操作"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.order-table {
  table {
    background-image: linear-gradient(to bottom, #f5f4f5 0%, #e6e6e5 100%);
    box-shadow: 3px 3px 6px #ccc;
    height: 34px;
    border-radius: 3px;
  }

  th {
    font: 12px simhei;
    font-weight: bolder;
  }
}
</style>
