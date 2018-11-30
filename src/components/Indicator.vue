<template>
  <div class="indicator">
    <div :class="['empty', [type === 'loading' ? 'filling':'']]">
      <div class="img"></div>
      <div class="name"></div>
      <div class="segment"></div>
      <div class="score">★★★★★</div>
    </div>
    <br/>
    <span class="message">
      <slot></slot>
    </span>
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
  overflow-x: hidden;
  .message {
    font-size: 17px;
    color: #000;
    a {
      text-decoration: none;
      background: linear-gradient(40deg, transparent 18%, #fff2 46%, #fff2 54%, transparent 82%)
                  no-repeat, linear-gradient(180deg, transparent, #fff1 50%, transparent 50%),
                  $theme-color;
      background-position-x: -200px;
      padding: 6px 10px;
      line-height: 50px;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      text-decoration: none;
      text-shadow: #313131aa 1px 1px 1px;
      box-shadow: #2226 2px 3px 3px;
      transition: background-position-x 1s;
      &:hover {
        background-position-x: 200px;
      }
    }
  }
  .empty {
    width: 210px;
    margin: auto;
    padding: 6px;
    border: 1px dashed #666;
    background: linear-gradient(180deg, $theme-color 32px, #fff 32px) no-repeat, #fff;
    background-position-y: -34px;
    cursor: default;
    display: grid;
    grid-gap: 2px 6px;
    grid-template: "img name"
                   "img segment"
                   "img score"
                   auto / 100px auto;
    div {
      border: 1px dashed #666;
    }
    .img {
      grid-area: img;
      background: #fff;
      border-radius: 3px;
      width: 100px;
      height: 100px;
      box-sizing: border-box;
    }
    .name {
      grid-area: name;
      height: 22px;
    }
    .segment {
      grid-area: segment;
    }
    .score {
      grid-area: score;
      align-self: end;
      border-radius: 4px;
      height: 24px;
      line-height: 24px;
      font-size: 21px;
      color: #fff;
    }
    &.filling {
      animation: body-filling 6s linear infinite both;
      div {
        animation: parts-filling 6s linear infinite both;
      }
    }
  }
}

@keyframes body-filling {
   0%,   5% { transform: translateX(calc(-50vw - 112px)); }
  15%,  90% { transform: translateX(0vw); }
       100% { transform: translateX(calc(50vw + 112px)); }
   0%,  20% { border-style: dashed; }
  30%, 100% { border-style: solid; }
   0%,  30% { box-shadow: none; }
  50%, 100% { box-shadow: #2226 2px 3px 3px; }
   0%,  50% { background-position-y: -34px; }
  60%, 100% { background-position-y: 0; }
}

@keyframes parts-filling {
   0%,  60% { border-style: dashed; }
  70%, 100% { border-style: solid; }
   0%,  70% { color: #fff; }
  80%, 100% { color: #0f0f0f; }
}
</style>
