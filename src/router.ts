import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Button from '@element-plus/button'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/button',
    name: 'button',
    component: Button,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
