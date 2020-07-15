<template>
	<div id="detail">
		<orderNav :orderNav="orderNav"></orderNav>
		<shopDetail></shopDetail>
<<<<<<< HEAD
		<buttonDetail></buttonDetail>
=======
>>>>>>> 345ac858f7d5ba20701450a79bc0e377ba93429a
	</div>

</template>

<script>
	import orderNav from '../common/orderNav.vue'
	import shopDetail from '../components/detail/shopDetail.vue'
<<<<<<< HEAD
	import buttonDetail from '../components/detail/buttonDetail.vue'
=======
>>>>>>> 345ac858f7d5ba20701450a79bc0e377ba93429a
	export default {
		data() {
			return {
				orderNav: ['首页', '学习用品', '笔记本电脑', '联想Lenovo-YOGA 700']
			}
		},
		components: {
			orderNav,
<<<<<<< HEAD
			shopDetail,
			buttonDetail
=======
			shopDetail
>>>>>>> 345ac858f7d5ba20701450a79bc0e377ba93429a
		}
	}
</script>

<style lang="scss" scoped>
	#detail{
		width: 1000px;
		margin: auto;
<<<<<<< HEAD
		height: 5000px;
=======
>>>>>>> 345ac858f7d5ba20701450a79bc0e377ba93429a
	}
</style>
