import Vue from 'vue'
import VueRouter from 'vue-router'

const HomePage = () =>import('../views/HomePage/HomePage')
//自己加上自己的懒加载
Vue.use(VueRouter)
//创建router
//自己写自己的routes,去MenuLeft 和MenuRight中的<router-link to="">找对应自己的名字
const routes=[
  {
    path:'',
    redirect:'/homepage'
  },{
    path: '/homepage',
    component:HomePage,
    meta:{
      title:'首页'
    },
  },
]

const router =new VueRouter ({
  routes,
  mode:'history'
})

export default router
