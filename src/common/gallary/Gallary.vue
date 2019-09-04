<template>
	<!-- 点击图片画廊弹出来的窗口 -->
	<div class="container" @click="handleGallaryClick">
		<div class="wrapper">
			<swiper
				:options="swiperOption">
		    <swiper-slide
		    	v-for="(item,index) of imgs"
		    	:key="index">
		    	<img
			    	class="gallary-img"
			    	:src="item">
		    </swiper-slide>
		    <!-- 用来显示分页的 -->
    		<div class="swiper-pagination"  slot="pagination"></div>
  		</swiper>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CommonGallary',
	props: {
		imgs: {
			type: Array,
			default () {
				return []
			}
		}
	},
	data () {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				// swiper官网可以查看
				paginationType: 'fraction',
				// 用来解决该元素或者父级元素发生变化时（画廊点击时的隐藏于显示就是发生变化，结果图片宽度计算有问题），自动刷新一下，解决图片宽度计算问题
				observeParents: true,
				observer: true
			}
		}
	},
	methods: {
		handleGallaryClick () {
			this.$emit('close')
		}
	}
}
</script>

<style lang="stylus" scoped>
	.container >>> .swiper-container
		overflow: inherit
	.container
		display: flex
		flex-direction: column
		justify-content: center
		z-index: 99
		position: fixed
		left: 0
		right: 0
		top: 0
		bottom: 0
		background: #000
		.wrapper
			// overflow: hidden
			width: 100%
			height: 0
			padding-bottom: 100%
			.gallary-img
				width: 100%
			.swiper-pagination
				color: #fff
				bottom: -1rem
</style>