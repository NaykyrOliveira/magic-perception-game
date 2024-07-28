<template>
  <div class="chapter-select">
    <h1>Escolha um Capítulo</h1>
    <ul>
      <li v-for="chapter in chapters" :key="chapter.chapter">
        <router-link :to="'/chapter/' + chapter.chapter">{{ chapter.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import chaptersData from '@/data/chapters.json';

export default {
  name: 'ChapterSelectView',
  data() {
    return {
      chapters: chaptersData
    };
  }
};
</script>

<style>
@import '/public/assets/css/chapter.css';
</style>
