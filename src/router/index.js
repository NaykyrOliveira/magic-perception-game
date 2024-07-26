import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import ChapterView from '../views/ChapterView.vue';
import GameIntro from '../components/GameIntro.vue'; 
import ChapterSelectView from '../components/ChapterSelectView.vue';
import ChallengeView from '@/views/ChallengeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: GameIntro 
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/chapter/:chapterId',
    name: 'chapter',
    component: ChapterView
  },
  {
    path: '/chapter-select',
    name: 'chapter-select',
    component: ChapterSelectView
  },
  {
    path: '/challenge/:challengeId', 
    name: 'ChallengeView', 
    component: ChallengeView 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
