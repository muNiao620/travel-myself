<template>
	<div class="icons">
		<swiper>
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
    <div class="swiper-pagination"  slot="pagination"></div>
  	</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeIcons',
	data () {
		return {
			swiperOption: {
				pagination: '.swiper-pagination'
			},
			iconList: [{
				id: "0001",
				imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
				desc: "景点门票景点门票"
			},{
				id: "0002",
				imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
				desc: "杭州野生"
			},
			{
				id: "0003",
				imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
				desc: "杭州必游"
			},{
				id: "0004",
				imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
				desc: "漂流"
			},{
				id: "0005",
				imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
				desc: "一日游"
			},{
				id: "0006",
				imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
				desc: "千岛湖"
			},{
				id: "0007",
				imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
				desc: "印象西湖"
			},{
				id: "0008",
				imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
				desc: "浪浪浪水公园"
			},{
				id: "0009",
				imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
				desc: "杭州宋城"
			},{
				id: "0010",
				imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
				desc: "杭州极地"
			},]
		}
	},
	computed: {
		// 通过计算属性计算page的页数
		pages () {
			const pages = []
			this.iconList.forEach((item, index) => {
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