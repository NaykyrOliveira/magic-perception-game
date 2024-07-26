<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Contact />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

import Contact from './components/Contact.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Contact
  }
};
</script>

<style>
@import '/public/assets/css/style.css';
</style>
