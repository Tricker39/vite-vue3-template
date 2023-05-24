import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { resolve } from 'path';

const pathResolve = (dir: string) => {
  return resolve(process.cwd(), '.', dir);
};

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    open: true,
    proxy: {},
  },
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: [
      // @/xxxx => src/xxxx   需要匹配 ^@/ @开头会与 windicss 与 vue 冲突
      {
        find: /^@\//,
        replacement: pathResolve('src') + '/',
      },
      // #/xxxx => types/xxxx
      {
        find: /^#\//,
        replacement: pathResolve('types') + '/',
      },
    ],
  },
});
