<template>
  <div class="startups">
    <StartupsGrid></StartupsGrid>
  </div>
</template>

<script>
import StartupsGrid from '../components/StartupsGrid.vue';

export default {
  name: 'Startups',
  components: {
    StartupsGrid,
  },
};
</script>
