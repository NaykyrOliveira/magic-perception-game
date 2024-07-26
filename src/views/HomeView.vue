<template>
  <div class="home">
    <Navbar /> 
    <GameIntro /> 
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import GameIntro from '@/components/GameIntro.vue'; 

export default {
  name: 'HomeView',
  components: {
    Navbar,
    GameIntro,

  }
}
</script>

<style scoped>
</style>
