<template>
  <div id="app">
    <Navigation v-if="$route.name !== 'inicio'" v-bind:links="[
  { text: 'Startups', path:'/startups' },
  { text: 'Ranking', path:'/ranking' },
  { text: 'Favoritos', path:'/favoritos' }
]"></Navigation>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'app',
  components: {
    Navigation,
  },
  data() {
    return { transitionName: 'slide-left' };
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate', to, from);
    this.transitionName = to.key < from.key ? 'slide-right' : 'slide-left';
    next();
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
}

.slide-left-enter-active, .slide-right-enter-active,
.slide-left-leave-active, .slide-left-leave-active {
  transition: transform .5s, opacity .5s;
}
.slide-left-enter, .slide-left-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
