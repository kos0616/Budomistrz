import { defineNuxtConfig } from 'nuxt/config';
import pkg from './package.json';

const date = new Date().toLocaleTimeString();

// const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const BASE_URL = isProduction ? '/Budomistrz/' : '/';
const BRAND_NAME = 'Budomistrz';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  runtimeConfig: {
    public: {
      clientVersion: pkg.version,
      BASE_URL,
      BRAND_NAME
    }
  },
  nitro: {
    preset: 'github-pages'
    // output: {
    //   publicDir: path.join(__dirname, 'docs')
    // }
  },
  css: ['@/assets/css/tailwind.scss'],
  modules: [
    '@nuxtjs/tailwindcss',
    // '@vite-pwa/nuxt',
    '@pinia/nuxt',
    'nuxt-jsonld'
  ],
  devtools: { enabled: true },
  // pwa: {
  //   manifest: false
  // },`
  plugins: [
    { src: '~/plugins/vue-swiper', ssr: false },
    { src: '~/plugins/skeleton', ssr: false }
  ],
  app: {
    baseURL: BASE_URL,
    // buildAssetsDir: 'assets', // 這邊會影響到預設的 assets資料夾
    head: {
      htmlAttrs: {
        lang: 'en',
        'data-version': pkg.version,
        'data-time': date
      },
      title: 'Budomistrz',
      meta: [
        { name: 'description', content: 'Budomistrz a starter sample' },
        { name: 'author', content: 'kos0616' },
        { name: 'copyright', content: 'Budomistrz' },
        { name: 'og:title', content: 'Budomistrz' },
        {
          name: 'og:description',
          content: 'Eco-Friendly Design, Sustainable Construction, Making Dreams Come True'
        },
        /** 待測試 社群分享的連結如果是FB會怎樣 */
        { name: 'og:url', content: '' },
        { name: 'og:image', content: BASE_URL + 'favicon.svg' },
        // windows home screen app top bar color
        { name: 'msapplication-TileColor', content: '#27272a' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#F4F4F5' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#27272A' }
      ],
      script: [{ src: BASE_URL + 'theme.js' }],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: BASE_URL + 'apple-touch-icon.png' },
        { rel: 'apple-touch-startup-image', href: BASE_URL + 'favicon.svg' },
        { rel: 'icon', href: BASE_URL + 'favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: BASE_URL + 'favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: BASE_URL + 'favicon-16x16.png' },
        // mac OS safari tab icon color
        { rel: 'mask-icon', href: BASE_URL + 'safari-pinned-tab.svg', color: '#795548' },
        { rel: 'manifest', href: BASE_URL + 'manifest.webmanifest' }
      ]
    }
  }
  // 目前移除也沒出現問題的項目，若 tailwindcss 有問題再補回
  // postcss: {
  //   plugins: {
  //     'postcss-import': {},
  //     'tailwindcss/nesting': {},
  //     tailwindcss: {},
  //     autoprefixer: {}
  //   }
  // },
});

// app: {
//   head: {
//     meta: [
//       // <meta name="viewport" content="width=device-width, initial-scale=1">
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' }
//     ],
//     script: [
//       // <script src="https://myawesome-lib.js"></script>
//       { src: 'https://awesome-lib.js' }
//     ],
//     link: [
//       // <link rel="stylesheet" href="https://myawesome-lib.css">
//       { rel: 'stylesheet', href: 'https://awesome-lib.css' }
//     ],
//     // please note that this is an area that is likely to change
//     style: [
//       // <style type="text/css">:root { color: red }</style>
//       { children: ':root { color: red }', type: 'text/css' }
//     ],
//     noscript: [
//       // <noscript>JavaScript is required</noscript>
//       { children: 'JavaScript is required' }
//     ]
//   }
// }
