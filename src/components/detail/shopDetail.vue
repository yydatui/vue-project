<template>
	<div id="shopDetail">
		<div class="shopShow">
			<div class="bigImg">
				<img class="" @mouseenter="imgChange($event)" :src="defaultImgSrc" />
			</div>
			<ul class="smallImgs">
				<li v-for="(item,index) in goodsImg" :key="index"><img :src="item.smallImgSrc" @click="handleChanges(index)" /></li>
			</ul>
		</div>
		<div class="rightDetail">
			<div class="title">Lenovo-YOGA 700</div>
			<p>(i7-7500U 8G 256GSSD 2G独显 全高清IPS 360°翻转 正版office)</p>
			<div class="price">
				<p>学员售价：<span>¥4000</span></p>
				<p>服务承诺： *退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货</p>
			</div>
			<div class="shopDetailSelect">
				<p><span>客服:联系客服</span></p>
				<p>
					<span>颜色:</span>
					<el-radio-group v-model="radio1">
						<el-radio-button label="黑色"></el-radio-button>
						<el-radio-button label="灰色"></el-radio-button>
						<el-radio-button label="金色"></el-radio-button>
						<el-radio-button label="白色"></el-radio-button>
					</el-radio-group>
				</p>
				<p>
					<span>规格:</span>
					<el-radio-group v-model="radio2">
						<el-radio-button label="15寸 15 1T"></el-radio-button>
						<el-radio-button label="18寸 18 2T"></el-radio-button>
						<el-radio-button label="19寸 19 3T"></el-radio-button>
					</el-radio-group>
				</p>
				<p><span>数量:
					</span>
					<el-input-number v-model="nums" @change="handleChange" :min="1" :max="100" label="描述文字"></el-input-number>
				</p>
			</div>
			<div class="buttons">
				<el-button>立即购买</el-button>
				<el-button type="primary">加入购物车</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				radio1: '黑色',
				radio2: '灰色',
				radio3: '金色',
				radio4: '白色',
				nums: 1,
				defaultImgSrc: 'http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_img1big.png',
				goodsImg: [{
					id: 0,
					bigImgSrc: 'http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_img1big.png',
					smallImgSrc: 'http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_img1.jpg'
				}, {
					id: 0,
					bigImgSrc: 'http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_img2big.png',
					smallImgSrc: 'http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_img2.jpg'
				}, {
					id: 0,
					bigImgSrc: 'http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_img3big.png',
					smallImgSrc: 'http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_img3.jpg'
				}, {
					id: 0,
					bigImgSrc: 'http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_img4big.png',
					smallImgSrc: 'http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_img4.jpg'
				}, {
					id: 0,
					bigImgSrc: 'http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_img5big.png',
					smallImgSrc: 'http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_img5.jpg'
				}, ]
			}
		},
		methods: {
			handleChanges(index) {
				this.defaultImgSrc = this.goodsImg[index].bigImgSrc;
			},
			imgChange(event) {
				event.className = 'changeBig'
			},
			handleChange(value) {
				
			}
		},
		created() {}
	}
</script>

<style lang="scss" scoped>
	#shopDetail {
		display: flex;
		justify-content: space-between;

		.shopShow {
			.bigImg {
				overflow: hidden;

				.changeBig {
					width: 100%;
					height: 100%;
					animation: changeBiger 5s infinite;
					animation-delay: 5s;
					transform: scale(1.08);
				}
			}

			.smallImgs {
				margin-top: 10px;
				display: flex;
				justify-content: space-between;

				li {
					cursor: pointer;
				}
			}
		}

		.rightDetail {
			width: 50%;

			.price {
				margin: 20px 0 0 0;
				width: 480px;
				height: 100px;
				background: -webkit-linear-gradient(top, #f0f0f0 0%, #e0e0e0 100%);
				box-shadow: 0px 0px 10px #ccc;

				p {
					padding-top: 10px;
					font: 14px "simhei";
					color: #666;
				}
			}

			.title {
				color: #333333;
				font-family: '\5FAE\8F6F\96C5\9ED1', Arial;
				font-size: 24px
			}

			p {
				color: #333333;
				font-family: '\5FAE\8F6F\96C5\9ED1', Arial;
				font-size: 14px;
				font-weight: bold;

				span {
					font: 34px "simhei";
					color: #0aa1ed;
					font-family: Arial;
				}
			}

			.shopDetailSelect {
				p {
					margin-top: 10px;

					span {
						font-weight: 500;
						display: inline-block;
						margin-left: 4px;
						margin-top: 8px;
						font-size: 15px;
						font-family: 黑体;
						color: #666;
					}
				}
			}
			
			.buttons{
				margin-left: 50px;
				margin-top: 30px;
				width: 50%;
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>
