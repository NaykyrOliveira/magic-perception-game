<template>
  <div class="hero">
      <nav class="menu" >
          <router-link to="/">Bem-vindo</router-link>
          <router-link to="/about">Quem Somos</router-link>
      </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
}
</script>

<style>
@import '/public/assets/css/navbar.css';
</style>