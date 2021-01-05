# Vue Admin Boilerplate

一个 Vue 后台管理系统模板，立志做到最佳实践

## Project Structure

```
|-- public
  |-- vendor 利用 `vendor-update.js` 更新的 cdn 路径
|-- src
  |-- apis 接口文件
  |-- assets 资源文件, 按照类型不同划分, images、fonts等等
  |-- bus 事件中心
  |-- components 可复用组件, 包括一些mixin, 比如国际化选择组件等
  |-- constants 常量。按照功能不同划分, 如localStorage的所以key, 方便管理
  |-- filters 全局过滤器, 这边定义的都会全局注册到Vue中
  |-- router 路由
  |-- store 单一状态树, 建议按照模块划分
  |-- styles 全局样式, 包括一些常量, mixin等
  |-- views 视图页面, 按照模块划分
    |-- route.js 按照模块去配置模块自己的 route，对大型项目的路由配置进行分模块管理
  |-- App.vue
  |-- main.js
  |-- vendor-update.js 更新CDN文件: 通过 `node vendor-update.js | bash`
```

## 注意事项

- 主题定制：将 element 的样式库导入本地

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

- 更新 vendor 下 cdn 的库

系统采用 CDN 方式加载第三方库。`windows 系统` 下执行 `node vendor-update.js | bash` 对 `public/vendor/` 下第三方库进行更新。

- 第三方库

  * axios : API 请求

  * lodash : 函数库，可以辅助数据处理

  * dayjs : 日期格式化

  * numeral : 数字格式化等

  * echarts

  * qs : URL 参数处理

- vs-code 配置

```User
{
  "prettier.endOfLine": "crlf",
  "prettier.printWidth": 120,
  "prettier.semi": false, // 句尾不添加分号
  "prettier.trailingComma": "none", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  "prettier.arrowParens": "avoid", // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  "prettier.bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  "eslint.format.enable": true,
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "vetur.format.defaultFormatter.ts": "prettier-tslint",
  "vetur.format.defaultFormatter.js": "prettier-eslint",
  "vetur.format.defaultFormatter.html": "prettier",
  "autoimport.useSemiColon": false,
  "editor.wordWrapColumn": 120,
  "editor.tabSize": 2,
  "editor.renderWhitespace": "boundary",
  "editor.formatOnPaste": false,
  "editor.formatOnSave": true,
  "editor.autoClosingBrackets": "always",
  "editor.autoClosingQuotes": "always",
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  "[jsonc]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "eslint.run": "onSave",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnType": false,
  "editor.wordWrap": "wordWrapColumn",
  "explorer.confirmDelete": false,
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "explorer.confirmDragAndDrop": false,
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
}
```

```Workspace
{
  "eslint.format.enable": true,
  "eslint.run": "onSave",
  "prettier.semi": false,
  "prettier.trailingComma": "none",
  "prettier.arrowParens": "avoid",
  "prettier.endOfLine": "crlf",
  "editor.tabSize": 2,
  "editor.renderWhitespace": "boundary",
  "editor.wordWrapColumn": 120,
  "editor.wordWrap": "wordWrapColumn",
  "editor.formatOnSave": true
}
```