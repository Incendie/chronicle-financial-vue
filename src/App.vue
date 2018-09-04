<template>
  <div id="app">
    <Header :links="links"/>
    <router-view :links="links"/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          name: 'home',
          page: '/'
        },
        {
          id: 1,
          text: 'Advisors',
          name: 'advisors',
          page: '/advisors'
        },
        {
          id: 3,
          text: 'Services',
          name: 'services',
          page: '/services'
        },
        {
          id: 4,
          text: 'Contact',
          name: 'contact',
          page: '/contact'
        }
      ]
    }
  },
  title: 'Chronicle Financial',
  mounted: function() {
		let activeLink = document.getElementsByClassName("router-link-exact-active")[0];

		activeLink.parentElement.classList.add("active");
		activeLink.parentElement.classList.remove("inactive");
	},
	destroyed: function() {
		let activeLink = document.getElementsByClassName("router-link-exact-active")[0];

		activeLink.parentElement.classList.remove("active");
		activeLink.parentElement.classList.add("inactive");
	},
}
</script>

<style lang="scss">
  @import './scss/styles.scss';
</style>
