<template>
  <div class="emotion-quiz">
    <div class="options">
      <button v-for="option in options" :key="option.label" @click="checkAnswer(option)">
        {{ option.label }}
      </button>

    </div>
    <p v-if="feedback">{{ feedback }}</p>
  </div>
</template>

<script>
import challengesData from '@/data/challenges.json';

export default {
  name: 'Social',
  data() {
    return {
      currentChallenge: {},
      options: [],
      feedback: ''
    };
  },
  created() {
    this.loadChallenge();
  },
  methods: {
    loadChallenge() {
      const challenge = challengesData.find(challenge => challenge.id === 2);
      if (challenge) {
        this.currentChallenge = challenge;
        if (challenge.mapAreas && challenge.mapAreas.length > 0) {
          this.options = challenge.mapAreas[0].options || [];
        }
      }
    },
    checkAnswer(option) {
      if (option.isCorrect) {
        this.feedback = 'Correto! O personagem parece desapontado.';
      } else {
        this.feedback = 'Incorreto. Tente novamente.';
      }
    }
  }
};
</script>

<style scoped>
@import '/public/assets/css/emotional.css';
</style>
