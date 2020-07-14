<template>
	<div id="container">
		<div class="manage" @click="handel()">
			<span>管理收藏夹</span>
		</div>
		<div class="buttons" v-show="showFlag">
			<div class="all" @click="all()">
				<span><img :src="allImgSrc" />&nbsp;全选</span>
			</div>
			<div class="delete">删除</div>
			<div class="add">加入购物车</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				showFlag:false,
				allImgSrc:'http://doc.canglaoshi.org/tstore_v1/images/myCollect/product_normal.png',
				state: true
			}
		},
		methods: {
			handel(){
				this.showFlag = !this.showFlag
				this.$bus.$emit('modality',this.showFlag)
			},
			all(){
				this.state = !this.state
				this.allImgSrc = this.state?'http://doc.canglaoshi.org/tstore_v1/images/myCollect/product_normal.png':'http://doc.canglaoshi.org/tstore_v1/images/myCollect/product_true.png';

				this.$bus.$emit('allSelect',this.state)
			}
		},
		mounted(){
			this.$bus.$on('modality',(value)=>{
				this.showFlag = value
			})
		}
	}
</script>

<style scoped="scoped" lang="scss">
	#container {
		width: 1000px;
		margin: 10px auto;
		color: #808080;
		border-top: 1px solid #e8e8e8;
		background: -webkit-linear-gradient(top, #f5f4f5 0%, #e6e6e5 100%);
		box-shadow: 3px 3px 6px #ccc;
		height: 46px;
		position: relative;

		.manage {
			background: #ffb30f;
			width: 78px;
			height: 24px;
			position: absolute;
			left: 10px;
			top: 12px;
			text-align: center;

			cursor:pointer;
			span {
				line-height: 24px;
				color: #fff;
				font-size: 12px;
				text-align: center;
			}
		}

		.buttons {
			position: absolute;
			left: 100px;
			top: 14px;
			color: #808080;
			font: 12px simhei;
			display: flex;
			justify-content: space-between;
			width: 200px;
			.all{
				cursor: pointer;
			}

			.delete{
				cursor: pointer;
			}

			.add{
				cursor: pointer;
			}
		}


	}
</style>
