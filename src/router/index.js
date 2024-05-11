import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'main',
      title: 'Главная'
    },
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/how-to-start',
    name: 'how-to-start',
    meta: {
      layout: 'main',
      title: 'Начать играть'
    },
    component: () => import('../views/HowToStartView.vue')
  },
  {
    path: '/donate',
    name: 'donate',
    meta: {
      layout: 'main',
      title: 'Пополнить счет'
    },
    component: () => import('../views/DonateView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    meta: {
      layout: 'empty'
    },
    component: () => import('../views/404View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const Capitalize = word => {
  const firstChar = word.substring(0, 1).toUpperCase()
  return firstChar + word.substring(1).toLowerCase()
}

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title ? to.meta.title : Capitalize(to.params.pathMatch[0])} || Live Russia`
  next()
})

export default router
