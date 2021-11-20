/**************************************************************************
 * HELPERS > COMMON
 **************************************************************************/

const helpers = {
  bookDemo() {
    helpers.openLink('https://calendly.com/justine-lecoupanec')
  },

  triggerChatbox(message) {
    if (process.client) {
      $crisp.push(['do', 'chat:open'])

      if (message) {
        $crisp.push(['do', 'message:send', ['text', message]])
      }
    }
  },
}

/**************************************************************************
 * EXPORTS
 ************************************************************************** */

export default Object.freeze(helpers)
