<template>
  <div id="app">
    <Header />
    <component v-bind:is="currentTabComponent" :tabs=tabs></component>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import Advisors from './components/Advisors.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Home,
    Contact,
    Advisors
  },
  computed: {
    currentTabComponent: function() {
      return null;
    }
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
