// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端有个300ms点击延迟的问题,在终端安装后fastclick后引入
import fastClick from 'fastClick'
// 导入轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 设置每个页面的基础样式,styles是配置的路径别名
import 'styles/reset.css'
// 解决多倍屏里面1px边框变成多像素的问题
import 'styles/border.css'
//引入iconfont库
import 'styles/iconfont.css'
// 导入轮播css文件
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
// 使用轮播插件
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
