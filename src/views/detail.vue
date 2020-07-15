<template>
	<div id="detail">
		<orderNav :orderNav="orderNav"></orderNav>
		<shopDetail></shopDetail>
	</div>

</template>

<script>
	import orderNav from '../common/orderNav.vue'
	import shopDetail from '../components/detail/shopDetail.vue'
	export default {
		data() {
			return {
				orderNav: ['首页', '学习用品', '笔记本电脑', '联想Lenovo-YOGA 700']
			}
		},
		components: {
			orderNav,
			shopDetail
		}
	}
</script>

<style lang="scss" scoped>
	#detail{
		width: 1000px;
		margin: auto;
	}
</style>
