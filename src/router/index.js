import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomePage,
      meta: { title: "Home - Pablo Câmara's Blog" }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue'),
      meta: { title: "Login - Pablo Câmara's Blog" }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterPage.vue'),
      meta: { title: "Register - Pablo Câmara's Blog" }
    }
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ?? "Pablo Câmara's Blog";
  next();
});

export default router
