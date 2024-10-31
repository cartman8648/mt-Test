// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,

  modules: [
    "nuxt-security"
  ],

  security: {
    headers: {
      permissionsPolicy: false,
      crossOriginEmbedderPolicy: "require-corp",
      crossOriginOpenerPolicy: 'same-origin',
      crossOriginResourcePolicy: "cross-origin"
    },
    corsHandler: {
      origin: '*'
    }
  },

})
