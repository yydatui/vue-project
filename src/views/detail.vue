<template>
	<div id="detail">
		<orderNav :orderNav="orderNav"></orderNav>
		<shopDetail></shopDetail>
		<seamlessScroll></seamlessScroll>
		<buttonDetail></buttonDetail>
		<footerBox class="footerBox"></footerBox>
	</div>
</template>

<script>
	import orderNav from '../common/orderNav.vue'
	import shopDetail from '../components/detail/shopDetail.vue'
	import buttonDetail from '../components/detail/buttonDetail.vue'
	import seamlessScroll from '../components/seamlessScroll.vue'
	import footerBox from '../common/footerBox.vue'
	export default {
		data() {
			return {
				orderNav: ['首页', '学习用品', '笔记本电脑', '联想Lenovo-YOGA 700']
			}
		},
		components: {
			orderNav,
			shopDetail,
			buttonDetail,
			seamlessScroll,
			footerBox
		}
	}
</script>

<style lang="scss" scoped>
	#detail{
		width: 1000px;
		margin: auto;
		height: 5400px;
		
		.footerBox{
			margin-top: 4000px;
		}
	}
</style>
