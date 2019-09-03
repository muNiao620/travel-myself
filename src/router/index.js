import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    // 组件所在路径
      path: '/city',
    // 组件的中的name属性名
      name: 'City',
		// 组件名字
      component: City
    }
  ]
})
