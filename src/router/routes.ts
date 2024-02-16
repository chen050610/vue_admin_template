export const constantRoute = [
  {
    path: '/login',
    //@ts-ignore
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      //添加路由源信息
      title: '',
      hidden: true,
      icon: '',
    },
  },
  {
    path: '/',
    //@ts-ignore
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    redirect: '/home',
    meta: {
      //添加路由源信息
      title: '',
      hidden: false,
      icon: '',
    },
    children: [
      {
        path: '/home',
        //@ts-ignore
        component: () => import('@/views/home/index.vue'),
        meta: {
          //添加路由源信息
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/404',
    //@ts-ignore
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      //添加路由源信息
      title: '404',
      hidden: true,
      icon: 'DocumentDelete',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    //@ts-ignore
    name: 'Any',
    meta: {
      //添加路由源信息
      title: '任意路由',
      hidden: true,
      icon: 'DataLine',
    },
  },

  {
    path: '/screen',
    //@ts-ignore
    component: () => import('@/views/screen/index.vue'),
    name: 'screen',
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: 'Platform',
    },
  },
  {
    path: '/acl',
    //@ts-ignore
    component: () => import('@/layout/index.vue'),
    name: 'Acl',
    redirect:'/acl/user',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'Lock',
    },
    children: [
      {
        path: '/acl/user',
        //@ts-ignore
        component: () => import('@/views/acl/user/index.vue'),
        name: 'User',
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'User',
        },
      },
      {
        path: '/acl/role',
        //@ts-ignore
        component: () => import('@/views/acl/role/index.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/acl/permission',
        //@ts-ignore
        component: () => import('@/views/acl/permission/index.vue'),
        name: 'Permission',
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'Monitor',
        },
      },
    ],
  },
  {
    path: '/product',
    //@ts-ignore
    component: () => import('@/layout/index.vue'),
    name: 'Product',
    redirect:'/product/trademark',
    meta: {
      title: '商品管理',
      hidden: false,
      icon: 'Goods',
    },
    children: [
      {
        path: '/product/trademark',
        //@ts-ignore
        component: () => import('@/views/product/trademark/index.vue'),
        name: 'Trademark',
        meta: {
          title: '品牌管理',
          hidden: false,
          icon: 'Connection',
        },
      },
      {
        path: '/product/attr',
        //@ts-ignore
        component: () => import('@/views/product/attr/index.vue'),
        name: 'Attr',
        meta: {
          title: '属性管理',
          hidden: false,
          icon: 'ChromeFilled',
        },
      },
      {
        path: '/product/sku',
        //@ts-ignore
        component: () => import('@/views/product/sku/index.vue'),
        name: 'Sku',
        meta: {
          title: 'sku管理',
          hidden: false,
          icon: 'Orange',
        },
      },
      {
        path: '/product/spu',
        //@ts-ignore
        component: () => import('@/views/product/spu/index.vue'),
        name: 'Spu',
        meta: {
          title: 'Spu管理',
          hidden: false,
          icon: 'Calendar',
        },
      },
    ],
  },
]
