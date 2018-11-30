<template>
  <div id="app">
    <transition name="top-slide">
      <Navigation v-if="$route.name !== 'inicio' && scrollY < 30" v-bind:links="[
        { text: 'Startups', name:'startups' },
        { text: 'Ranking', name:'ranking' }
      ]"></Navigation>
    </transition>
    <transition :name="transitionName"  mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

const QUERY_GETALLSTARTUPS = require('./graphql/getAllStartups.gql');
const MUTATION_ADDSTARTUP = require('./graphql/addStartup.gql');

export default {
  name: 'app',
  components: {
    Navigation,
  },
  data() {
    return {
      transitionName: 'slide-left',
      scrollY: 0,
      allStartups: null,
    };
  },
  apollo: {
    allStartups: {
      query: QUERY_GETALLSTARTUPS,
      result({data, loading}) {
        if(!loading) {
          let startups = data.allStartups;
          for(var i = 0, len = startups.length; i < len; i++) {
            let startup = startups[i];
            this.$apollo.mutate({
              mutation: MUTATION_ADDSTARTUP,
              variables: {
                name: startup.name,
                description: startup.description,
                teamCount: startup.teamCount,
                annualReceipt: startup.annualReceipt,
                imageUrl: startup.imageUrl,
                segmentName: startup.Segment.name,
                segmentCode: startup.Segment.code
              }
              })
              .catch((error) => { console.error(error); });
          }
        }
      },
    },
  },
  methods: {
    handleWindowScroll(ev) {
      this.scrollY = ev.pageY;
    },
  },
  created() {
    window.addEventListener('scroll', this.handleWindowScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleWindowScroll);
  },
  watch: {
    $route(to, from) {
      this.transitionName = to.meta.order < from.meta.order ? 'slide-right' : 'slide-left';
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  background: #fff;
}

#app {
  margin-top: 60px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

.top-slide-enter-active, .top-slide-leave-active {
  transition: transform .5s, opacity .5s;
}
.top-slide-enter, .top-slide-leave-to {
  transform: translateY(-60px);
  opacity: 0;
}

.slide-left-enter-active, .slide-right-enter-active,
.slide-left-leave-active, .slide-right-leave-active {
  transition: transform .5s, opacity .5s;
}
.slide-right-enter, .slide-left-leave-to {
  transform: translateX(-50vw);
  opacity: 0;
}
.slide-left-enter, .slide-right-leave-to {
  transform: translateX(50vw);
  opacity: 0;
}
</style>
