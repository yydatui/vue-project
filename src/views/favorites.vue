<template>
	<div id="shouCang">
		<div class="title">
			收藏商品
		</div>
		<ManageFavorites></ManageFavorites>
		<shoucangList></shoucangList>
		<ManageFavorites></ManageFavorites>
	</div>
</template>

<script>
	import ManageFavorites from '../common/ManageFavorites.vue'
	import shoucangList from '@components/shoucangList.vue'
	export default {
		data() {
			return {
			}
		},
		components: {
			ManageFavorites,
			shoucangList
		},
		methods: {}
	}
</script>

<style>
	#shouCang {
		width: 1000px;
		margin: 80px auto;
	}

	.title {
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
</style>
