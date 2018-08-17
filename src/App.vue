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
}
</script>

<style lang="scss">
  @import './scss/styles.scss';
</style>
