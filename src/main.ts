import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { setupStore } from '@/store';
import { setupRouter } from '@/router';

// #region unocss 调试模式
// import 'uno.css';
// import 'virtual:unocss-devtools';
// #endregion

// #region unocss 非调试模式
import 'virtual:uno.css';
// #endregion

const bootstrap = async () => {
  // 创建应用实例
  const app = createApp(App);
  // 配置存储
  setupStore(app);
  // 配置路由
  setupRouter(app);
  // 路由守卫
  //   setupRouterGuard(router);
  // 注册全局指令

  // 配置全局错误处理

  // 当路由准备好时在执行挂载( https://next.router.vuejs.org/api/#isready)
  //   await router.isReady();
  await app.mount('#app');
};
// 缓存token
// if (!localStorage.getItem('token')) {
//   localStorage.setItem('token', guid());
// }
bootstrap();
