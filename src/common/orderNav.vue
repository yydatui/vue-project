<template>
  <div class="order-nav">
    <ul>
      <li v-for="(item, index) in orderNav" :key="index">
        <a href="#">{{item | navOrder(index,that) }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    orderNav: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      that: this
    }
  },
  filters:{
    navOrder(item,index,that){
      return that.orderNav.length != 0 && that.orderNav.length - 1 > index ? item + ">" : item
    }
  }
 }
</script>

<style scoped>
.order-nav{
  margin: 20px 0 10px 0;
}
ul li{
  display: inline-block;
}
li a{
  font: 12px simhei;
}
</style>
