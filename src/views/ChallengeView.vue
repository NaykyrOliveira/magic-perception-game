<template>
  <div v-if="currentChallenge" class="challenge-view">
    <h2>{{ currentChallenge.title }}</h2>
    <p>{{ currentChallenge.description }}</p>
    <img 
      :src="currentChallenge.image" 
      usemap="#challenge-map" 
      alt="Desafio de Observação" 
    />
    <button 
      v-if="isChallengeCompleted" 
      @click="goToNextChapter" 
      class="chapter-next"
    >
      Ir para o Próximo Capítulo
    </button>
    <map name="challenge-map">
      <area
        v-for="area in currentChallenge.mapAreas"
        :key="area.id"
        shape="rect"
        :coords="area.coords"
        :alt="area.alt"
        href="#"
        @click="revealDetail(area.id)"
      />
    </map>
    <div v-for="hint in revealedHints" :key="hint">{{ hint }}</div>
    <Footprints />
  </div>
  <p v-else>Nenhum desafio encontrado.</p>
</template>

<script>
import challengesData from '@/data/challenges.json';
import Footprints from '@/components/Footprints.vue';

export default {
  name: 'ChallengeView',
  components: {
    Footprints,
  },
  data() {
    return {
      currentChallenge: null,
      revealedHints: [],
    };
  },
  computed: {
    isChallengeCompleted() {
      if (!this.currentChallenge) return false;
      return this.currentChallenge.mapAreas.every(area =>
        this.revealedHints.includes(area.hint)
      );
    }
  },
  created() {
    this.loadChallenge();
  },
  watch: {
    '$route.params.challengeId': 'loadChallenge',
  },
  methods: {
    loadChallenge() {
      const challengeId = parseInt(this.$route.params.challengeId, 10);
      this.currentChallenge = challengesData.find(challenge => challenge.id === challengeId) || {};
    },
    revealDetail(id) {
      const area = this.currentChallenge.mapAreas.find(a => a.id === id);
      if (area && !this.revealedHints.includes(area.hint)) {
        this.revealedHints.push(area.hint);
      }
    },
    goToNextChapter() {
      const nextChapterId = this.currentChallenge.nextChapterId;
      if (nextChapterId) {
        this.$router.push({ name: 'ChallengeView', params: { challengeId: nextChapterId } });
      }
    }
  }
};
</script>

<style scoped>
.challenge-view {
    padding: 20px;
}
.challenge-view img {
    max-width: 100%;
}
.challenge-view map area {
    cursor: pointer;
}

.chapter-next{
  display: flex;
  align-items: center;
  margin: 1rem auto;
  height: 40px;
  padding: 1rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background: rgb(112, 75, 20);
  color: #adaba2;
  clip-path: polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%);
}
</style>
