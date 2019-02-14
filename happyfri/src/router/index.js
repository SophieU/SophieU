import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../page/index/index.vue')
    }, {
      path: '/item',
      name: 'item',
      component:()=>import('../page/item/index.vue')
    }, {
      path: '/score',
      name: 'score',
      component:()=>import('../page/score/index.vue')
    }
  ]
})
