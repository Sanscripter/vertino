import Vue from 'vue';
import VueRouter from 'vue-router';

import DashboardLayout from '@/layout/DashboardLayout.vue'
import AuthLayout from '@/layout/AuthLayout.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirectTo: '/dashboard',
  },
  // {
  //   path: '/dashboard',
  //   name: 'dashboard',
  //   // route level code-splitting
  //   // this generates a separate chunk (Dashboard.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "Dashboard" */ '../views/Dashboard.vue'),
  // },
  {
    path: '/blogs',
    name: 'blogs',
    component: () => import('../views/Blogs.vue'),
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('../views/Articles.vue'),
  },
  {
    path: '/media',
    name: 'media',
    component: () => import('../views/Media.vue'),
  },
  {
    path: '/compose',
    name: 'compose',
    component: () => import('../views/Compose.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '@/views/Argon/Dashboard.vue')
      },
      {
        path: '/icons',
        name: 'icons',
        component: () => import(/* webpackChunkName: "demo" */ '@/views/Argon/Icons.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '@/views/Argon/UserProfile.vue')
      },
      {
        path: '/maps',
        name: 'maps',
        component: () => import(/* webpackChunkName: "demo" */ '@/views/Argon/Maps.vue')
      },
      {
        path: '/tables',
        name: 'tables',
        component: () => import(/* webpackChunkName: "demo" */ '@/views/Argon/Tables.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '@/views/Argon/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '@/views/Argon/Register.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;
