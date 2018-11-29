<template>
  <ApolloQuery
    :query="require('../graphql/GetAllStartups.gql')"
    :variables="{ }"
    tag=""
  >
    <template slot-scope="{ result: { error, data }, isLoading }">
      <transition name="fade"  mode="out-in">
        <!-- Startups loaded -->
        <startups-grid v-if="data" :startups="data.allStartups"></startups-grid>
        <!-- Loading startups -->
        <Indicator v-else-if="isLoading" type="loading">Carregando Startups :)</Indicator>
        <!-- Error -->
        <Indicator v-else-if="error" type="error">Não foi possível carregar Startups :(</Indicator>
        <!-- No results -->
        <Indicator v-else type="empty">Lista de Startups vazia :(</Indicator>
      </transition>
    </template>
  </ApolloQuery>
</template>

<script>
import Indicator from '../components/Indicator.vue';
import StartupsGrid from '../components/StartupsGrid.vue';

export default {
  name: 'Startups',
  components: {
    Indicator,
    StartupsGrid,
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
