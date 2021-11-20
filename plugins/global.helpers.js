/**************************************************************************
 * IMPORTS
 **************************************************************************/

// Helpers
import CommonHelpers from '@/helpers/common'
import StringHelpers from '@/helpers/string'
import UtilityHelpers from '@/helpers/utility'

/**************************************************************************
 * PLUGINS > HELPERS
 **************************************************************************/

export default (context, inject) => {
  // Initialize helpers
  const helpers = {
    common: CommonHelpers,
    string: StringHelpers,
    utility: UtilityHelpers,
  }

  inject('helpers', helpers)
}
