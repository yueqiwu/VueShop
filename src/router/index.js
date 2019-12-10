import Vue from 'vue'
import VueRouter from 'vue-router'
// import login from '../components/login/login'

Vue.use(VueRouter)

const login = () => import('../components/login/Login')
const home = () => import('../components/home/Home')

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: login },
  { path: '/home', component: home }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('vue_shop_token')
  if (!token) return next('/login')
  next()
})

export default router