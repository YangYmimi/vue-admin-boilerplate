module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": 0,
    "no-undef": 0,
    "no-redeclare": 0,
    "prettier/prettier": [
      "error",
      {
        overrides: [
          {
            files: ".prettierrc",
            options: { parser: "json" }
          }
        ]
      }
    ]
  }
}
