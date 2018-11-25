<template>
  <div class="inicio">
    <img alt="The Startup Fest Logo" src="../assets/logo.svg">
    <h3>
      As principais StartUps de São Carlos e região
      <br/>estão na <b>The Startup Fest - 1ª Edição</b>
    </h3>
    <h4>
      <div id="stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
      Avalie e escolha suas favoritas!
    </h4>
    <br/>
    <router-link to="/startups" id="start">Continuar ⯈</router-link>
  </div>
</template>

<style scoped lang="scss">
  .inicio {
    cursor: default;
  }
  #start {
    background: linear-gradient(40deg, transparent 18%, #fff5 46%, #fff5 54%, transparent 82%) no-repeat #781AD1;
    background-position-x: -140px;
    padding: 6px 10px;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    font-size: 24px;
    text-decoration: none;
    transition: background-position-x 1s;
    &:hover {
      background-position-x: 140px;
    }
  }
  #stars>span {
    font-size: 30px;
    color: #bbb;
    animation: starglow 0.6s linear forwards;
    &:nth-child(1) { animation-delay: 1.2s; }
    &:nth-child(2) { animation-delay: 1.7s; }
    &:nth-child(3) { animation-delay: 2.2s; }
    &:nth-child(4) { animation-delay: 2.7s; }
    &:nth-child(5) { animation-delay: 3.2s; }
  }
  @keyframes starglow {
    from { color: #bbb; }
    to { color: #f0e10c; }
  }
</style>

