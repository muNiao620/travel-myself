<template>
	<div class="header">
		<div class="header-left">
			<!-- 引入icon图标，类名必须为iconfont，不然无法显示 -->
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont icon-back">&#xe632;</span>
			输入城市/景点/游玩主题
		</div>
		<div class="header-right">
			城市
			<span class="iconfont arrow-icon">&#xe64a;</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
// 样式里面引入样式，需要加一个@符号
// 第一种引用
// @import '../../../assets/styles/varibles.styl'
// 第二种引用~@，@表示src这个目录，是在配置中(webpack.base.conf)设置的，此处用@前面一定要加波浪线
// 第三种引用 在webpack.base.conf，让styles表示src/assets/styles目录
@import '~styles/varibles.styl' 
	.header
		display: flex
		line-height: .88rem
		background: $bgColor
		color: #fff
		.header-left
			width: .4rem
			padding: 0 .2rem
			.back-icon
				font-size: .36rem
		.header-input
			flex: 1
			line-height: .6rem
			margin: .14rem 0
			padding-left: .2rem
			background: #fff
			border-radius: .05rem
			color: #ccc
		.header-right
			padding: 0 .22rem
			text-align: center
			.arrow-icon
				font-size: .24rem
</style>