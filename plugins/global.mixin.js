/**************************************************************************
 * IMPORTS
 **************************************************************************/

// NPM
import Vue from 'vue'

/**************************************************************************
 * GLOBAL MIXIN
 **************************************************************************/

Vue.mixin({
  computed: {
    $locale() {
      return this.$i18n.getLocaleCookie() || this.localeFromStore || 'en'
    },

    $mqXs() {
      return ['xs', 'sm', 'md', 'lg', 'xl'].includes(this.$mq)
    },

    $mqSm() {
      return ['sm', 'md', 'lg', 'xl'].includes(this.$mq)
    },

    $mqMd() {
      return ['md', 'lg', 'xl'].includes(this.$mq)
    },

    $mqLg() {
      return ['lg', 'xl'].includes(this.$mq)
    },

    $mqXl() {
      return ['xl'].includes(this.$mq)
    },
  },
})
