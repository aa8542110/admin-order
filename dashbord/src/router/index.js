import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Order from '@/components/Order';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/',
      name: 'null',
      component: Home,
    },
    {
      path: '/orders',
      name: 'order',
      component: Order,
    },
  ],
});
