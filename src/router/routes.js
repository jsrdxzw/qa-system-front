
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('pages/Index.vue') },
      { path: '', name: 'questionList', component: () => import('pages/QuestionList.vue') }
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('pages/Login')
  },
  {
    name: 'article',
    path: '/article/:id',
    component: () => import('pages/Article')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
