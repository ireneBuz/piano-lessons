// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/fonts.css'
  ],
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
          "content": "Music lessons in Madrid. Music theory and piano lessons, in-person and online. Learn music with us! Irene Buceta School."
        },
        {
          "name": "keywords",
          "content": "Music lessons, music theory, piano, Madrid, in-person, online, Irene Buceta"
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
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-XRT72ZGBB4', defer: true }],
      "noscript": [],
      "title": "Music lessons - Irene Buceta",
      htmlAttrs: {
        lang: 'en'
      },
    }
  },

})