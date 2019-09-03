<template>
	<div class="search">
		<input
			class="search-input"
			type="text"
			placeholder="输入城市名或拼音">
	</div>
</template>

<script>
export default {
	name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.search
		height: .72rem
		padding: 0 .1rem
		background: $bgColor
		.search-input
			// border-box 告诉浏览器去理解你设置的边框和内边距的值是包含在width内的
			box-sizing: border-box
			width: 100%
			padding: 0 .1rem
			height: .62rem
			border-radius: .06rem
			color: #666
			text-align: center
</style>