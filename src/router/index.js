import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',name: 'login',component: () => import('../views/Login.vue')
  },
  {
      path: '*',name: 'notFound',component : () => import('@/views/NotFound.vue')
  },
  {
    path: '/home',name: 'home',component: () => import('../views/Home.vue'),redirect:'welcome',leaf:false,children:[
          {
              path: '/welcome',name: 'welcome',component: () => import('../views/Welcome.vue')
          }/*,
          {
              path: '/menu',name: 'menu',component: () => import('../views/Menu.vue')
          },
          {
              path: '/user',name: 'user',component: () => import('../views/User.vue')
          },
          {
              path: '/role',name: 'role',component: () => import('../views/Role.vue')
          }*/
      ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;


































