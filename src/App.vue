<template>
  <div id="app">
  	<!-- keep-alive是vue自带标签，解决路由频繁发起ajax请求。表示路由被加载后，把内容放到内存当中，再回到这个路由的时候，不需要重新进行ajax请求 ，提高性能的优化-->

  	<!-- exclude="Detail"表示除了Detail（Detail页面的name值）详情页面不会被缓存，其他页面都缓存 也可以通过钩子函数activated来实现相同的功能-->
  	
  	<!-- name值的相关用法：1.可以用来递归 2.可以用来对页面取消缓存 3.vue-tools显示的内容就是name值 -->

    <!-- 注意： 这个地方用了exclude="Detail"后，详情页中的header.vue中的渐隐渐现下拉时出不来，有待解决 -->
  	<keep-alive exclude="Detail">
  		<!-- 显示当前地址所对应的内容 -->
    	<router-view/>
  	</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
