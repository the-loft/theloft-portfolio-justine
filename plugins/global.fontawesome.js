/**************************************************************************
 * IMPORTS
 **************************************************************************/

// NPM
import Vue from 'vue'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// LIBRARIES
const regular = require('@fortawesome/pro-regular-svg-icons')

/**************************************************************************
 * PLUGINS > FONT AWESOME
 * https://github.com/FortAwesome/vue-fontawesome
 **************************************************************************/

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

library.add(
  // --> REGULAR <--

  regular.faCommentAltSmile
)

Vue.component('FaIcon', FontAwesomeIcon)
