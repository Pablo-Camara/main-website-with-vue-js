import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import { useAuthStore } from '@/stores/useAuthStore';

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
    },
    {
      path: '/my-account',
      name: 'my-account',
      component: () => import('../views/MyAccount.vue'),
      meta: { 
        title: "My Account - Pablo Câmara's Blog",
        requiresAuth: true
      }
    }
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ?? "Pablo Câmara's Blog";
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login'); // Redirect to login if not authenticated
  } else {
    next(); // Otherwise, proceed
  }
});

export default router
