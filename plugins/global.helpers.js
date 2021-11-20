/**************************************************************************
 * IMPORTS
 **************************************************************************/

// Helpers
import UtilityHelpers from '@/helpers/utility'

/**************************************************************************
 * PLUGINS > HELPERS
 **************************************************************************/

export default (context, inject) => {
  // Initialize helpers
  const helpers = {
    utility: UtilityHelpers,
  }

  inject('helpers', helpers)
}
