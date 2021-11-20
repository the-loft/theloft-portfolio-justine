/**************************************************************************
 * IMPORTS
 **************************************************************************/

// Config
import config from '@/config'

/**************************************************************************
 * PLUGINS > CRISP
 **************************************************************************/

export default ({ app, store }) => {
  // Add Crisp to the page
  window.$crisp = []
  window.CRISP_WEBSITE_ID = config.services.crisp.websiteId
  ;(function () {
    const d = document
    const s = d.createElement('script')

    s.src = 'https://client.crisp.chat/l.js'
    s.async = 1
    d.querySelectorAll('head')[0].append(s)

    // Disable crisp warnings
    $crisp.push(['safe', true])
  })()
}
