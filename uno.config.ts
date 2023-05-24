import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      prefix: 'uno-',
    }),
    presetIcons({
      // 图标路径：https://icones.js.org/
      prefix: '',
      collections: {
        'icon-park-outline': () => import('@iconify-json/icon-park-outline').then(i => i.default as any),
        'icon-park-solid': () => import('@iconify-json/icon-park-solid').then(i => i.default as any),
        'icon-park-twotone': () => import('@iconify-json/icon-park-twotone').then(i => i.default as any),
      },
    }),
  ],
});
