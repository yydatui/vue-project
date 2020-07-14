<template>
	<div id="lunBo">
		<div class="block">
			<el-carousel trigger="click" height="400px">
				<el-carousel-item v-for="(item,index) in images" :key="index">
					<img :src="item.src" />
				</el-carousel-item>
			</el-carousel>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				images:[
					{
						src:"http://doc.canglaoshi.org/tstore_v1/images/itemCat/itemCat_banner1.png"
					},{
						src:"http://doc.canglaoshi.org/tstore_v1/images/itemCat/itemCat_banner2.png"
					},{
						src:"http://doc.canglaoshi.org/tstore_v1/images/itemCat/itemCat_banner3.png"
					},{
						src:"http://doc.canglaoshi.org/tstore_v1/images/itemCat/itemCat_banner4.png"
					}
				]
			};
		}
	}
</script>

<style scoped="scoped">
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}
	
	
	.block{
		width: 1000px;
		height: 400px;
		margin: 0 auto;
		border: 1px solid #DDDDDD;
	}
	
</style>
