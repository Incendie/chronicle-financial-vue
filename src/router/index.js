import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/home/Home';
import Advisors from '@/components/advisors/Advisors';
import Contact from '@/components/contact/Contact';
import Services from '@/components/services/Services';
import Consultation from '@/components/contact/Consultation';
import DidYouKnow from '@/components/contact/DidYouKnow';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/advisors',
      name: 'Advisors',
      component: Advisors,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/services',
      name: 'Our Services',
      component: Services,
    },
    {
      path: '/didyouknow',
      name: 'Did You Know?',
      component: DidYouKnow,
    },
    {
      path: '/consultation',
      name: 'Consultation',
      component: Consultation,
    },
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
  
})