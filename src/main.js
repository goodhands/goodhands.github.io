// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'prismjs/themes/prism.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import DefaultLayout from '~/layouts/Default.vue'

require('~/stylesheets/index.css');

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Cabin&family=Crimson+Text:wght@700&display=swap'
  })

  head.meta.push({
    name: 'google-site-verification',
    content: 'GHcfxvGLJCSbxU9FcbW0nZ1KVzYIxzHS7OwdVQa71-g'
  })
}
