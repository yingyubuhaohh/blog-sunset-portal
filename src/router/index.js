import {createRouter, createWebHistory} from 'vue-router'
import store from '../store'
import { ElMessage } from 'element-plus'

const routes = [
  {
    path: '/',
    name: 'blog',
    component: () => import('@/views/blog/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/blog/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/file',
    name: 'file',
    component: () => import('@/views/file/index.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/views/message/index.vue')
  },
  {
    path: '/tool',
    name: 'tool',
    component: () => import('@/views/tool/index.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/detail/index.vue')
  },
  {
    path: '/*',
    component: () => import('@/views/login/index.vue')
  }
]

const router = createRouter({
  base: '/blog/',
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  if(store.state.token){
    //有token信息
    //如果请求的是登录页面则直接跳转到首页
    if(to.path == "/login"){
      next({path: '/'});
    }else{
      //判断是否需要获取用户信息
      if(store.state.name.length == 0){
        store.dispatch("getUserInfo").then((res)=>{
          next();
        }).catch((error)=>{
          ElMessage({
            message: '登录过期',
            type: 'warning',
          })
          next({path: '/login'});
        })
      }else{
        next();
      }
    }
  }else{
    next();
  }
})

export default router
