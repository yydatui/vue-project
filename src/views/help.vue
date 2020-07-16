<template>
	<div id="help">
		<img class="animated bounce" src="http://doc.canglaoshi.org/tstore_v1/images/lookforward/lookforward_img1.png" />
		<p class="animated slideInDown">服务暂未上线 敬请期待!!</p>
		<footerBox></footerBox>
	</div>
</template>

<script>
	import footerBox from '../common/footerBox.vue'
	export default {
		components: {
			footerBox
		}
	}
</script>

<style lang="scss" scoped>
	#help {
		width: 1000px;
		height: 700px;
		margin: auto;
		text-align: center;

		img {
			margin-top: 150px;
		}

		p {
			margin: 20px 0 180px 0;
			font-size: 20px;
			opacity: 0.3;
		}

		.animated {
			animation-duration: 1s;
			animation-fill-mode: both;
		}

		.bounce {
			animation-name: bounce;
			transform-origin: center bottom;
		}

		.slideInDown {
			animation-name: slideInDown;
		}
	}

	@keyframes bounce {

		from,
		20%,
		53%,
		80%,
		to {
			animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
			transform: translate3d(0, 0, 0);
		}

		40%,
		43% {
			animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
			transform: translate3d(0, -30px, 0);
		}

		70% {
			animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
			transform: translate3d(0, -15px, 0);
		}

		90% {
			transform: translate3d(0, -4px, 0);
		}
	}

	@keyframes slideInDown {
		from {
			transform: translate3d(0, -100%, 0);
			visibility: visible;
		}

		to {
			transform: translate3d(0, 0, 0);
		}
	}
</style>
