
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/Login.vue'),
    meta: { title: 'login' },
  },
  {
    path: '/',
    name: 'root',
    component: () => import('layouts/MainLayout.vue'),
    /**
     * Rotalarda name ve meta.title aynı olmalı (breadCrumbs için)
     */
    children: [
      {
        path: '/', name: 'home', component: () => import('pages/Index.vue'), meta: { title: 'home' },
      },
      {
        path: '/users', name: 'users', component: () => import('pages/users'), meta: { title: 'users' },
      },
      {
        path: '/users/edit', name: 'userEdit', component: () => import('pages/users'), meta: { title: 'userEdit' },
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
