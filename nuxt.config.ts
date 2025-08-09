// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "nuxt-svgo",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@nuxtjs/stylelint-module",
  ],
  devtools: { enabled: true },
  css: ["~/assets/scss/style.scss"],
  compatibilityDate: "2025-05-15",
  stylelint: {
    lintOnStart: true,
    emitWarning: true,
    emitError: true,
  },

  svgo: {
    autoImportPath: "@/assets/img/icons",
    svgo: false,
    defaultImport: "component",
    componentPrefix: "icon",
  },
});
