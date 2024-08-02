<template>
  <div class="game-intro" @click="playMusic">
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
    <audio ref="introMusic" src="/assets/audio/theme.mp3" preload="auto" loop></audio>
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
      this.$refs.introMusic.pause(); 
      this.$router.push('/chapter/0');
    },
    playMusic() {
      const audio = this.$refs.introMusic;
      if (audio) {
        audio.play(); 
      }
    }
  },
  mounted() {
    this.playMusic(); 
  }
}
</script>

<style scoped>
@import '/public/assets/css/intro.css';
audio {
  display: none; 
}
</style>
