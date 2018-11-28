import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './views/Inicio.vue';
import Startups from './views/Startups.vue';
import Ranking from './views/Ranking.vue';
import Favoritos from './views/Favoritos.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
    },
    {
      path: '/startups',
      name: 'startups',
      component: Startups,
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking,
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: Favoritos,
    },
  ],
});
