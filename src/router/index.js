import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/home/Home';
import Advisors from '@/components/advisors/Advisors';
import Contact from '@/components/contact/Contact';
import About from '@/components/about/About';
import Services from '@/components/services/Services';

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
    },
    {
      path: '/about',
      name: 'About Us',
      component: About
    },
    {
      path: '/services',
      name: 'Our Services',
      component: Services
    },
  ]
})