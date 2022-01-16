<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div>
    <tasks-animation-placeholder v-if="!animationLoaded" />

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
import TasksAnimationPlaceholder from '@/assets/images/components/animations/TasksAnimation/TasksAnimationPlaceholder.svg?inline'

export default {
  components: {
    TasksAnimationPlaceholder,
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
      path: '/animations/tasks-animation.json',
    })

    setTimeout(() => {
      this.animationLoaded = true
    }, 1 * 1000)
  },
}
</script>
