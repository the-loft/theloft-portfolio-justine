/**************************************************************************
 * IMPORTS
 **************************************************************************/

// CONFIG
import config from './config'

/**************************************************************************
 * NUXT CONFIGURATION
 * https://nuxtjs.org/guide/configuration/
 **************************************************************************/

export default {
  // --> BUILD CONFIGURATION <--

  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-property-in-object', { loose: true }]],
    },
  },

  components: true,

  target: 'static',

  // --> TAGS & METATAGS <--

  head: {
    title: 'theloft-portfolio-justine',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // --> MODULES, PLUGINS AND STYLESHEETS <--

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/i18n', '@nuxtjs/pwa'],

  plugins: [
    // --> FOR SERVER AND CLIENT <--

    { src: '@/plugins/global.fontawesome' },

    // --> FOR CLIENT ONLY <--
  ],

  css: [],

  // --> MODULES CONFIGURATION <--

  i18n: {
    baseUrl: config.app.url,
    defaultLocale: 'en',
    langDir: 'locales/',
    lazy: true,
    seo: false,
    strategy: 'prefix_except_default',

    detectBrowserLanguage: {
      alwaysRedirect: true,
      fallbackLocale: 'en',
      onlyOnRoot: true,
    },

    locales: [
      { code: 'en', iso: 'en', file: 'en' },
      { code: 'fr', iso: 'fr', file: 'fr' },
    ],

    vueI18n: {
      fallbackLocale: 'en',
      silentTranslationWarn: true,
    },
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  tailwindcss: {
    cssPath: '~/assets/stylesheets/tailwind.scss',
    exposeConfig: true,
    viewer: false,
  },

  telemetry: false,
}
