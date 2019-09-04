<template>
	<div>
		<!-- 通过ajax请求的数据传过来的，数据在后端存储 -->
		<!-- <HomeHeader :city="city"/> -->
		<HomeHeader/>
		<HomeSwiper :list="swiperList"/>
		<HomeIcons :list="iconList"/>
		<HomeRecommend :list="recommendList"/>
		<HomeWeekend :list="weekendList"/>
	</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
	name: 'Home',
	components: {
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend
	},
	data () {
		return {
			// city: '',
			swiperList: [],
			iconList: [],
			recommendList: [],
			weekendList: []
		}
	},
	methods: {
		getHomeInfo () {
			// 返回的结果是一个promise对象,请求的地址通过proxyTable(config文件夹下的index.js中设置)进行代理，将请求地址重写成/static/mock/index.json
			axios.get('/api/index.json')
				.then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc (res) {
			// 请求数据的最外层data
			res = res.data
			//判断里面的ret和data是否存在
			if (res.ret && res.data) {
				const data = res.data
				// this.city = data.city
				this.swiperList = data.swiperList
				this.iconList = data.iconList
				this.recommendList = data.recommendList
				this.weekendList = data.weekendList
			}
			// console.log(res)
		}
	},
	mounted () {
		// 页面加载时执行这个函数，发起ajx请求，获取数据
		this.getHomeInfo ()
	}
}
</script>

<style>
	
</style>
