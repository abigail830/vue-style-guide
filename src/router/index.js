import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import PageButton from '@/pages/PageButton'
import PageColor from '@/pages/PageColor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/btn',
      name: 'PageButton',
      component: PageButton
    },
    {
      path: '/color',
      name: 'PageColor',
      component: PageColor
    }
  ]
})
