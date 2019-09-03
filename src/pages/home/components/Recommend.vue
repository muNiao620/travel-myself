<template>
	<div>
		<div class="title">
		热销推荐
		</div>
		<ul class="ul-left">
			<li
				class="item border-bottom"
				v-for="(item, index) of recemmendList"
				:key='index'>
				<img
					class="item-mg"
					:src="item.imgUrl"
					>
				<div class="item-info">
					<p class="item-title">
						{{item.title}}
					</p>
					<p class="item-desc">
						{{item.desc}}
					</p>
					<button class="item-button">
						查看详情
					</button>
				</div>
			</li>
		</ul>
	</div>
	
</template>

<script>
export default {
	name: 'HomeRecommend',
	data () {
		return {
			recemmendList: [{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1907/40/401b7b735008f7f4a3.img.jpg_200x200_10ce515e.jpg',
				title: '故宫',
				desc: '东方宫殿建筑代表，世界宫殿建筑典范'
			},{
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1907/40/401b7b735008f7f4a3.img.jpg_200x200_10ce515e.jpg',
				title: '故宫',
				desc: '东方宫殿建筑代表，世界宫殿建筑典范'
			},{
				id: '0003',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1907/40/401b7b735008f7f4a3.img.jpg_200x200_10ce515e.jpg',
				title: '故宫',
				desc: '东方宫殿建筑代表，世界宫殿建筑典范'
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
	.title
		margin-top: .2rem
		line-height: .8rem
		background: #eee
		text-indent: .2rem
	.ul-left
		margin-left: .24rem
		.item
			overflow: hidden
			display: flex
			height: 2.4rem
			// background: red
			// margin-top: .2rem
			.item-mg
				height: 2rem
				width: 2rem
				padding: .2rem 0
			.item-info
				flex: 1
				padding-left: .22rem
				height: 2.4rem
				.item-title
					padding: .2rem 0
					font-size: .32rem
				.item-desc
					color: #ccc
					padding: .2rem 0
				.item-button
					background: #ff9300
					padding: 0 .2rem
					margin-top: .35rem
					border-radius: .06rem
					color: #fff
</style>