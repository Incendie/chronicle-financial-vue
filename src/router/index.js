import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Advisors from '@/components/Advisors';
import Contact from '@/components/Contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/advisors',
      name: 'Advisors',
      component: Advisors
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})