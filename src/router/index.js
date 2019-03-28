import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Xiangqing from '@/components/xiangqing'
import Jh from '@/components/jh'
import Fx from '@/components/fx'
import Wd from '@/components/wd'
import Zp from '@/components/zp'
import Cs from '@/components/cs'
import User from '@/components/user'
import Fb from '@/components/fabu'
import Use from '@/components/list1'
import No from '@/components/noread'
import Update from '@/components/update'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/xiangqing/:id',
      name: 'Xiangqing',
      component: Xiangqing
    },
        {
          path: '/jh',
          name: 'Jh',
          component:Jh
        },
        {
          path: '/fx',
          name: 'Fx',
          component: Fx
        },
        {
          path: '/wd',
          name: 'Wd',
          component: Wd
        },
        {
          path: '/zp',
          name: 'Zp',
          component: Zp
        },
        {
          path: '/cs',
          name: 'Cs',
          component: Cs
        },
        {
          path: '/user/:loginname?',
          name: 'User',
          component: User
        },
        {
          path: '/fb',
          name: 'Fb',
          component: Fb
        },
    {
      path:'/use',
      name:'Use',
      component:Use
    },
    {
      path:'/no',
      name:'No',
      component:No
    },
    {
      path:'/update',
      name:'Update',
      component:Update
    }
  ]
})
