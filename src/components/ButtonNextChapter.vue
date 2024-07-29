<template>
  <button @click="goToNextChapter" class="chapter-next">
    Ir para o Próximo Capítulo
  </button>
</template>

<script>
export default {
  name: 'ButtonNextChapter',
  props: {
    currentChapterId: {
      type: Number,
      required: true,
    }
  },
  methods: {
    goToNextChapter() {
      const nextChapterId = this.currentChapterId + 1;
      this.$router.push({ name: 'ChapterView', params: { chapterId: nextChapterId } });
    }
  }
};
</script>

<style>
@import '/public/assets/css/button.css';
</style>
