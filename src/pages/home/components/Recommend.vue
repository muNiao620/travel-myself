<template>
	<div>
		<div class="title">
		热销推荐
		</div>
		<ul class="ul-left">
			<!-- 详情页跳转 -->
			<router-link
				tag="li"
				class="item border-bottom"
				v-for="(item, index) of list"
				:key='index'
				:to="'/detail/' + item.id">
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
			</router-link>
		</ul>
	</div>
	
</template>

<script>
export default {
	name: 'HomeRecommend',
	props: {
		list: Array
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
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
			.item-mg
				height: 2rem
				width: 2rem
				padding: .2rem 0
			.item-info
				flex: 1
				padding-left: .22rem
				height: 2.4rem
				// 使多余的文本用3个点表示
				min-width: 0
				.item-title
					padding: .2rem 0
					font-size: .32rem
				.item-desc
					color: #ccc
					padding: .2rem 0
					ellipsis() 
				.item-button
					background: #ff9300
					padding: 0 .2rem
					margin-top: .35rem
					border-radius: .06rem
					color: #fff
</style>