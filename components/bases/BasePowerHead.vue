<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div
    :style="{ marginTop, width }"
    class="absolute top-0 left-0 transform -translate-x-1/2 left-1/2"
  >
    <component :is="`Power${$helpers.string.capitalize(power)}`" v-if="!animationLoaded" />

    <div
      v-show="animationLoaded"
      :class="{
        // --> MARGINS <--

        '-mt-2': ['explorer', 'king'].includes(power),
        '-mt-0.25': ['file'].includes(power),
      }"
      class="js-power"
    ></div>
  </div>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// NPM
import lottie from 'lottie-web'

// Components
import PowerBook from '@/assets/images/components/bases/BasePowerHead/power-book.svg?inline'
import PowerCap from '@/assets/images/components/bases/BasePowerHead/power-cap.svg?inline'
import PowerExplorer from '@/assets/images/components/bases/BasePowerHead/power-explorer.svg?inline'
import PowerFile from '@/assets/images/components/bases/BasePowerHead/power-file.svg?inline'
import PowerKing from '@/assets/images/components/bases/BasePowerHead/power-king.svg?inline'

export default {
  components: {
    PowerBook,
    PowerCap,
    PowerExplorer,
    PowerFile,
    PowerKing,
  },

  props: {
    power: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    // --> STATE <--

    animationLoaded: false,
  }),

  computed: {
    marginTop() {
      switch (this.power) {
        case 'book':
          return '-39px'

        case 'cap':
          return '-39px'

        case 'explorer':
          return '-38px'

        case 'file':
          return '-48px'

        case 'king':
          return '-60px'

        default:
          return null
      }
    },

    width() {
      switch (this.power) {
        case 'book':
          return '70px'

        case 'cap':
          return '70px'

        case 'explorer':
          return '70px'

        case 'file':
          return '68px'

        case 'king':
          return '60px'

        default:
          return null
      }
    },
  },

  mounted() {
    lottie.loadAnimation({
      container: this.$el.querySelector('.js-power'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: `/animations/components/bases/BasePowerHead/power-${this.power}.json`,
    })

    setTimeout(() => (this.animationLoaded = true), 1 * 1000)
  },
}
</script>
