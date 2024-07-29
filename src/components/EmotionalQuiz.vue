<template>
  <div class="emotion-quiz">
    <div class="options">
      <button v-for="option in options" :key="option.label" @click="checkAnswer(option)">
        {{ option.label }}
      </button>
    </div>
    <p v-if="feedback">{{ feedback }}</p>
    <button v-if="isChallengeCompleted" @click="goToNextChapter" class="chapter-next">
      Ir para o Próximo Capítulo
    </button>
  </div>
</template>

<script>
import challengesData from '@/data/challenges.json';

export default {
  name: 'EmotionalQuiz',
  props: {
    currentChapterId: {
      type: Number,
      required: true,
      default: 2,
    }
  },
  data() {
    return {
      currentChallenge: {},
      options: [],
      feedback: '',
      isChallengeCompleted: false
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
        this.isChallengeCompleted = true; 
      } else {
        this.feedback = 'Incorreto. Tente novamente.';
      }
    },
    goToNextChapter() {
      const nextChapterId = this.currentChapterId + 1; // 
      this.$router.push({ name: 'ChapterView', params: { chapterId: nextChapterId } });
    }
  },
};
</script>

<style scoped>
@import '/public/assets/css/emotional.css';
</style>
