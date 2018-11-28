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
    background: linear-gradient(40deg, transparent 18%, #fff2 46%, #fff2 54%, transparent 82%)
                no-repeat, linear-gradient(180deg, transparent, #fff1 50%, transparent 50%),
                $theme-color;
    background-position-x: -150px;
    padding: 6px 10px;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    font-size: 24px;
    text-decoration: none;
    text-shadow: #313131aa 1px 1px 1px;
    box-shadow: #2226 2px 3px 3px;
    transition: background-position-x 1s;
    &:hover {
      background-position-x: 150px;
    }
  }
  #stars>span {
    font-size: 34px;
    color: #bbb;
    text-shadow: #31313166 1px 1px;
    animation: starglow 0.6s linear forwards;
    &:nth-child(1) { animation-delay: 1.2s; }
    &:nth-child(2) { animation-delay: 1.7s; }
    &:nth-child(3) { animation-delay: 2.2s; }
    &:nth-child(4) { animation-delay: 2.7s; }
    &:nth-child(5) { animation-delay: 3.2s; }
  }
  @keyframes starglow {
    from { color: #bbb; }
    to { color: #0f0f0f; }
  }
</style>
