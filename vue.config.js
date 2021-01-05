module.exports = {
  lintOnSave: true,
  publicPath: "/", // CDN 可以在这边配置
  outputDir: "dist",
  assetsDir: "static", // 静态资源文件。assets 文件夹下的内容会打包到这个文件夹下。
  productionSourceMap: true,

  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      // 引入的 cdn 配置
      cdn: {
        css: ["/vendor/element-ui_2.14.1/lib/theme-chalk/index.css"],
        js: [
          `/vendor/vue_2.6.12/dist/vue.${process.env.NODE_ENV === "production" ? "min." : ""}js`,
          "/vendor/vue-router_3.4.9/dist/vue-router.min.js",
          "/vendor/vuex_3.6.0/dist/vuex.min.js",
          "/vendor/axios_0.19.2/dist/axios.min.js",
          "/vendor/element-ui_2.14.1/lib/index.js",
          "/vendor/echarts_5.0.0/dist/echarts.min.js",
          "/vendor/numeral_2.0.6/numeral.min.js",
          "/vendor/lodash_4.17.20/lodash.min.js",
          "/vendor/dayjs_1.10.1/dayjs.min.js",
          "/vendor/qs_6.9.4/dist/qs.js"
        ]
      }
    }
  },

  configureWebpack: {
    output: {
      filename: "[name].[hash].bundle.js"
    },

    // 配置CDN路径, 按照依赖库原始的目录结构引入，请勿忘记在 index.html 文件内引入对应的 CDN 路径
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex ",
      "element-ui": "ELEMENT",
      axios: "axios",
      _: "lodash",
      dayjs: "dayjs",
      numeral: "numeral",
      echarts: "echarts",
      qs: "Qs"
    }
  }
}
