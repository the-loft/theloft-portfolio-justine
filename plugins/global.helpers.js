/**************************************************************************
 * IMPORTS
 **************************************************************************/

// Helpers
import StringHelpers from '@/helpers/string'
import UtilityHelpers from '@/helpers/utility'

/**************************************************************************
 * PLUGINS > HELPERS
 **************************************************************************/

export default (context, inject) => {
  // Initialize helpers
  const helpers = {
    string: StringHelpers,
    utility: UtilityHelpers,
  }

  inject('helpers', helpers)
}
