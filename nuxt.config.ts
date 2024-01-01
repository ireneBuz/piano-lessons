// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(() => {
  const isProduction = process.env.NODE_ENV === 'production';

  return {
    devtools: { enabled: !isProduction },
    css: [
      '~/assets/css/main.css',
      '~/assets/css/fonts.css',
      '~/assets/css/blog.css'
    ],
    routeRules: {
      '/musical-theory-lessons': { ssr: false },
      '/piano-lessons': { ssr: false }
    },

    app: {
      pageTransition: { name: 'page', mode: 'out-in' },
      head: {
        meta: [
          {
            id: 'theme-color-meta',
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'description',
            content: 'Piano classes in Madrid. Musical theory and piano lessons, in-person and online. Learn music with us! Irene Buceta School'
          },
          {
            name: 'keywords',
            content: 'music classes, piano lessons, music theory classes, piano classes, music lessons, Madrid, in-person classes, online classes, Irene Buceta'
          }
        ],
        link: [
          {
            rel: 'canonical',
            href: 'https://pianolessonsmadrid.com/'
          }
        ],
        script: [
          { src: 'https://code.iconify.design/1/1.0.4/iconify.min.js', defer: true },
          isProduction && {
            innerHTML: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-XRT72ZGBB4');
            `,
            type: 'text/javascript',
            defer: true
          },
          isProduction && { src: 'https://www.googletagmanager.com/gtag/js?id=G-XRT72ZGBB4', defer: true }
        ].filter(Boolean),
        title: 'Piano lessons - Irene Buceta',
        htmlAttrs: {
          lang: 'en'
        },
      }
    }
  };
});