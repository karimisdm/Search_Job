import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobResultsView from '@/views/JobResultsView.vue'
import JobView from '@/views/JobView.vue'
import TeamsView from '@/views/TeamsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jobs/results',
      name: 'JobResults',
      component: JobResultsView,   
    },
    {
      path:'/jobs/results/:id',
      name:'JobListing',
      component: JobView,
    },
    {
      path: '/teams',
      name: 'Teams',
      component: TeamsView
    }
  ],
  scrollBehavior(){
    return {top:0, left:0, behavior:'smooth'}
  }
})

export default router
