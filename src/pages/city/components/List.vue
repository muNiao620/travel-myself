<template>
	<div class="list" ref='wrapper'>
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div
						class="button-wrapper">
						<div class="button">
							<!-- {{this.$store.state.city}} -->
							{{this.currentCity}}
						</div>
					</div>
				</div>
			</div>
		<div class="area">
			<div class="title border-topbottom">热门城市</div>
			<div class="button-list">
				<!-- @click="handleCityClick(item.name)"点击时能把数据进行分享传递 -->
				<div
					class="button-wrapper"
					v-for="item of hotCities"
					:key="item.id"
					@click="handleCityClick(item.name)">
					<div class="button">{{item.name}}</div>
				</div>
			</div>
		</div>
		<div
			class="area"
			v-for="(item, key) of cities"
			:key="key"
			:ref="key">
			<div class="title border-topbottom">{{key}}</div>
			<div class="item-list">
				<div
					class="item border-bottom"
					v-for="innerItem of item"
					:key="innerItem.id"
					@click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
// vuex中的高级api,用来插值
import { mapState, mapMutations } from 'vuex'
export default {
	name: 'CityList',
	props: {
		cities: Object,
		hotCities: Array,
		// 此处letter是Alphabet组件传过来点击的字母,传到city组件，再从city组件传到list组件
		letter: String
	},
	computed: {
		// 表示把mapState中city映射到计算属性当中，可以使数组，也可以是对象
		// ...mapState(['city'])
		...mapState ({
			currentCity: 'city'
		})
	},
	methods: {
		handleCityClick (city) {
			// changeCity表示图片中的actions
			// this.$store.dispatch('changeCity', city)
			// 没有异步操作,操作简单，没有批量操作，可以直接调用mutations
			// this.$store.commit('changeCity', city)
			this.changeCity(city)
			// vue里两种跳转：第一是router-link,第二是router的实例方法router.push
			// vue的第二种编程式导航，跳转
			this.$router.push('/')
		},
		...mapMutations (['changeCity'])
	},
	mounted () {
		this.scroll = new Bscroll(this.$refs.wrapper)
	},
	watch: {
		// 点击事件监听letter是否改变，
		letter () {
			if (this.letter) {
				const element = this.$refs[this.letter][0]
				// scrollToElement只能获取dom元素，然后滚轮滚到相对应的元素，是插件自带的方法
				this.scroll.scrollToElement(element)
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	// 控制边框的颜色
	.border-topbottom
		&:before
			border-color: #ccc
		&:after
			border-color: #ccc
	.border-bottom
		&:before
			border-color: #ccc
	.list
		overflow: hidden
		position:absolute
		top: 1.58rem
		left: 0
		right: 0
		bottom: 0
		.title
			line-height: .54rem
			background: #eee
			padding-left: .2rem
			color: #666
			font-size: .26rem
		.button-list
			overflow: hidden
			padding: .1rem .6rem .1rem .1rem
			.button-wrapper
				width: 33.33%
				float: left
				.button
					margin: .1rem
					padding: .1rem 0
					text-align: center
					border: .02rem solid #ccc
					border-radius: .06rem
		.item-list
			.item
				line-height: .76rem
				color: #666
				padding-left: .2rem
</style>