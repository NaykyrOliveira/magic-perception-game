<template>
  <div v-if="currentChapter" class="chapter-view">
    <div class="chapter_curl"></div>
    <div class="heading">
      <p class="chapter_num">{{ currentChapter.chapter }}</p>
      <p class="chapter_title">{{ currentChapter.title }}</p>
    </div>
    <div class="copy">
      <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
    </div>
    <p class="chapter_num">{{ currentChapter.chapter }}</p>
    <div v-if="currentChapter.clues && currentChapter.clues.length > 0">
      <div v-for="clue in currentChapter.clues" :key="clue.id">
        <p>{{ clue.description }}</p>
      </div>
    </div>
    <audio v-if="currentChapter.audio" controls :src="currentChapter.audio" class="audio"></audio>
    <div v-if="!isIntroduction && currentChapter.challenges && currentChapter.challenges.length > 0" class="challenges-section">
      <h2>Desafios</h2>
      <ul>
        <li v-for="challenge in currentChapter.challenges" :key="challenge.id">
          <router-link :to="'/challenge/' + challenge.id">{{ challenge.title }}</router-link>
        </li>
      </ul>
    </div>
    <button v-if="isIntroduction" @click="goToNextChapter" class="chapter-next">
      Ir para o Próximo Capítulo
    </button>
  </div>
  <p v-else>Nenhum capítulo encontrado.</p>
</template>

<script>
import chaptersData from '@/data/chapters.json';

export default {
  name: 'ChapterView',
  data() {
    return {
      currentChapter: null,
      paragraphs: [],
      isIntroduction: false,
    };
  },
  created() {
    this.loadChapter();
  },
  watch: {
    '$route.params.chapterId': 'loadChapter',
  },
  methods: {
    loadChapter() {
      const chapterId = parseInt(this.$route.params.chapterId, 10);
      this.currentChapter = chaptersData.find(chapter => chapter.chapter === chapterId) || {};
      this.isIntroduction = chapterId === 0; 
      if (this.currentChapter.text) {
        this.paragraphs = this.currentChapter.text.split('. ').map(p => p.trim() + '.');
      }
    },
    goToNextChapter() {
      const nextChapterId = this.currentChapter.chapter + 1;
      this.$router.push(`/chapter/${nextChapterId}`);
    }
  }
};
</script>

<style>
@import '/public/assets/css/chapter.css';
</style>
