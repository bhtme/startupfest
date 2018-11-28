<template>
  <div class="score" :title=title>
    <span :class="[[compScore > 0.5 ? 'filled':''], 'star']">★</span>
    <span :class="[[compScore > 1.5 ? 'filled':''], 'star']">★</span>
    <span :class="[[compScore > 2.5 ? 'filled':''], 'star']">★</span>
    <span :class="[[compScore > 3.5 ? 'filled':''], 'star']">★</span>
    <span :class="[[compScore > 4.5 ? 'filled':''], 'star']">★</span>
    <span class="num">{{compScore}}</span>
  </div>
</template>

<script>
export default {
  name: 'StaticScore',
  props: {
    score: Array,
    title: String,
  },
  computed: {
    compScore() {
      // compScore retorna a média de avaliações arredondada para 1 casa decimal
      return Math.round(this.score.reduce((acc, cur) => acc + cur) / this.score.length * 10) / 10;
    },
  },
};
</script>

<style scoped lang="scss">
  .score {
    border: 1px solid #777;
    border-radius: 4px;
    height: 26px;
    line-height: 26px;
    .star {
      font-size: 25px;
      text-shadow: #31313166 1px 1px;
      color: #ddd;
      &.filled {
        color: #0f0f0f;
      }
    }
    .num {
      display: inline-block;
      font-size: 17px;
      margin-top: 1px;
      margin-left: 7px;
      vertical-align: top;
      color: #0f0f0f;
    }
  }
</style>
