import { createRouter, createWebHistory } from 'vue-router'
import CounterRef from '../components/counterRef.vue'
import ProfileReactive from '../components/profileReactive.vue'
import ProxyDemo from '../components/proxyDemo.vue'
import DestructureBug from '../components/destructureBug.vue'
import NexttickDemo from '../components/nexttickDemo.vue'
import ShallowRefDemo from '../components/shallowRefDemo.vue'
import UnwrapCaveat from '../components/unwrapCaveat.vue'

const routes = [
  { path: '/', name: 'Counter', component: CounterRef },
  { path: '/counter', name: 'CounterRef', component: CounterRef },
  { path: '/profile', name: 'ProfileReactive', component: ProfileReactive },
  { path: '/proxy', name: 'ProxyDemo', component: ProxyDemo },
  { path: '/destructure', name: 'DestructureBug', component: DestructureBug },
  { path: '/nexttick', name: 'NexttickDemo', component: NexttickDemo },
  { path: '/shallow', name: 'ShallowRefDemo', component: ShallowRefDemo },
  { path: '/unwrap', name: 'UnwrapCaveat', component: UnwrapCaveat }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
