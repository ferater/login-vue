
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/Login.vue'),
    meta: { title: 'login' },
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/', name: 'home', component: () => import('pages/Index.vue'), meta: { title: 'home' },
      },
      {
        path: '/users', name: 'users', component: () => import('pages/users'), meta: { title: 'users' },
      },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
