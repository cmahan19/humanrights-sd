import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'humanrights-sd',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Recognition of the inherent dignity and of the equal and inalienable rights of all members of the human family is the foundation of freedom, justice and peace in the world.'
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'South Dakota,South Dakota' },
      {
        csp: {
          reportOnly: false, // Change to true if you want to report violations instead of blocking them
          addMeta: true, // Set to true to add meta tag with CSP to the HTML
          policies: {
            'default-src': ["'self'", 'https:', 'data:'], // Allow scripts from 'self', HTTPS URLs, and data URIs
            'script-src': ["'self'", 'unsafe-inline', 'unsafe-eval', 'https://*.youtubeusercontent.com/*'], // Allow scripts from 'self', inline scripts, eval, and YouTube embeds
            'style-src': ["'self'", 'unsafe-inline', 'https:', 'data:'], // Allow styles from 'self', inline styles, HTTPS URLs, and data URIs
            'img-src': ["'self'", 'https:', 'data:'], // Allow images from 'self', HTTPS URLs, and data URIs
            'object-src': ["'none'"], // Disallow `<object>` tags
            'base-uri': ["'self'"] // Allow base URL overrides from 'self'
          }
        }
      }
    ],
    link: [
      { rel: 'icon', href: '/assets/images/sd.png'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
