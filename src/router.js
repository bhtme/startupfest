import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './views/Inicio.vue';
import Startups from './views/Startups.vue';
import Ranking from './views/Ranking.vue';
import Favoritos from './views/Favoritos.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
      meta: { order: 0 },
    },
    {
      path: '/startups',
      name: 'startups',
      component: Startups,
      meta: { order: 1 },
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking,
      meta: { order: 2 },
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: Favoritos,
      meta: { order: 3 },
    },
  ],
});

export default router;
