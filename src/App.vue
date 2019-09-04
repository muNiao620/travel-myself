<template>
  <div id="app">
  	<!-- keep-alive是vue自带标签，解决路由频繁发起ajax请求。表示路由被加载后，把内容放到内存当中，再回到这个路由的时候，不需要重新进行ajax请求 ，提高性能的优化-->
  	<keep-alive>
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
