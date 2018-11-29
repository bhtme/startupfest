<template>
  <ApolloQuery
    :query="require('../graphql/GetStartup.gql')"
    :variables="{ name }"
    tag=""
  >
    <template slot-scope="{ result: { error, data }, isLoading }">
      <transition name="fade"  mode="out-in">
        <!-- Startup loaded -->
        <div v-if="data" id="startup" key="startup">
            <div class="img">
              <img v-bind:src="data.allStartups.imageUrl" v-bind:alt="data.allStartups.name"/>
            </div>
            <span class="name">{{data.allStartups.name}}</span>
            <span class="segment">{{data.allStartups.Segment.name}}</span>
            <span class="score">
              <StaticScore :score="[4, 3, 3, 5]" :title="'Avaliação: Proposta'"></StaticScore>
            </span>
            <span class="score">
              <StaticScore :score="[4, 3, 3, 5]" :title="'Avaliação: Apresentação'"></StaticScore>
            </span>
            <span class="score">
              <StaticScore :score="[4, 3, 3, 5]" :title="'Avaliação: Desenvolvimento'"></StaticScore>
            </span>
            <span class="description">{{data.allStartups.description}}</span>
            <span class="annualReceipt">{{data.allStartups.annualReceipt}}</span>
            <span class="teamCount">{{data.allStartups.teamCount}}</span>
        </div>
        <!-- Loading startup -->
        <div v-else-if="isLoading" key="loading">
          <Indicator type="loading">Carregando Startup :)</Indicator>
        </div>
        <!-- Error -->
        <div v-else-if="error" key="error">
          <Indicator type="error">Não foi possível carregar a startup :(</Indicator>
        </div>
        <!-- No results -->
        <div v-else key="empty">
          <Indicator type="empty">Startup não encontrada :(</Indicator>
        </div>
      </transition>
    </template>
  </ApolloQuery>
</template>

<script>
import Indicator from '../components/Indicator.vue';
import StaticScore from '../components/StaticScore.vue';

export default {
  name: 'Startup',
  components: {
    Indicator,
    StaticScore,
  },
  props: {
    name: String,
  }
};
</script>