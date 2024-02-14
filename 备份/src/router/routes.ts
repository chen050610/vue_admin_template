export const constantRoute = [
  {
    path: '/login',
    //@ts-ignore
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  {
    path: '/home',
    //@ts-ignore
    component: () => import('@/views/home/home.vue'),
    name: 'layout',
  },
  {
    path: '/404',
    //@ts-ignore
    component: () => import('@/views/404/404.vue'),
    name: '404',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    //@ts-ignore
    name: 'Any',
  },
]
