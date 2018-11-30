<template>
  <div class="ranking">
    <div>
      <span class="RankingTitle">Proposta</span>
      <router-link v-if="Startups1.length > 0" v-for="(sup, index) in Startups1"
        :key="`sc1${index}`" :to="{ name: 'startup', params: { startupName: sup[0] } }">
        {{ sup[0] }}
        <StaticScore class="sscore" :score="[sup[1]]"></StaticScore>
      </router-link>
      <indicator v-else type="empty"></indicator>
    </div>
    <div>
      <span class="RankingTitle">Apresentação</span>
      <router-link v-if="Startups2.length > 0" v-for="(sup, index) in Startups2"
        :key="`sc2${index}`" :to="{ name: 'startup', params: { startupName: sup[0] } }">
        {{ sup[0] }}
        <StaticScore class="sscore" :score="[sup[1]]"></StaticScore>
      </router-link>
      <indicator v-else type="empty"></indicator>      
    </div>
    <div>
      <span class="RankingTitle">Desenvolvimento</span>
      <router-link v-if="Startups3.length > 0" v-for="(sup, index) in Startups3"
        :key="`sc3${index}`" :to="{ name: 'startup', params: { startupName: sup[0] } }">
        {{ sup[0] }}
        <StaticScore class="sscore" :score="[sup[1]]"></StaticScore>
      </router-link>
      <indicator v-else type="empty"></indicator>      
    </div>
  </div>
</template>

<script>
import Indicator from '../components/Indicator.vue';
import StaticScore from '../components/StaticScore.vue';
import { store } from '../main';

const QUERY_GETSTARTUP = require('../graphql/getStartup.gql');

export default {
  name: 'Ranking',
  components: {
    Indicator,
    StaticScore,
  },
  data() {
    return {
      Scores: store.Scores,
      Startups1: [],
      Startups2: [],
      Startups3: [],
      allStartupNames: [],
    }
  },
  methods: {
    updateRanking: function() {
      this.Scores.allNames.forEach(name => {
        this.Scores[name].calcScores = [];
        this.Scores[name].calcScores[0] = this.Scores[name][0]/this.Scores[name].nAvals;
        this.Scores[name].calcScores[1] = this.Scores[name][1]/this.Scores[name].nAvals;
        this.Scores[name].calcScores[2] = this.Scores[name][2]/this.Scores[name].nAvals;
      });
      this.Startups1 = sortCalcScores(this.Scores, this.Scores.allNames, 0, 3);
      this.Startups2 = sortCalcScores(this.Scores, this.Scores.allNames, 1, 3);
      this.Startups3 = sortCalcScores(this.Scores, this.Scores.allNames, 2, 3);
    },
  },
  created() {
    store.db.collection('startupScore').onSnapshot(() => {
      this.Scores = store.Scores
      this.updateRanking();
    });
    this.updateRanking();
  },
};

function sortCalcScores(obj, keys, ScoreNum, ScoreQnt) {
  let aux = [];
  keys.forEach(key => {
    aux.push([key, obj[key].calcScores[ScoreNum]]);
  });
  aux.sort((a, b) => (b[1] - a[1]));
  return aux.slice(0, ScoreQnt);
}
</script>

<style scoped lang="scss">
.ranking {
 &>div {
   padding: 10px;
   padding-top: 0px;
   .RankingTitle {
    display: block;
    padding: 4px;
    font-size: 19px;
    font-weight: bold;
  }
  .sscore {
    width: 170px;
    margin: auto;
    margin-bottom: 6px;
  }
  a {
    text-decoration: none;
    color: #0f0f0f;
  }
 }
}
</style>