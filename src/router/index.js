/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import MessageDetail from '../pages/MessageDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
  // 配置应用中所有的路由
  routes: [
    // 路由
    {
      path: '/about',
      component: About
    },

    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/news',  // 路径左侧的/代表根路径
          component: News
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              path: '/home/message/detail/:id',
              component: MessageDetail
            },
          ]
        },
        {
          path: '',
          redirect: '/home/news'
        }
      ]
    },

    // 自动跳转的路由
    {
      path: '/',
      redirect: '/about'
    }
  ]
})


