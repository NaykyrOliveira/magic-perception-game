<template>
  <div class="game-intro">
    <h1 class="game-title">Magic Perception Game</h1>
    <p class="game-description">
      Bem-vindo ao nosso jogo interativo, inspirado no universo mágico de Harry Potter! Aqui está como você pode jogar:
      <br /><br />
      1. **Use sua varinha (mouse):** Mova o mouse para lançar feitiços e iluminar pistas escondidas.
      <br />
      2. **Descubra novas perspectivas:** Explore o ambiente do jogo para encontrar detalhes e insights únicos.
      <br />
      3. **Resolva enigmas:** Use as pistas para resolver desafios e avançar na história.
    </p>
    <button @click="startChapter" class="start-button">Iniciar Jogo</button>
  </div>
</template>

<script>
import challengesData from '@/data/challenges.json';

export default {
  data() {
    return {
      challenges: challengesData
    };
  },
  methods: {
    startChapter() {
      this.$router.push('/chapter/0');
    }
  }
}
</script>

<style>
@import '/public/assets/css/intro.css';
</style>
