<template>
  <div class="ranking">
    <Indicator type="loading">Carregando Ranking :)</Indicator>
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