// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  plugins: ['~/plugins/pinia.js'],
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss'
  ],
  css: ['@/styles/main.scss'],
  ssr: true,
  i18n:{
    locales: [{
      code: 'en',
      language: 'en-US',
      file: 'en.json'
    }, {
      code: 'tc',
      language: 'zh-HK',
      file: 'tc.json'
    }],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en',
    strategy: 'prefix_and_default'
  },
  generate: {
    routes: [
      '/en/',
      '/tc/'
    ],
  },
})