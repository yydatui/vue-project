<template>
  <div class="nav">
    <ul>
      <li v-for="(item,index) in link" :key="index">
        <a :href="item.url" :class="{'active':isActive === index}" @click="isActive=index">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "indexNav",
  data() {
    return {
      isActive: 0,
      link: [
        {
          id: 0,
          url: "/index#",
          title: "首页"
        },
        {
          id: 1,
          url: "/index#computer",
          title: "电脑办公"
        },
        {
          id: 2,
          url: "/index#stationery",
          title: "办公文具"
        }
      ]
    };
  }
};
</script>

<style scoped>
.nav {
  width: 1000px;
  margin: 0 auto;
  margin-top: 80px;
}
.nav ul li {
  display: inline-block;
  padding: 2px 30px 2px 0;
  font-size: 16px;
}
.nav li a {
  color: #cccccc;
  font-weight: 600;
}
.active {
  color: #0aa1ed !important;
}
</style>
