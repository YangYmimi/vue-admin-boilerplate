/**
 * Update Vendor Vension. Please Use Git\bin\bash.exe
 */
const CDN_URLS = [
  "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.min.js",
  "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js",
  "https://cdn.jsdelivr.net/npm/vue-router@3.4.9/dist/vue-router.min.js",
  "https://cdn.jsdelivr.net/npm/vuex@3.6.0/dist/vuex.min.js",
  "https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js",
  "https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js",
  "https://cdn.jsdelivr.net/npm/dayjs@1.10.1/dayjs.min.js",
  "https://cdn.jsdelivr.net/npm/numeral@2.0.6/numeral.min.js",
  "https://cdn.jsdelivr.net/npm/element-ui@2.14.1/lib/index.js",
  "https://cdn.jsdelivr.net/npm/echarts@5.0.0/dist/echarts.min.js",
  "https://cdn.jsdelivr.net/npm/element-ui@2.14.1/lib/theme-chalk/index.css",
  "https://cdn.jsdelivr.net/npm/qs@6.9.4/dist/qs.js"
];

console.log("rm -rf public/vendor");

for (const u of CDN_URLS) {
  const f = u
    .replace("@", "_")
    .replace("https://cdn.jsdelivr.net/npm/", "public/vendor/");
  const dir = f.substr(0, f.lastIndexOf("/"));
  console.log(`mkdir -p ${dir}; curl ${u} -o ${f}`);
}
