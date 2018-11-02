import Vue from 'vue'
import {Button} from 'mint-ui'

import App from './App.vue'
import router from './router'

// 注册全局组件
Vue.component(Button.name, Button)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>', // 将<App/>渲染到页面的el元素中
  router // 注册路由器:
})

/*
1个函数:
  VueRoute: 路由构建函数, 用于创建路由器对象, 配置路由
2个对象
  $route: 代表当前路由的对象, 包含当前路由相关信息(path, params参数, query参数)
  $router: 代表路由器对象, 包含控制路由跳转的方法(push/replce/back())
3个标签
  <router-link>: 路由链接, 生成路由链接
  <router-view>: 路由视图, 显示当前路由组件
  <keep-alive>: 缓存路由组件对象
 */
