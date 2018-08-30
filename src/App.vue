<template>
  <div id="app">
    <Header />
    <router-view />
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
  props: {
    tabs:
				[
					{name: 'About Us', href: 'about'},
					{name: 'Advisors', href: 'advisors'},
					{name: 'Services', href: 'services'},
					{name: 'Contact Us', href: 'contact'},
				]
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
