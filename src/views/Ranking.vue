<template>
  <div class="ranking">
    <span class="RankingTitle">Proposta</span>
    <startups-grid v-if="Startups1.length > 0" :startups="data.Startups1"></startups-grid>
    <indicator v-else type="empty"></indicator>
    <span class="RankingTitle">Apresentação</span>
    <startups-grid v-if="Startups2.length > 0" :startups="data.Startups2"></startups-grid>
    <indicator v-else type="empty"></indicator>
    <span class="RankingTitle">Desenvolvimento</span>
    <startups-grid v-if="Startups3.length > 0" :startups="data.Startups3"></startups-grid>
    <indicator v-else type="empty"></indicator>
  </div>
</template>

<script>
import Indicator from '../components/Indicator.vue';
import StartupsGrid from '../components/StartupsGrid.vue';
import { store } from '../main';

const QUERY_GETSTARTUP = require('../graphql/getStartup.gql');

export default {
  name: 'Favoritos',
  components: {
    Indicator,
    StartupsGrid,
  },
  data() {
    return {
      Scores: store.Scores,
      Startups1: [],
      Startups2: [],
      Startups3: [],
    }
  },
  methods: {
    updateRanking: function() {
      // console.log(store.Startups, this.Scores);
    },
  },
  created() {
    store.db.collection('startupScore').onSnapshot((_) => {
      this.Scores = store.Scores
      this.updateRanking();
    });
    this.updateRanking();
  },
};
</script>

<style scoped lang="scss">
.RankingTitle {
  display: block;
  padding: 4px;
}
</style>