import type { App } from 'vue';

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const routes = [
  { path: '/', component: Home, meta: { loaded: false } },
  { path: '/about', component: About, meta: { loaded: false } },
];

// app router
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}
