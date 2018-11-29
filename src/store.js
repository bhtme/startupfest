import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    loadingStartups: false,
    startups: [],
    loadingScores: false,
    scores: [],
    favs: [],
  },
  getters: {
    getFavs: state => state.startups.filter(startup => state.favs.indexOf(startup.name) !== -1),
  },
  mutations: {
    UPDATE_STARTUPS(state, startups) {
      state.startups = startups;
    },
  },
  actions: {
    updateStartups(context, startups) {
      context.commit('UPDATE_STARTUPS', startups);
    },
  },
});
