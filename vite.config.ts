import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueDevTools from 'vite-plugin-vue-devtools';
import UnoCSS from 'unocss/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { resolve } from 'path';

const pathResolve = (dir: string) => {
  return resolve(process.cwd(), '.', dir);
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '');
  let config = {};
  console.log(command);
  if (command === 'serve') {
    config = {
      server: {
        host: '0.0.0.0',
        port: 8080,
        open: true,
        proxy: {},
      },
    };
  } else {
    // command === 'build'
    config = {
      build: {
        rollupOptions: {
          output: {
            chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
            entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
            assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
          },
        },
      },
    };
  }
  return {
    ...config,
    plugins: [
      vue(),
      UnoCSS(),
      VueDevTools(),
      visualizer({
        gzipSize: true,
        brotliSize: true,
        emitFile: false,
        open: env.VITE_NODE_ENV === 'development',
      }),
    ],
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
  };
});
