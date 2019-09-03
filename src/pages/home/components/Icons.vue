<template>
	<div class="icons">
		<swiper :options="swiperOption">
      <swiper-slide
      	v-for="(page, index) of pages"
      	:key="index">
      	<div
      		class="icon"
      		v-for="item of page"
      		:key="item.id">
					<div class="icon-img">
						<img
							:src="item.imgUrl"
							class="img">
					</div>
					<p class="keywords">{{item.desc}}</p>
				</div>
      </swiper-slide>
    <!-- 用来显示分页的 -->
    <div
    	class="swiper-pagination"
    	slot="pagination"></div>
  	</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeIcons',
	data () {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				// 防止轮播图自动滚动
				autoplay: false
			}
		}
	},
	props: {
		list: Array
	},
	computed: {
		// 通过计算属性计算page的页数
		pages () {
			const pages = []
			this.list.forEach((item, index) => {
				const page = Math.floor(index / 8)
				if (!pages[page]) {
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
	.icons >>> .swiper-container
		height: 0
		padding-bottom: 50%
		padding-top: .1rem
	.icon
		float: left
		width: 25%
		height: 1.5rem
		padding-top: .1rem
		text-align: center
		// background: green
		.icon-img
			display: inline-block
			width: $widthAndHeigh
			height: $widthAndHeigh
			.img
				width: $widthAndHeigh
				height: $widthAndHeigh
		.keywords
			margin-top: .1rem
			color: #212121
			font-size: .28rem
			ellipsis()
</style>