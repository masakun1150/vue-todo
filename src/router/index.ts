import { createRouter, createWebHistory } from 'vue-router'
import Todo from '@/components/Todo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todo',
      component: Todo
    },
  ]
})

export default router
