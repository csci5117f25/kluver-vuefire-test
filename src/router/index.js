import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import FunView from '../views/FunView.vue'
import CreateDeleteView from '../views/CreateDeleteView.vue'
import PushTest from '../views/pushTest.vue'
import { getCurrentUser } from 'vuefire'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/fun',
      name: 'fun',
      component: FunView,
    },
    {
      path: '/create_delete',
      name: 'create_delete',
      component: CreateDeleteView,
    },
    
    {
      path: '/test',
      name: 'test',
      component: TestView,
    },
    
    {
      path: '/pushtest',
      name: 'pushtest',
      component: PushTest,
    },
    {
      path: '/test/:id',
      name: 'test_w_id',
      component: TestView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { userOnly: "yas" },
    },
  ],
})

router.beforeEach(async (to) => {
  // routes with `meta: { requiresAuth: true }` will check for
  // the users, others won't
  if (to?.meta?.userOnly === "yas") {
    const currentUser = await getCurrentUser()
    // if the user is not logged in, redirect to the login page
    if (!currentUser) {
      return {
        path: '/',
      }
    }
  }
})

export default router
