import { createRouter, createWebHistory } from 'vue-router'
import TaskListView from '@/views/TaskListView/TaskListView.vue'
import TaskDetailView from '@/views/TaskDetailView/TaskDetailView.vue'
import TaskFormView from '@/views/TaskFormView/TaskFormView.vue'
import StatsView from '@/views/StatsView/StatsView.vue'
import NotFoundView from '@/views/NotFoundView/NotFoundView.vue'

const routes = [
  { path: '/', name: 'list', component: TaskListView },
  { path: '/tasks/new', name: 'create', component: TaskFormView },
  { path: '/tasks/:id', name: 'detail', component: TaskDetailView },
  { path: '/tasks/:id/edit', name: 'edit', component: TaskFormView },
  { path: '/stats', name: 'stats', component: StatsView },
  { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFoundView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
