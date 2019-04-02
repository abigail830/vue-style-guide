import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import PageQuiButton from '@/pages/PageQuiButton'

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
    }
  ]
})
