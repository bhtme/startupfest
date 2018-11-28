<template>
  <ApolloQuery
    :query="require('../graphql/GetAllStartups.gql')"
    :variables="{ }"
  >
    <template slot-scope="{ result: { loading, error, data } }">
      <!-- Loading startups -->
      <div v-if="loading" class="loading apollo">
        <Indicator :type="'loading'" :message="'Carregando Startups'"></Indicator>
      </div>
      <!-- Error -->
      <div v-else-if="error" class="error apollo">
        <Indicator :type="'error'" :message="'Não foi possível carregar startups'"></Indicator>
      </div>
      <!-- Startups loaded -->
      <div v-else-if="data" id="startups-grid">
        <div v-for="(startup, index) in data.allStartups" :key="`${index}`">
          <div class="img">
            <img v-bind:src="startup.imageUrl" v-bind:alt="startup.name"/>
          </div>
          <span class="name">{{startup.name}}</span>
          <span class="segment">{{startup.Segment.name}}</span>
          <span class="score">
            <StaticScore :score="[4, 3, 3, 5]" :title="'Avaliação Média'"></StaticScore>
          </span>
          <div class="more">
            <span class="description">{{startup.description}}</span>
            <span class="annualReceipt">{{startup.annualReceipt}}</span>
            <span class="teamCount">{{startup.teamCount}}</span>
          </div>
        </div>
      </div>
      <!-- No results -->
      <div v-else class="no-result apollo">
        <Indicator :type="'empty'" :message="'Nenhuma startup carregada'"></Indicator>
      </div>
    </template>
  </ApolloQuery>
</template>

<script>
import Indicator from './Indicator.vue';
import StaticScore from './StaticScore.vue';

export default {
  name: 'StartupsGrid',
  props: {
  },
  components: {
    Indicator,
    StaticScore,
  },
};
</script>

<style scoped lang="scss">
#startups-grid {
  display: grid;
  justify-content: center;
  grid-gap: 20px 20px;
  grid-template-columns: repeat(auto-fit, 290px);
  padding: 0 10px;
  &>div {
    border: 1px outset #666;
    padding: 6px;
    background: linear-gradient(60deg, transparent 18%, #fff4 46%, #fff4 54%, transparent 82%)
                no-repeat, linear-gradient(180deg, $theme-color 32px, #fff 32px);
    background-position-x: -290px;
    box-shadow: #2226 2px 3px 3px;
    transition: background-position-x 1s;
    cursor: pointer;
    display: grid;
    grid-gap: 4px 10px;
    grid-template: "img name"
                   "img segment"
                   "img score"
                   "more more"
                   auto / 120px auto;
    .img {
      grid-area: img;
      border: 1px solid #555;
      border-radius: 3px;
      width: 120px;
      height: 120px;
      box-sizing: border-box;
      background: #fff;
      position: relative;
      img {
        max-width: calc(100% - 4px);
        max-height: calc(100% - 4px);
        position: absolute;
        margin: auto;
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
      }
    }
    .name {
      grid-area: name;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      text-shadow: #313131aa 1px 1px 1px;
    }
    .segment {
      grid-area: segment;
      margin-top: 2px;
    }
    .score {
      grid-area: score;
      align-self: end;
      margin-top: 2px;
    }
    .more {
      display: none;
    }
    &:hover {
      background-position-x: 0px;
    }
  }
}
</style>
