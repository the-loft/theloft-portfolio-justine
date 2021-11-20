/**************************************************************************
 * IMPORTS
 **************************************************************************/

// NPM
import merge from 'lodash/merge'

/**************************************************************************
 * CONFIG > GLOBAL
 **************************************************************************/

let envConf

if (process.env.NODE_ENV === 'production') {
  envConf = require('./production').default
} else {
  envConf = require('./development').default
}

export default merge(envConf, {
  app: {
    version: process.env.npm_package_version,
  },

  services: {
    crisp: {
      websiteId: 'c44035f3-b8b0-4819-b151-156946c7e8d6',
    },
  },
})
