<template>
  <div class="favoritos">
    <Indicator type="empty">
      Lista de Favoritos vazia :(
      <br/><br/>
      <router-link :to="{name: 'startups'}">◀ Encontre as startups</router-link>
    </Indicator>
  </div>
</template>

<script>
import Indicator from '../components/Indicator.vue';

export default {
  name: 'Favoritos',
  components: {
    Indicator,
  },
};
</script>