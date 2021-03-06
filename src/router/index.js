import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

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
    },
    {
      // 动态路由
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // vue-router的滚动行为，解决多页面滚动互相影响
  scrollBehavior (to, from, savedPosition) {
    // 表示每次新进页面的时候，始终回到最顶部
    return { x: 0, y: 0 }
  }
})
