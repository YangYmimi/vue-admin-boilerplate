module.exports = {
  lintOnSave: true,
  publicPath: "/", // CDN 可以在这边配置
  outputDir: "dist",
  assetsDir: "static", // 静态资源文件。assets 文件夹下的内容会打包到这个文件夹下。
  productionSourceMap: true,
  configureWebpack: {
    output: {
      filename: "[name].[hash].bundle.js"
    },

    // 配置CDN路径, 按照依赖库原始的目录结构引入，请勿忘记在 index.html 文件内引入对应的 CDN 路径
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex ",
      // 'vue-i18n': 'VueI18n',
      "element-ui": "ELEMENT",
      // 'element-lang-zhcn': 'ELEMENT.lang.zhCN',
      // 'element-lang-en': 'ELEMENT.lang.en',
      axios: "axios",
      _: "lodash",
      moment: "moment",
      numeral: "numeral",
      echarts: "echarts",
      qs: "Qs"
    }
  }
};
