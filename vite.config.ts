import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueDevTools from 'vite-plugin-vue-devtools';
import { visualizer } from 'rollup-plugin-visualizer';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import UnoCSS from 'unocss/vite';
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
      AutoImport({
        resolvers: [],
        imports: ['vue', 'vue-router', '@vueuse/core'],
        dts: 'types/auto-import.d.ts',
      }),
      Components({
        // relative paths to the directory to search for components.
        dirs: ['src/components'],
        // valid file extensions for components.
        extensions: ['vue'],
        // search for subdirectories
        deep: true,
        // resolvers for custom components
        resolvers: [
          // ElementPlusResolver({ importStyle: 'sass' }),
          // NaiveUiResolver(),
          // IconsResolver({
          //   prefix: 'icon',
          //   alias: {
          //     'park-fill': 'icon-park-solid',
          //     'park-multi': 'icon-park',
          //     park: 'icon-park-outline',
          //   },
          //   enabledCollections: ['icon-park-solid', 'icon-park-outline', 'icon-park'],
          // }),
          // @ts-ignore icon-park 另一种使用方式
          // (componentName) => {
          //   if (componentName.startsWith('Icon')) {
          //     return {
          //       name: componentName.slice(4),
          //       from: '@icon-park/vue-next',
          //     };
          //   }
          // },
        ],
        // generate `components.d.ts` global declarations,
        // also accepts a path for custom filename
        dts: 'types/components.d.ts',
        // Allow subdirectories as namespace prefix for components.
        directoryAsNamespace: true,
        // Subdirectory paths for ignoring namespace prefixes
        // works when `directoryAsNamespace: true`
        globalNamespaces: [],
        // auto import for directives
        // default: `true` for Vue 3, `false` for Vue 2
        // Babel is needed to do the transformation for Vue 2, it's disabled by default for performance concerns.
        // To install Babel, run: `npm install -D @babel/parser @babel/traverse`
        directives: true,
        // filters for transforming targets
        include: [/\.vue$/, /\.vue\?vue/],
        exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
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
