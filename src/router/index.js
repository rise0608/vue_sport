import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入login组件
import Login from "../components/Login.vue" 

Vue.use(VueRouter)

//配置路由
const routes = [
  {
    path:"/",
    redirect:"/login"
  },
  {
    path:"/login",
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
