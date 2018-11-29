<template>
  <nav id="nav">
    <router-link v-for="(link, index) in links" :key="`${index}`" :to="{name: link.name}">
      {{link.text}}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    links: Array, // [{ text: 'Texto do botão', path:'/Caminho da página' }]
  },
};
</script>

<style scoped lang="scss">
nav {
  position: fixed;
  top: 16px;
  left: 0px;
  width: 100%;
  z-index: 2;
  a {
    font-weight: bold;
    text-decoration: none;
    text-shadow: #5f5f5f66 1px 1px 1px;
    color: $theme-color;
    border: solid $theme-color+ee;
    border-width: 2px 0;
    padding: 7px 15px;
    transition: background-color 1s, color 1s;
    background: #fff;
    box-shadow: #2226 2px 3px 3px;
    &.router-link-exact-active {
      background: linear-gradient(180deg, transparent, #fff1 50%, transparent 50%), $theme-color;
      color: #fff;
    }
    &:first-child {
      border-left-width: 2px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &:last-child {
      border-right-width: 2px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
}
</style>
