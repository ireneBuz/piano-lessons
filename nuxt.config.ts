// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/fonts.css'
  ],
  modules: ["@nuxt/image"],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      "meta": [

        {
          "id": "theme-color-meta",
          "name": "theme-color",
          "content": "#000000"
        },
        {
          "name": "robots",
          "content": "index, follow"
        },
        {
          "name": "description",
          "content": "Clases de música en Madrid. Teoría musical y clases de piano, presenciales y online. ¡Aprende música con nosotros!. Escuela Irene Buceta"
        },
        {
          "name": "keywords",
          "content": "clases de música, teoría musical, piano, Madrid, presenciales, online, Irene Buceta,"
        }
      ],
      "link": [
        {
          "rel": "canonical",
          "href": "https://pianolessonsmadrid.com/"
        }
      ],
      "style": [],
      "script": [{ src: 'https://code.iconify.design/1/1.0.4/iconify.min.js', defer: true },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-XRT72ZGBB4');
        `,
        type: 'text/javascript',
        defer: true
      },
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-XRT72ZGBB4', async: true }],
      "noscript": [],
      "title": "Music lessons - Irene Buceta",
      htmlAttrs: {
        lang: 'en'
      },
    }
  },

})