<template>
  <div class="favoritos">
    <Indicator v-if="Favorites.length == 0" type="empty">
      Lista de Favoritos vazia :(
      <br/><br/>
      <router-link :to="{name: 'startups'}">◀ Encontre as startups</router-link>
    </Indicator>
    <StartupsGrid v-else :startups="Favorites"></StartupsGrid>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Indicator from '../components/Indicator.vue';
import StartupsGrid from '../components/StartupsGrid.vue';

export default {
  name: 'Favoritos',
  components: {
    Indicator,
    StartupsGrid,
  },
  computed: mapGetters({
    Favorites: 'getFavs',
  }),
};
</script>
