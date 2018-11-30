<template>
  <ApolloQuery :query="require('../graphql/getStartup.gql')" :pollInterval=1000
   :variables="{ name: $route.params.startupName }" tag="">
    <template slot-scope="{ result: { error, data } }">
      <transition name="fade"  mode="out-in">
        <!-- Startup loaded -->
        <StartupCard v-if="data && data.Startups.length > 0" :startup="data.Startups[0]">
        </StartupCard>
        <!-- Error -->
        <Indicator v-else-if="error" type="error">Erro ao carregar {{$route.params.startupName}} :(</Indicator>
        <!-- Loading startup -->
        <Indicator v-else type="loading">
          Buscando Startup {{$route.params.startupName}} :)
        </Indicator>
      </transition>
    </template>
  </ApolloQuery>
</template>

<script>
import Indicator from '../components/Indicator.vue';
import StartupCard from '../components/StartupCard.vue';

export default {
  name: 'Startups',
  components: {
    Indicator,
    StartupCard,
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
