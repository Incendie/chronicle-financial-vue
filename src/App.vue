<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

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
					{name: 'Contact Us', href: 'contact'}
				]
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
