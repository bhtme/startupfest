<template>
  <div class="startups">
    <Indicator v-if="loadingStartups" type="loading">
      Carregando Startups :)
    </Indicator>
    <Indicator v-else-if="startups.length == 0" type="empty">
      Lista de Startups vazia :(
    </Indicator>
    <StartupsGrid v-else :startups="startups"></StartupsGrid>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Indicator from '../components/Indicator.vue';
import StartupsGrid from '../components/StartupsGrid.vue';

export default {
  name: 'Startups',
  components: {
    Indicator,
    StartupsGrid,
  },
  computed: {
    ...mapState(['loadingStartups', 'startups', 'scores']),
  },
};
</script>
