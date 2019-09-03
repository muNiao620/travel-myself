<template>
	<div>
		<div class="title">
		周末去哪儿
		</div>
		<ul class="ul-left">
			<li
				class="item border-bottom"
				v-for="(item, index) of recemmendList"
				:key='index'>
				<div class="item-img-wrapper">
					<img
					class="item-mg"
					:src="item.imgUrl"
					>
				</div>
				
				<div class="item-info">
					<p class="item-title">
						{{item.title}}
					</p>
					<p class="item-desc">
						{{item.desc}}
					</p>
				</div>
			</li>
		</ul>
	</div>
	
</template>

<script>
export default {
	name: 'HomeWeekend',
	data () {
		return {
			recemmendList: [{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
				title: '故宫',
				desc: '东方宫殿建筑代表，世界宫殿建筑典范'
			},{
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
				title: '故宫',
				desc: '东方宫殿建筑代表，世界宫殿建筑典范'
			},{
				id: '0003',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
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
	.item-img-wrapper
		overflow: hidden
		height: 0
		padding-bottom: 33.4%
		.item-mg
			width: 100%
	.item-info
		flex: 1
		padding-left: .22rem
		.item-title
			padding: .2rem 0
			font-size: .32rem
		.item-desc
			color: #ccc
			padding: .1rem 0
</style>