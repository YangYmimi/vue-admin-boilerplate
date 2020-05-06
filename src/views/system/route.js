/**
 * 导出 system 模块路由
 */
export default [
  {
    path: "/",
    name: "SYSTEM-LOGIN-INDEX",
    component: () => import("./login/index"),
  },
];
