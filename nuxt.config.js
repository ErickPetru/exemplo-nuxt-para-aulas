export default {
  ssr: true,
  target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'author',
        name: 'author',
        content: 'Minha Empresa S.A.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'blog, exemplo, aulas, fatec',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: './plugins/vuexPersistedState.js', mode: 'client' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://google-analytics.nuxtjs.org/
    '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://i18n.nuxtjs.org/
    'nuxt-i18n',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://localhost:8080/',
  },

  // Google Analytics configuration (https://google-analytics.nuxtjs.org/setup)
  googleAnalytics: {
    id: 'UA-XXX-X',
  },

  // i18n configuration (https://i18n.nuxtjs.org/setup)
  i18n: {
    lazy: true,
    langDir: 'lang/',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      cookieKey: 'i18n-locale',
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.js',
      },
      {
        code: 'pt',
        iso: 'pt-BR',
        name: 'Português',
        file: 'pt.js',
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Español',
        file: 'es.js',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      dateTimeFormats: {
        en: {
          short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          },
          long: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'short',
            hour: 'numeric',
            minute: 'numeric',
          },
        },
        pt: {
          short: {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          },
          long: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'short',
            hour: 'numeric',
            minute: 'numeric',
          },
        },
      },
      numberFormats: {
        en: {
          decimal: {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
          },
          currency: {
            style: 'currency',
            currency: 'USD',
          },
        },
        pt: {
          decimal: {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          },
          currency: {
            style: 'currency',
            currency: 'BRL',
            currencyDisplay: 'symbol',
          },
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
