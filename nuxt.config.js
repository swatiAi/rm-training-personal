export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      Manrope: [200, 300, 400, 500, 600, 700, 800],
    },
    display: 'swap',
    preconnect: true,
    inject: true,
    // download: true,
  },
})
