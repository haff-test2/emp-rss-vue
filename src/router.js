import VueRouter from 'vue-router'
import FeedList from '@/components/FeedList'
import ReaderPage from '@/components/ReaderPage'
import SignIn from '@/components/SignIn'
import { isAuthentificated } from '@/services/sessions'

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/feeds', component: FeedList },
    { path: '/feeds', name: 'feeds', component: FeedList, meta: { requiresAuth: true } },
    { path: '/reader', name: 'reader', component: ReaderPage },
    { path: '/sign_in', name: 'sign_in', component: SignIn },
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthentificated()) {
      next({ path: '/sign_in', replace: true})
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

