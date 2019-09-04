let defaultCity = '上海'
try {
	if (localStorage.city) {
		defaultCity = localStorage.city
	}
}	catch (e) {}

export default {
	// 优先选择localStorage.city中的数据，没有就选上海
	city: defaultCity
}