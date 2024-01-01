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
    generate: {
      routes: [
        '/musical-theory-lessons/barcelona',
        '/musical-theory-lessons/madrid',
        '/musical-theory-lessons/valencia',
        '/musical-theory-lessons/sevilla',
        '/musical-theory-lessons/zaragoza',
        '/musical-theory-lessons/malaga',
        '/musical-theory-lessons/murcia',
        '/musical-theory-lessons/palma-de-mallorca',
        '/musical-theory-lessons/las-palmas',
        '/musical-theory-lessons/bilbao',
        '/musical-theory-lessons/cordoba',
        '/musical-theory-lessons/valladolid',
        '/musical-theory-lessons/vigo',
        '/musical-theory-lessons/gijon',
        '/musical-theory-lessons/vitoria-gasteiz',
        '/musical-theory-lessons/granada',
        '/musical-theory-lessons/elche',
        '/musical-theory-lessons/oviedo',
        '/musical-theory-lessons/cartagena',
        '/musical-theory-lessons/santander',
        '/musical-theory-lessons/tarragona',
        '/musical-theory-lessons/jerez-de-la-frontera',
        '/musical-theory-lessons/sabadell',
        '/musical-theory-lessons/mostoles',
        '/musical-theory-lessons/almeria',
        '/musical-theory-lessons/terrassa',
        '/musical-theory-lessons/leganes',
        '/musical-theory-lessons/castellon',
        '/musical-theory-lessons/burgos',
        '/musical-theory-lessons/albacete',
        '/musical-theory-lessons/getafe',
        '/musical-theory-lessons/alcorcon',
        '/musical-theory-lessons/san-sebastian',
        '/musical-theory-lessons/logrono',
        '/musical-theory-lessons/badajoz',
        '/musical-theory-lessons/salamanca',
        '/musical-theory-lessons/huelva',
        '/musical-theory-lessons/lerida',
        '/musical-theory-lessons/marbella',
        '/musical-theory-lessons/leon',
        '/musical-theory-lessons/cadiz',
        '/musical-theory-lessons/tarrasa',
        '/musical-theory-lessons/santa-cruz-de-tenerife',
        '/musical-theory-lessons/jaen',
        '/musical-theory-lessons/algeciras',
        '/musical-theory-lessons/orense',
        '/musical-theory-lessons/reus',
        '/musical-theory-lessons/telde',
        '/musical-theory-lessons/barakaldo',
        '/musical-theory-lessons/lugo',
        '/musical-theory-lessons/gerona',
        '/musical-theory-lessons/santiago-de-compostela',
        '/musical-theory-lessons/caceres',
        '/musical-theory-lessons/lorca',
        '/musical-theory-lessons/coslada',
        '/musical-theory-lessons/talavera-de-la-reina',
        '/musical-theory-lessons/ibiza',
        '/musical-theory-lessons/menorca',
        '/musical-theory-lessons/alicante',
        '/musical-theory-lessons/avila',
        '/musical-theory-lessons/ciudad-real',
        '/musical-theory-lessons/cuenca',
        '/musical-theory-lessons/girona',
        '/musical-theory-lessons/guadalajara',
        '/musical-theory-lessons/huesca',
        '/musical-theory-lessons/pamplona',
        '/musical-theory-lessons/ourense',
        '/musical-theory-lessons/palencia',
        '/musical-theory-lessons/pontevedra',
        '/musical-theory-lessons/segovia',
        '/musical-theory-lessons/soria',
        '/musical-theory-lessons/teruel',
        '/musical-theory-lessons/toledo',
        '/musical-theory-lessons/zamora',
        '/piano-lessons/zamora',
        '/piano-lessons/toledo',
        '/piano-lessons/teruel',
        '/piano-lessons/soria',
        '/piano-lessons/segovia',
        '/piano-lessons/pontevedra',
        '/piano-lessons/palencia',
        '/piano-lessons/ourense',
        '/piano-lessons/pamplona',
        '/piano-lessons/huesca',
        '/piano-lessons/guadalajara',
        '/piano-lessons/girona',
        '/piano-lessons/ciudad-real',
        '/piano-lessons/cuenca',
        '/piano-lessons/avila',
        '/piano-lessons/alicante',
        '/piano-lessons/barcelona',
        '/piano-lessons/madrid',
        '/piano-lessons/valencia',
        '/piano-lessons/sevilla',
        '/piano-lessons/zaragoza',
        '/piano-lessons/malaga',
        '/piano-lessons/murcia',
        '/piano-lessons/las-palmas',
        '/piano-lessons/palma-de-mallorca',
        '/piano-lessons/bilbao',
        '/piano-lessons/cordoba',
        '/piano-lessons/valladolid',
        '/piano-lessons/vigo',
        '/piano-lessons/gijon',
        '/piano-lessons/vitoria-gasteiz',
        '/piano-lessons/granada',
        '/piano-lessons/elche',
        '/piano-lessons/oviedo',
        '/piano-lessons/cartagena',
        '/piano-lessons/santander',
        '/piano-lessons/tarragona',
        '/piano-lessons/jerez-de-la-frontera',
        '/piano-lessons/sabadell',
        '/piano-lessons/mostoles',
        '/piano-lessons/almeria',
        '/piano-lessons/terrassa',
        '/piano-lessons/leganes',
        '/piano-lessons/castellon-de-la-plana',
        '/piano-lessons/burgos',
        '/piano-lessons/albacete',
        '/piano-lessons/getafe',
        '/piano-lessons/alcorcon',
        '/piano-lessons/san-sebastian',
        '/piano-lessons/logrono',
        '/piano-lessons/badajoz',
        '/piano-lessons/salamanca',
        '/piano-lessons/huelva',
        '/piano-lessons/lerida',
        '/piano-lessons/marbella',
        '/piano-lessons/leon',
        '/piano-lessons/cadiz',
        '/piano-lessons/tarrasa',
        '/piano-lessons/santa-cruz-de-tenerife',
        '/piano-lessons/jaen',
        '/piano-lessons/algeciras',
        '/piano-lessons/ourense',
        '/piano-lessons/reus',
        '/piano-lessons/telde',
        '/piano-lessons/barakaldo',
        '/piano-lessons/lugo',
        '/piano-lessons/gerona',
        '/piano-lessons/santiago-de-compostela',
        '/piano-lessons/caceres',
        '/piano-lessons/lorca',
        '/piano-lessons/coslada',
        '/piano-lessons/talavera-de-la-reina',
        '/piano-lessons/ibiza',
        '/piano-lessons/menorca'
      ]
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