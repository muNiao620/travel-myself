<template>
  <div class="wrapper">
    <swiper
    :options="swiperOption"
    v-if="showSwiper">
    <swiper-slide
    v-for="item of list"
    :key="item.id">
    	<img
    	class="swiper-img"
    	:src="item.imgUrl">
    </swiper-slide>

    <!-- 用来显示分页的 -->
    <div class="swiper-pagination"  slot="pagination"></div>
  	</swiper>
  </div>
</template>
	
<script>
export default {
  name: 'HomeSwiper',
  data () {
  	return {
  		swiperOption: {
  			pagination: ".swiper-pagination",
  			// 轮播插件支持循环轮播
  			loop: true
  		}
  	}
  },
  props: {
    list: Array
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
// >>>表示穿透，因为.swiper-pagination-bullet-active不是当前组件产生的类，不能为其他组件的类定义样式，所以通过穿透就可以定义.wrapper类下的任何出现.swiper-pagination-bullet-active的位置的样式
	.wrapper >>> .swiper-pagination-bullet-active
		background: #fff
// .wrapper类的作用是解决，当页面刷新时，图片未加载出来的时候，出现的布局问题（图片不占流）
	.wrapper
		overflow: hidden
		width: 100%
		height: 0
		padding-bottom: 31.2%
		.swiper-img
			width: 100%
			
			
</style>