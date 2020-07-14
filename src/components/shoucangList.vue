<template>
	<div id="container">
		<ul class="list">
			<li v-for="(item,index) in goods" :key="index">
				<div class="img"><img :src="item.imgSrc" /></div>
				<div class="detail">{{item.details}}</div>
				<div class="price">
					<span>{{item.price}}</span>
					<span></span>
				</div>
				<div class="modality" v-show="modality">
					<div class="select">
						<img class="selectImg" :src="selectImg" />
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				goods: [{
					imgSrc: 'http://doc.canglaoshi.org/tstore_v1/images/myCollect/product_img1.png',
					details: 'DELL燃7000 14.0英寸微边框(i5-7200u 8GB 256GB SSD HD620 Win10)银',
					price: 4000,
					state: false
				}, {
					imgSrc: 'http://doc.canglaoshi.org/tstore_v1/images/myCollect/product_img2.png',
					details: 'DELL燃7000 14.0英寸微边框(i5-7200u 8GB 256GB SSD HD620 Win10)银',
					price: 4000,
					state: false
				}, {
					imgSrc: 'http://doc.canglaoshi.org/tstore_v1/images/myCollect/product_img3.png',
					details: 'DELL燃7000 14.0英寸微边框(i5-7200u 8GB 256GB SSD HD620 Win10)银',
					price: 4000,
					state: false
				}, {
					imgSrc: 'http://doc.canglaoshi.org/tstore_v1/images/myCollect/product_img4.png',
					details: 'DELL燃7000 14.0英寸微边框(i5-7200u 8GB 256GB SSD HD620 Win10)银',
					price: 4000,
					state: false
				}, {
					imgSrc: 'http://doc.canglaoshi.org/tstore_v1/images/myCollect/product_img5.png',
					details: 'DELL燃7000 14.0英寸微边框(i5-7200u 8GB 256GB SSD HD620 Win10)银',
					price: 4000,
					state: false
				}, {
					imgSrc: 'http://doc.canglaoshi.org/tstore_v1/images/myCollect/product_img6.png',
					details: 'DELL燃7000 14.0英寸微边框(i5-7200u 8GB 256GB SSD HD620 Win10)银',
					price: 4000,
					state: false
				}, ],
				modality: false,
				selectImg: 'http://doc.canglaoshi.org/tstore_v1/images/myCollect/product_normal_big.png'
			}
		},
		methods: {
		},
		mounted(){
			this.$bus.$on('modality',(value)=>{
				this.modality = value
			})

			this.$bus.$on('allSelect',(value)=>{
				// console.log(this.goods)
				this.goods.forEach((item)=>{
					item.state = true
				})
				this.selectImg = value?'http://doc.canglaoshi.org/tstore_v1/images/myCollect/product_normal_big.png':'http://doc.canglaoshi.org/tstore_v1/images/myCollect/product_true_big.png'
			})
		}
	}
</script>

<style lang="scss">
	#container {
		.list {
			background-color: white;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			border: 1px solid #d9d9d9;
			padding-bottom: 20px;

			li {
				width: 23%;
				margin: 15px 0 0 15px;
				border: 1px solid #d9d9d9;
				position: relative;

				div {
					width: 100%;
					cursor: pointer;
					font: 12px simhei;

					img {
						width: 100%;
						border-bottom: 1px solid #d9d9d9;
					}
				}

				.detail {
					margin: 10px 0 10px 10px;
				}

				.price {
					margin: 0 0 10px 10px;
					color: #0aa1ed;
				}

				.modality {
					width: 100%;
					height: 100%;
					z-index: 2;
					position: absolute;
					top: 0;
					background: rgba(0, 0, 0, 0.2);
					cursor: auto;
					border: 2px solid rgba(0, 0, 0, 0.2);
					cursor: pointer;

					.select {
						img {
							width: 24px;
							height: 24px;
							border: none;
							position: absolute;
							right: 0;
						}
					}
				}
			}
		}
	}
</style>
