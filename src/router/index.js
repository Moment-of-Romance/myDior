import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/index.vue'
import Home from '../components/home/index.vue'
import NotFound from '../view/notfound.vue'

//时装及配饰
import Lady from '../components/closes/lady.vue'
import Men from '../components/closes/men.vue'
import ChildWear from '../components/closes/childwear.vue'

//香氛 彩妆 护肤
import Xiangfen from '../components/makeup/xiangfen.vue'
import Caizhuang from '../components/makeup/caizhuang.vue'
import Hufu from '../components/makeup/hufu.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path:'/home',
          component: Home
        },
        {
          path:'/lady',
          component: Lady
        },
        {
          path:'/men',
          component: Men
        },
        {
          path:'/childwear',
          component: ChildWear
        },
        {
          path:'/xiangfen',
          component:Xiangfen
        },
        {
          path:'/caizhuang',
          component:Caizhuang
        },
        {
          path:'/hufu',
          component:Hufu
        }
      ]
    }
  ]
})
