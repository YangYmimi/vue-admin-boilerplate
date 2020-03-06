/**
 * Update Vendor Vension. Please Use Git\bin\bash.exe
 */
const CDN_URLS = [
  'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
  'https://cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
  'https://cdn.jsdelivr.net/npm/vuex@3.1.2/dist/vuex.min.js',
  // 'https://cdn.jsdelivr.net/npm/vue-i18n@8.15.3/dist/vue-i18n.common.min.js',
  'https://cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js',
  'https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js',
  'https://cdn.jsdelivr.net/npm/moment@2.24.0/moment.min.js',
  'https://cdn.jsdelivr.net/npm/numeral@2.0.6/numeral.min.js',
  'https://cdn.jsdelivr.net/npm/element-ui@2.13.0/lib/index.js',
  // 'https://cdn.jsdelivr.net/npm/element-ui@2.13.0/lib/locale/lang/zh-CN.js',
  // 'https://cdn.jsdelivr.net/npm/element-ui@2.13.0/lib/locale/lang/en.js',
  'https://cdn.jsdelivr.net/npm/echarts@4.6.0/dist/echarts.min.js',
  'https://cdn.jsdelivr.net/npm/element-ui@2.13.0/lib/theme-chalk/index.css',
  'https://cdn.jsdelivr.net/npm/qs@6.9.1/dist/qs.js'
]

console.log('rm -rf public/vendor')

for (const u of CDN_URLS) {
  const f = u.replace('@', '_').replace('https://cdn.jsdelivr.net/npm/', 'public/vendor/')
  const dir = f.substr(0, f.lastIndexOf('/'))
  console.log(`mkdir -p ${dir}; curl ${u} -o ${f}`)
}
