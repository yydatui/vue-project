<template>
	<div id="buttonDetail">
		<div class="top">
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
				<el-menu-item index="1">商品详情</el-menu-item>
				<el-menu-item index="2">商品评价</el-menu-item>
			</el-menu>
			<div class="line"></div>
		</div>
		<div class="right">
			<div class="addCart">
				<img src="http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_img9.png" />
			</div>
			<el-row>
				<el-button type="primary" plain>规格参数</el-button>
				<el-button type="primary" plain>商品介绍</el-button>
				<el-button type="primary" plain>售后保障</el-button>
				<el-button type="primary" plain>包装清单</el-button>
				<el-button type="primary" plain>回到顶部</el-button>
			</el-row>
		</div>
		<div class="goodsInfo">
			<p class="title"><span>规格参数</span><img src="http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_icon_1.png" /></p>
			<div class="parameter">
				<ul>
					<li>商品名称：联想YOGA 710</li>
					<li>系统：windows10</li>
					<li>内存容量：8G</li>
				</ul>
				<ul>
					<li>商品名称：联想YOGA 710</li>
					<li>系统：windows10</li>
					<li>内存容量：8G</li>
				</ul>
				<ul>
					<li>商品名称：联想YOGA 710</li>
					<li>系统：windows10</li>
					<li>内存容量：8G</li>
				</ul>
			</div>
			<p class="title"><span>商品介绍</span><img class="introduce" src="http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_icon_4.png" /></p>
			<div class="goodsDtailImg">
				<img src="http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_img8.png" />
			</div>
			<p class="title"><span>售后保障</span><img class="after" src="http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_icon_3.png" /></p>
			<div class="afterInfo">
				<p><i class="el-icon-message-solid"></i><span>正品保障</span></p>
				<p>达内学子商城向您保证所售商品均为正品行货，达内自营商品开具机打发票或电子发票。</p>
				<p><i class="el-icon-message-solid"></i><span>全国联保</span></p>
				<p>凭质保证书及达内商城发票，可享受全国联保服务，与您亲临商场选购的商品享受相同的质量保证。达内商城还为您提供具有竞争力的商品价格和运费政策，请您放心购买！
					注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！</p>
			</div>
			<p class="title"><span>保障清单</span><img class="list" src="http://doc.canglaoshi.org/tstore_v1/images/product_detail/product_detail_icon_3.png" /></p>
			<p class="packingList">笔记本 x1 适配器 x1 电源线 x1 电池 x1 说明书（电子版）x1 备注：笔记本电脑的背面只会标注此电脑的系列，例如： XPS 13-9360 ，
				如果您需要核实此电脑的具体配置型号是否与达内页面相符，可电话咨询达内厂商：800-858-2969</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',
			}
		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	#buttonDetail {
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
		position: relative;

		.top {
			width: 840px;

			.el-menu {
				background: -webkit-linear-gradient(top, #eff0f0 0%, #e0dfe0 100%);
				box-shadow: 3px 3px 6px #ccc;
			}
		}

		.right {
			border-left: 1px solid #E8E8E8;

			.addCart {
				img {
					height: 60px;
				}
			}

			.el-row {
				width: 200px;

				.el-button {
					width: 200px;
					height: 60px;
					font-size: 16px;
					margin: 10px 0 0 1px;
				}
			}
		}

		.goodsInfo {
			position: absolute;
			top: 90px;
			width: 800px;
			height: 4000px;

			.title {
				img {
					position: absolute;
					top: -4px;
					left: 70px;
				}

				.introduce {
					position: absolute;
					top: 134px;
					left: 70px;
				}

				.after {
					position: absolute;
					top: 3965px;
					left: 70px;
				}

				.list {
					position: absolute;
					top: 4190px;
					left: 70px;
				}
			}

			.parameter {
				width: 80%;
				margin-bottom: 20px;
				display: flex;
				justify-content: space-between;

				ul {
					margin-top: 20px;

					li {
						margin: 10px 0 0 0;
						font: 12px "simhei", Arial, Helvetica, sans-serif;
					}
				}
			}

			.goodsDtailImg {
				margin: 20px 0 20px 0;
			}

			.afterInfo {
				margin: 20px 0 20px 0;

				.el-icon-message-solid {
					margin-top: 20px;
					color: #0aa1ed;
					margin-right: 10px;
					font-size: 20px;
				}

				span {
					font-weight: bold;
					font-size: 20px;
					color: #0aa1ed;
					font-family: "黑体";
				}

				p {
					margin-top: 5px;
					font-size: 12px;
					font-weight: inherit;
				}
			}

			.packingList {
				margin: 20px 0 0 0;
				font-size: 12px;
				font-weight: inherit;
			}
		}
	}
</style>
