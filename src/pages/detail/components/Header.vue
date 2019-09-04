<template>
	<div>
		<router-link
			class="header-abs"
			to="/"
			v-show="showAbs">
			<div class="iconfont header-abs-back">&#xe624;</div>
		</router-link>
		<!-- :style="opacityStyle"用来处理渐隐渐现的效果 -->
		<div
			class="header-fixed"
			v-show="!showAbs"
			:style="opacityStyle">
			<router-link to="/">
				<div class="iconfont header-fixed-back">&#xe624;</div>
			</router-link>
			景点详情
		</div>
	</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
	name: 'DetailHeader',
	data () {
		return {
			showAbs: true,
			opacityStyle: {
				opacity: 0
			}
		}
	},
	methods: {
		handleScroll () {
			// 顶部距离
			const top = document.documentElement.scrollTop
			if (top > 40) {
				let opacity = top / 140
				opacity = opacity > 1 ? 1 : opacity
				this.opacityStyle = {
					// 下面是简写：实际是opacity: opacity
					opacity
				}
				this.showAbs = false
			} else {
				this.showAbs = true
			}
			// console.log(document.documentElement.scrollTop)
		}
	},
	// 用来得到移动的距离（与顶部的距离），进而通过判断距离来显示或者一次头部
	activated () {
		window.addEventListener('scroll', this.handleScroll)
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.header-abs
		position: absolute
		left: .2rem
		top: .2rem
		width: .8rem
		height: .8rem
		line-height: .8rem
		border-radius: .4rem
		text-align: center
		background: rgba(0, 0, 0, 8)
		.header-abs-back
			color: #fff
			font-size: .4rem
	.header-fixed
		position: fixed
		left: 0
		top: 0
		right: 0
		height: $headerHeight
		line-height: $headerHeight
		text-align: center
		color: #fff
		background: $bgColor
		font-size: .32rem
		.header-fixed-back
			position: absolute
			left: 0
			top: 0
			width: .64rem
			color: #fff
			text-align: center
			font-size: .36rem
</style>