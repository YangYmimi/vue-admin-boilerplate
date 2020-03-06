# Vue Admin Template

一个 Vue 后台管理系统模板，立志做到最佳实践

## Project Structure

```
|-- src
  |-- apis 接口文件
  |-- assets 资源文件, 按照类型不同划分, images、fonts等等
  |-- bus 事件中心
  |-- components 可复用组件, 包括一些mixin, 比如国际化选择组件等
  |-- constants 常量。按照功能不同划分, 如localStorage的所以key, 方便管理
  |-- filters 全局过滤器, 这边定义的都会全局注册到Vue中
  |-- routers 路由
  |-- store 单一状态树, 建议按照模块划分
  |-- styles 全局样式, 包括一些常量, mixin等
  |-- views 视图页面, 按照模块划分
  |-- App.vue
  |-- main.js
  |-- vendor-update.js 更新CDN文件: 通过 `node vendor-update.js | bash`
```

## 注意事项

* 主题定制：将 element 的样式库导入本地

```
// 安装主题生成工具
npm i element-theme -g
// 安装主题
npm i element-theme-chalk -D
// 初始化变量文件
et -i src/styles/element-variables.scss
// 编译主题
et -c src/styles/element-variables.scss -o src/theme
```

* 更新 vendor 下 cdn 的库

系统采用 CDN 方式加载第三方库。`windows 系统` 下执行 `node vendor-update.js | bash` 对 `public/vendor/` 下第三方库进行更新。
