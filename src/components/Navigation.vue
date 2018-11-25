<template>
  <nav id="nav">
    <router-link v-for="(link, index) in links" :key="`${index}`" :to="`${link.path}`">{{link.text}}</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    links: Array
  }
}
</script>

<style scoped lang="scss">
nav {
  position: fixed;
  top: 0;
  height: 40px;
  line-height: 40px;
  width: 340px;
  left: calc(50% - 170px);
  a {
    font-weight: bold;
    color: #781AD1;
    margin: 0 8px;
    &.router-link-exact-active {
      color: #5bcaa7;
    }
  }
}
</style>