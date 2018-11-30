<template>
  <div id="startups-grid" key="grid">
    <router-link v-for="(startup, index) in startups" class="startup"
     :to="{ name: 'startup', params: { startupName: startup.name } }" :key="`${index}`">
      <div class="img">
        <img v-bind:src="startup.imageUrl" v-bind:alt="startup.name"/>
      </div>
      <span class="name">{{startup.name}}</span>
      <span class="segment">{{startup.Segment.name}}</span>
      <span class="score">
        <StaticScore :title="'Avaliação Média'"
        :score="[
        Scores[startup.name][0]/Scores[startup.name].nAvals,
        Scores[startup.name][1]/Scores[startup.name].nAvals,
        Scores[startup.name][2]/Scores[startup.name].nAvals
        ]"></StaticScore>
      </span>
    </router-link>
  </div>
</template>

<script>
import StaticScore from './StaticScore.vue';

export default {
  name: 'StartupsGrid',
  props: {
    startups: Array,
    Scores: Object,
  },
  components: {
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
  .startup {
    border: 1px outset #666;
    padding: 6px;
    background: linear-gradient(60deg, transparent 18%, #fff4 46%, #fff4 54%, transparent 82%)
                no-repeat, linear-gradient(180deg, $theme-color 32px, #fff 32px);
    background-position-x: -290px;
    text-decoration: none;
    color: #0f0f0f;
    box-shadow: #2226 2px 3px 3px;
    transition: background-position-x 1s;
    cursor: pointer;
    display: grid;
    grid-gap: 4px 10px;
    grid-template: "img name"
                   "img segment"
                   "img score"
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
    }
    .score {
      grid-area: score;
      align-self: end;
    }
    &:hover {
      background-position-x: 0px;
    }
  }
}
</style>
