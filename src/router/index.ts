//@ts-ignore
import {
  createRouter,
  createWebHashHistory,
  //@ts-ignore
} from 'vue-router'
import { constantRoute } from './routes.ts'

let router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
  //滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
