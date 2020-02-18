
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no' },
      { 'http-equiv': 'X-UA-Compatible', 'content': 'IE-edge' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    title: '春香' || process.env.npm_package_name || '',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['normalize.css', '@/assets/font/iconfont.css', '@/assets/css/main.css', '@/assets/sass/common.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/vue-mavon-editor', ssr: true },
    { src: '@/plugins/element-ui', ssr: true },
    { src: '@/plugins/router.js', ssr: true },
    { src: '@/plugins/filter.js', ssr: true },
    { src: '@/plugins/localStorage.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/axios'],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'http://localhost:9000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api'
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: [
        ["component", {"libraryName": "element-ui", "styleLibraryName": "theme-chalk"}]
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
