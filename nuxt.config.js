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

  components: ['~/components/bases', '~/components/sections'],

  target: 'static',

  // --> TAGS & METATAGS <--

  head: {
    title: 'Justine Le Coupanec | Portfolio',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/og-image.jpg',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/og-image.jpg',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // --> MODULES, PLUGINS AND STYLESHEETS <--

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@nuxtjs/svg'],

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    ['@nuxtjs/i18n', { vueI18nLoader: true }],
    [
      'nuxt-mq',
      {
        defaultBreakpoint: 'xl',
        breakpoints: {
          xs: 640,
          sm: 768,
          md: 1024,
          lg: 1280,
          xl: Infinity,
        },
      },
    ],
  ],

  plugins: [
    // --> FOR SERVER AND CLIENT <--

    { src: '@/plugins/global.fontawesome' },
    { src: '@/plugins/global.helpers' },
    { src: '@/plugins/global.mixin' },

    // --> FOR CLIENT ONLY <--

    { src: '@/plugins/client.crisp', mode: 'client' },
  ],

  styleResources: {
    scss: [
      // Site-wide mixins and functions
      '@/assets/stylesheets/tools/mq.scss',
    ],
  },

  // --> MODULES CONFIGURATION <--

  i18n: {
    baseUrl: config.app.url,
    defaultLocale: 'fr',
    langDir: 'locales/',
    lazy: true,
    strategy: 'prefix_except_default',

    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'en',
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
