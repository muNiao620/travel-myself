import Vue from 'vue'
import Vuex from 'vuex'
// 将vuex的代码拆分成几个部分（state, index, mutations），便于维护
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// 创建store相当于vuex,即虚线部分的内容
export default new Vuex.Store({
	state: state,
	// actions: {
	// 	changeCity (ctx, city) {
	// 		ctx.commit('changeCity', city)
	// 	}
	// },
	// mutations用来改变点击的状态
	mutations: mutations,
	// vuex中getters，类似于vue中的computed，当需要根据state的数据来计算新的数据时，可以使用getters
	getters: {
		doubleCity (state) {
			return state.city + ' ' + state.city
		}
	}
	// vuex中还有一个概念module,当公用数据庞大时，可以将states或者mutations内容进行拆分，拆成数个小模块，使得代码更好的维护。此处只有city一个公用数据，不需要使用module模块
})