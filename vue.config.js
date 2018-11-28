module.exports = {
  assetsDir: 'assets',
  pwa: {
    name: 'Startup Fest',
    themeColor: '#781AD1',
    msTileColor: '#781AD1',
  },
  baseUrl: undefined,
  outputDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_variables.scss";
        `,
      },
    },
  },
};
