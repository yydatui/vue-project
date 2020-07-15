<template>
	<div id="container">
		<div class="manage" @click="handel()">
			<span>管理收藏夹</span>
		</div>
		<div class="buttons" v-show="showFlag">
			<div class="all" @click="all()">
				<span><img :src="allImgSrc" />&nbsp;全选</span>
			</div>
			<el-button type="text" @click="open()" class="delete">删除</el-button>
			<el-button type="text" @click="add()" class="add">加入购物车</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showFlag: false,
				allImgSrc: 'http://doc.canglaoshi.org/tstore_v1/images/myCollect/product_normal.png',
				state: true
			}
		},
		methods: {
			handel() {
				this.showFlag = !this.showFlag
				this.$bus.$emit('modality', this.showFlag)
			},
			all() {
				this.state = !this.state
				this.allImgSrc = this.state ? 'http://doc.canglaoshi.org/tstore_v1/images/myCollect/product_normal.png' :
					'http://doc.canglaoshi.org/tstore_v1/images/myCollect/product_true.png';

				this.$bus.$emit('allSelect', this.state)
			},
			open() {
				this.$confirm('确定删除您的这个宝贝吗？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!',
					});
					this.$bus.$emit('delete');
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			add() {
				this.$confirm('将您的宝贝移入购物车？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '加入成功!',
					});
					this.$bus.$emit('delete');
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消加入'
					});
				});
			}
		},
		mounted() {
			this.$bus.$on('modality', (value) => {
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

			cursor: pointer;

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

			.all {
				cursor: pointer;
			}

			.delete {
				font: 12px simhei;
				padding: 0;
				color: #808080;
				cursor: pointer;
			}

			.add {
				font: 12px simhei;
				padding: 0;
				color: #808080;
				cursor: pointer;
			}
		}


	}
</style>
