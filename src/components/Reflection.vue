<template>
    <div class="reflection-challenge">
      <div class="reflection-input">
        <textarea v-model="userReflection" placeholder="Escreva sua história ou reflexão aqui..."></textarea>
      </div>
      <button @click="submitReflection">Enviar Reflexão</button>
      <ButtonNextChapter :currentChapterId="4" v-if="feedback !== ''" />
      <p v-if="feedback">{{ feedback }}</p>
    </div>
  </template>
  
  <script>
  import challengesData from '@/data/challenges.json';
  import ButtonNextChapter from '@/components/ButtonNextChapter.vue';
  
  export default {
    name: 'ReflectionChallenge',
    components: {
      ButtonNextChapter
    },
    data() {
      return {
        currentChallenge: {},
        userReflection: '',
        feedback: ''
      };
    },
    created() {
      this.loadChallenge();
    },
    methods: {
      loadChallenge() {
        this.currentChallenge = challengesData.find(challenge => challenge.id === 4) || {};
      },
      submitReflection() {
        if (this.userReflection.trim() !== '') {
          this.feedback = 'Obrigado por compartilhar sua reflexão!';
        } else {
          this.feedback = 'Por favor, escreva algo antes de enviar.';
        }
      }
    }
  };
  </script>
  
  <style>
  @import '/public/assets/css/reflection.css';
  </style>
  