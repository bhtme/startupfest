<template>
  <ApolloQuery :query="require('../graphql/getStartups.gql')" tag="">
    <template slot-scope="{ result: { error, data } }">
      <transition name="fade"  mode="out-in">
        <!-- Startups loaded -->
        <startups-grid v-if="data && data.Startups.length > 0"
          :startups="data.Startups" :Scores="Scores">
        </startups-grid>
        <!-- Error -->
        <Indicator v-else-if="error" type="error">Não foi possível carregar Startups :(</Indicator>
        <!-- Loading startups -->
        <Indicator v-else type="loading">Carregando Startups :)</Indicator>
      </transition>
    </template>
  </ApolloQuery>
</template>

<script>
import Indicator from '../components/Indicator.vue';
import StartupsGrid from '../components/StartupsGrid.vue';
import { store } from '../main';

export default {
  name: 'Startups',
  components: {
    Indicator,
    StartupsGrid,
  },
  data() {
    return {
      Scores: store.Scores,
      docId: null,
    };
  },
  created() {
    store.db.collection('startupScore').onSnapshot((_) => { this.Scores = store.Scores; });
  },
};
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
