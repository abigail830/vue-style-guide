import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import PageQuiButton from '@/pages/PageQuiButton'
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
      name: 'PageQuiButton',
      component: PageQuiButton
    },
    {
      path: '/color',
      name: 'PageColor',
      component: PageColor
    }
  ]
})
