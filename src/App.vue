<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js App"/>
    <Home />
    <Footer />>
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
