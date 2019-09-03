<template>
	<ul class="list">
		<li
			class="item"
			v-for="item of letters"
			:key="item"
			:ref="item"
			@touchstart="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd"
			@click="handleLetterClick">{{item}}</li>
	</ul>
</template>

<script>
export default {
	name: 'CityAlphabrt',
	props: {
		cities: Object
	},
	computed: {
		letters () {
			const letters = []
			for (let i in this.cities) {
				// console.log(i)
				letters.push(i)
			}
			// letters = ['A','B','C'...]
			return letters
		}
	},
	data () {
		return {
			touchStatus: false,
			startY: 0,
			timer: null
		}
	},
// 性能优化1
	updated () {
		this.startY = this.$refs['A'][0].offsetTop
	},
	methods: {
		// 点击事件方法
		handleLetterClick (e) {
			this.$emit('change', e.target.innerText)
		},
		// 滚动事件方法  思路：取触摸到的字母高度值（offsetTop）与A字母的高度差，然后除以单个字母的高度，就会得到是触摸的字母是第几个字母
		handleTouchStart () {
			this.touchStatus = true
		},
		handleTouchMove (e) {
			if (this.touchStatus) {
				// 性能优化2：函数节流，每7ms执行一次
				if (this.timer) {
					clearTimeout(this.timer)
				}
				this.timer = setTimeout(() => {
					// 获取A元素距离顶部的高度
					// const startY = this.$refs['A'][0].offsetTop
					const touchY = e.touches[0].clientY - 79
					const index = Math.floor((touchY - this.startY) / 20)
					// console.log(index)
					if (index >= 0 && index < this.letters.length) {
						this.$emit('change', this.letters[index])
					}
				}, 7)
			}
		},
		handleTouchEnd () {
			this.touchStatus = false
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.list
		display: flex
		flex-direction: column
		justify-content: center
		position: absolute
		top: 1.48rem
		right: 0
		bottom: 0
		width: .4rem
		.item
			line-height: .4rem
			text-align: center
			color: $bgColor
</style>
