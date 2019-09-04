export default  {
	changeCity (state, city) {
		state.city = city
		// localStorage本地存储数据，类似cookie,可以使每次刷新的时候，
		// 访问的地方是上一次访问的地方,每次使用时，最好用try catch 包裹起来
		try {
			localStorage.city = city
		} catch (e) {}
		
	}
}