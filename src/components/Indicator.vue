<template>
  <div class="indicator">
    <div v-if="type === 'loading'">
      <span>{{message}}</span>
    </div>
    <div v-else-if="type === 'error'">
      <span>{{message}}</span>
    </div>
    <div v-else-if="type === 'empty'">
      <span>{{message}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Indicator',
  props: {
    type: String,
    message: String,
  },
};
</script>

<style scoped lang="scss">
.indicator {
  span {
    color: #000;
  }
}
</style>
