<template>
  <div class="startup" key="card">
      <div class="img">
        <img v-bind:src="startup.imageUrl" v-bind:alt="startup.name"/>
      </div>
      <span class="opts">
        <a @click="$router.go(-1)">🡄</a>
      </span>
      <span class="name">{{startup.name}}</span>
      <span class="desc">{{startup.description}}</span>
      <span class="info">
        <a title="Segmento">{{startup.Segment.name}}</a>
        <a title="Equipe">👩‍💻 {{startup.teamCount}}</a>
        <a title="Receita Anual">💰 {{startup.annualReceipt}}</a>
      </span>
      <span class="scoreTitle scoreTitle1">Proposta:</span>
      <StaticScore class="score score1" :score="[Score[0]/Score.nAvals]"></StaticScore>
      <span class="scoreTitle scoreTitle2">Apresentação:</span>
      <StaticScore class="score score2" :score="[Score[1]/Score.nAvals]"></StaticScore>
      <span class="scoreTitle scoreTitle3">Desenvolvimento:</span>
      <StaticScore class="score score3" :score="[Score[2]/Score.nAvals]"></StaticScore>
      <div class="voteInp">
        <select v-if="!avaliado" id="score1" :value="av0">
          <optgroup label="Proposta">
            <option value="1">1 ★</option>
            <option value="2">2 ★★</option>
            <option value="3">3 ★★★</option>
            <option value="4">4 ★★★★</option>
            <option value="5">5 ★★★★★</option>
          </optgroup>
        </select>
        <select v-if="!avaliado" id="score2" :value="av1">
          <optgroup label="Apresentação">
            <option value="1">1 ★</option>
            <option value="2">2 ★★</option>
            <option value="3">3 ★★★</option>
            <option value="4">4 ★★★★</option>
            <option value="5">5 ★★★★★</option>
          </optgroup>
        </select>
        <select v-if="!avaliado" id="score3" :value="av2">
          <optgroup label="Desenvolvimento">
            <option value="1">1 ★</option>
            <option value="2">2 ★★</option>
            <option value="3">3 ★★★</option>
            <option value="4">4 ★★★★</option>
            <option value="5">5 ★★★★★</option>
          </optgroup>
        </select>
        <span v-else-if="erro">Ocorreu um erro :(</span>
        <span v-else>Obrigado por avaliar!</span>
      </div>
      <a v-if="!avaliado" class="goVote" @click="avaliar">Confirmar Avaliação ⯈</a>
  </div>
</template>

<script>
import StaticScore from './StaticScore.vue';
import { store } from '../main';

export default {
  name: 'StartupCard',
  props: {
    startup: Object,
  },
  components: {
    StaticScore,
  },
  data() {
    return {
      Score: store.Scores[this.startup.name],
      av0: 5,
      av1: 5,
      av2: 5,
      avaliado: false,
      erro: false
    }
  },
  created() {
    store.db.collection('startupScore').where('startupName', '==', this.startup.name).onSnapshot(
      (_) => { this.Score = store.Scores[this.startup.name]; }
    );
  },
  methods: {
    avaliar: function() {
      store.db.collection('startupScore').doc(this.Score.docId).update({
        "score.0": this.Score[0] + this.av0, 
        "score.1": this.Score[1] + this.av1, 
        "score.2": this.Score[2] + this.av2,
        "nAvals": this.Score.nAvals + 1,
      }).then(r => {
        this.avaliado = true;
        this.erro = false;
      }).catch(err => {
        this.erro = true;
      });
    },
  },
};
</script>

<style scoped lang="scss">
.startup {
  border: 1px outset #666;
  padding: 6px;
  margin: auto;
  max-width: 350px;
  background: linear-gradient(180deg, $theme-color 40px, #fff 32px);
  background-position-x: -290px;
  text-decoration: none;
  color: #0f0f0f;
  box-shadow: #2226 2px 3px 3px;
  transition: background-position-x 1s;
  cursor: default;
  display: grid;
  grid-gap: 6px 8px;
  grid-template: "opts name"
                 "img info"
                 "img desc"
                 "scoreTitle1 score1"
                 "scoreTitle2 score2"
                 "scoreTitle3 score3"
                 "voteInp voteInp"
                 "voteBt voteBt"
                 auto / 140px auto;
  .img {
    grid-area: img;
    border: 1px solid #555;
    border-radius: 3px;
    width: 140px;
    height: 140px;
    box-sizing: border-box;
    background: #fff;
    position: relative;
    margin: auto;
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
    height: 34px;
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    text-shadow: #313131aa 1px 1px 1px;
  }
  .opts {
    grid-area: opts;
    text-align: left;
    a {
      color: #fff;
      font-size: 28px;
      line-height: 28px;
      padding: 2px 4px;
      text-shadow: #313131aa 1px 1px 1px;
      cursor: pointer;
    }
  }
  .desc {
    grid-area: desc;
    text-align: justify;
    align-self: center;
  }
  .info {
    grid-area: info;
    font-size: 15px;
    font-weight: bold;
    max-height: 30px;
    a {
      display: inline-block;
      padding: 5px;
      line-height: 16px;
      &:first-of-type {
        padding-left: 0;
      }
      &:last-of-type {
        padding-right: 0;
      }
    }
  }
  .score {
    align-self: end;
  }
  .score1 {
    grid-area: score1;
  }
  .score2 {
    grid-area: score2;
  }
  .score3 {
    grid-area: score3;
  }
  .scoreTitle {
    align-self: center;
    text-align: right;
    font-weight: bold;
  }
  .scoreTitle1 {
    grid-area: scoreTitle1;
  }
  .scoreTitle2 {
    grid-area: scoreTitle2;
  }
  .scoreTitle3 {
    grid-area: scoreTitle3;
  }
  .voteInp {
    grid-area: voteInp;
    border-top: 1px dashed #0f0f0f;
    padding-top: 10px;
    select {
      height: 24px;
    }
  }
  .goVote {
    grid-area: voteBt;
    background: linear-gradient(40deg, transparent 18%, #fff2 46%, #fff2 54%, transparent 82%)
                no-repeat, linear-gradient(180deg, transparent, #fff1 50%, transparent 50%),
                $theme-color;
    background-position-x: -200px;
    line-height: 30px;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    text-shadow: #313131aa 1px 1px 1px;
    transition: background-position-x 1s;
    &:hover {
      background-position-x: 200px;
    }
    cursor: pointer;
  }
}
</style>
