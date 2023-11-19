export default defineNuxtConfig({

  modules: [
    // ...
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  
  i18n:{
    lazy:true,
    langDir:"locales",
    locales: [
      {
        code: 'en',
        file: 'en.json'
      },
      {
        code: 'ar',
        file: 'ar.json'
      },
    ],
    defaultLocale: 'ar',
    strategy: 'no_prefix',
 

  },
  css: ['~/assets/css/main.css',
        '~/node_modules/vue-tel-input/dist/vue-tel-input.css',
        'vue3-easy-data-table/dist/style.css',
        'vue-toast-notification/dist/theme-sugar.css',
        '~/assets/css/fonts.css'
       ],

  ssr:true,
  plugins: [
    { src: '@/plugins/appInit.js', mode: 'client' }
  ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  

    runtimeConfig: {
      public: {
        dev_base: process.env.API_BASE,
        prod_base: process.env.API_BASE_PRODUCTION
      }
    }
  })