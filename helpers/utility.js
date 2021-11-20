/**************************************************************************
 * HELPERS > UTILITY
 **************************************************************************/

const helpers = {
  addScriptTag(attributes) {
    const script = document.createElement('script')

    script.setAttribute('type', 'text/javascript')

    for (const attributeKey in attributes) {
      script.setAttribute(attributeKey, attributes[attributeKey])
    }

    document.head.appendChild(script)
  },

  wait(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
  },
}

/**************************************************************************
 * EXPORTS
 ************************************************************************** */

export default Object.freeze(helpers)
