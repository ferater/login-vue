/**
 * Rotada hidden:true ise o rota menude gizlenir
 */
const routes = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
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
        path: '/', name: 'home', hidden: false, component: () => import('pages/Index.vue'), meta: { title: 'home', icon: 'las la-home' },
      },
      {
        path: '/users', name: 'users', hidden: false, component: () => import('pages/users'), meta: { title: 'users', icon: 'las la-user-alt' /** , permissions: ['view-users'] */ },
      },
      {
        path: '/users/edit', name: 'userEdit', hidden: false, component: () => import('pages/users'), meta: { title: 'userEdit', icon: 'las la-user-cog' },
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
