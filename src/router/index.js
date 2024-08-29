import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogDetailView from '@/views/BlogDetailView.vue'
import LoginView from '@/views/LoginView.vue'
import BlogView from '@/views/BlogView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import DashboardView from '@/views/DashboardView.vue'
import CreateBlogView from '@/views/CreateBlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    },
    {
      path: '/admin',
      name: 'admin',
      component: DashboardView
    },
    {
      path: '/admin/blog/create',
      name: 'createBlog',
      component: CreateBlogView
    },
    {
      path: '/blog/:id',
      name: 'blogDetail',
      component: BlogDetailView
    }
  ]
})

export default router
