// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // nitro: {
  //   compressPublicAssets: {
  //     gzip: true,
  //     brotli: true,
  //   },
  //   storage: {
  //     test_cache: {
  //       driver: 'fs',
  //       base: './.nuxt/cache',
  //     },
  //   },
  // },

  // routeRules: {
  //   '/**': {
  //     swr: 60 * 60 * 24,
  //     cache: {
  //       name: 'test_cache',
  //       base: 'test_cache',
  //       group: 'test',
  //     },
  //   },
  // },

  devtools: { enabled: true },
});
