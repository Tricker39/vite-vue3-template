import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// #region unocss 调试模式
// import 'uno.css';
// import 'virtual:unocss-devtools';
// #endregion

// #region unocss 非调试模式
import 'virtual:uno.css';
// #endregion

createApp(App).mount('#app');
