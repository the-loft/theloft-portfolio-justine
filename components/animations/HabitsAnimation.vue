<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div>
    <habits-animation-placeholder v-if="!animationLoaded" />

    <div v-show="animationLoaded" class="js-illustration"></div>
  </div>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// NPM
import lottie from 'lottie-web'

// Components
import HabitsAnimationPlaceholder from '@/assets/images/components/animations/HabitsAnimation/HabitsAnimationPlaceholder.svg?inline'

export default {
  components: {
    HabitsAnimationPlaceholder,
  },

  data: () => ({
    // --> STATE <--

    animationLoaded: false,
  }),

  mounted() {
    lottie.loadAnimation({
      container: this.$el.querySelector('.js-illustration'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/habits-animation.json',
    })

    setTimeout(() => {
      this.animationLoaded = true
    }, 1 * 1000)
  },
}
</script>
