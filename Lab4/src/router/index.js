import { createRouter, createWebHistory } from 'vue-router'
import { ROUTE_NAMES } from '@/constants'
import HomeView from '@/views/HomeView'
import EventDetailsView from '@/views/EventDetailsView'
import RegistrationView from '@/views/RegistrationView'
import NotFoundView from '@/views/NotFoundView'

const routes = [
  {
    path: '/',
    name: ROUTE_NAMES.HOME,
    component: HomeView,
  },
  {
    path: '/events/:id',
    name: ROUTE_NAMES.EVENT_DETAILS,
    component: EventDetailsView,
    props: true,
  },
  {
    path: '/events/:id/register',
    name: ROUTE_NAMES.EVENT_REGISTRATION,
    component: RegistrationView,
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: ROUTE_NAMES.NOT_FOUND,
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

export default router
