<template>
  <div id="app">
    <Navigation v-if="$route.name !== 'inicio'" v-bind:links="[
  { text: 'Startups', path:'/startups' },
  { text: 'Ranking', path:'/ranking' },
  { text: 'Favoritos', path:'/favoritos' }
]"></Navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'app',
  components: {
    'Navigation': Navigation
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  background: #fff;
}

#app {
  margin-top: 50px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
