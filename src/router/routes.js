/**
 * Routers : name likes ${module}-${page}
 * 路由命名按照 views 文件夹下 '模块名-页面名' 进行命名
 */

const routes = [
  {
    path: '/',
    name: 'system-login',
    component: () => import('@/views/system/login')
  },
  {
    path: '/system/login',
    name: 'system-login',
    component: () => import('@/views/system/login')
  }
]

export default routes
