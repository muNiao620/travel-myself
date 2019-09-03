<template>
	<div>
		<div class="search">
			<input
				class="search-input"
				type="text"
				placeholder="输入城市名或拼音"
				v-model="keyword">
		</div>
		<!-- v-show="keyword"没值的时候搜索内容就隐藏，有值就显示 -->
		<div
			class="search-content"
			ref="search"
			v-show="keyword">
			<ul>
				<li
					v-for="item of list"
					class="search-item border-bottm"
					:key="item.id"
					>{{item.name}}</li>
					<!-- v-show="hasNoData"找不到内容时，列表长度不存在就显示，找的到说明有内容就隐藏 -->
				<li
					class="search-item border-bottm"
					v-show="hasNoData">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
	
</template>

<script>
import Bscroll from 'better-scroll'
export default {
	name: 'CitySearch',
	props: {
		cities: Object
	},
	data () {
		return {
			keyword: '',
			list: [],
			timer: null
		}
	},
	computed: {
		hasNoData () {
			return !this.list.length
		}
	},
	watch: {
		// search框中输入地址的时候，下拉列表显示的内容
		keyword () {
			if (this.timer) {
				clearTimeout(this.timer)
			}
			// 当没有输入任何内容时，可以返回到最开始的画面
			if (!this.keyword) {
				this.list = []
				return
			}
			this.timer = setTimeout(() => {
				const result = []
				for (let i in this.cities) {
					this.cities[i].forEach((value) => {
						if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
							result.push(value)
						}
					})
				}
				this.list = result
			},100)
		}
	},
	// 搜索出来的内容能下拉
	mounted () {
		this.scroll = new Bscroll(this.$refs.search)
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.search
		height: .72rem
		padding: 0 .1rem
		background: $bgColor
		.search-input
			// 使输入内容在width内
			box-sizing: border-box
			width: 100%
			padding: 0 .1rem
			height: .62rem
			border-radius: .06rem
			color: #666
			text-align: center
	.search-content
		z-index: 1
		overflow: hidden
		position: absolute
		top: 1.58rem
		left: 0
		right: 0
		bottom: 0
		background: #eee
		.search-item
			line-height: .62rem
			padding-left: .2rem
			background: #fff
			color: #666
</style>
