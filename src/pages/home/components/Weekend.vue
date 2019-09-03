<template>
	<div>
		<div class="title">
		周末去哪儿
		</div>
		<ul class="ul-left">
			<li
				class="item border-bottom"
				v-for="(item, index) of list"
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
	props: {
		list: Array
	}
}
</script>

<style lang="stylus" scoped>
	.title
		line-height: .8rem
		background: #eee
		text-indent: .2rem
	.item-img-wrapper
		overflow: hidden
		height: 0
		padding-bottom: 37.09%
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