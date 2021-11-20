<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div
    :class="{
      // --> SIZES <--

      'p-2 rounded-6xl sm:p-3': size === 'sm',
      'p-3 rounded-8xl sm:p-5': size === 'base',
    }"
    class="absolute w-full bg-white shadow-lg"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <base-power-head v-if="power" :power="power" />

    <div
      :class="{
        // --> SIZES <--

        'p-4 rounded-5xl': size === 'sm',
        'p-6 rounded-7xl': size === 'base',
      }"
      class="relative w-full h-full overflow-hidden bg-gray-100 border border-gray-200  min-h-xs rounded-3xl"
    >
      <img
        v-if="thumbnail"
        :alt="thumbnail.alt"
        :src="thumbnail.src"
        :class="{
          // --> GENERAL <--

          'h-full': thumbnailLoaded,
          'h-56 sm:h-80 md:h-104': !thumbnailLoaded,
        }"
        class="object-cover object-top w-full"
        loading="lazy"
        @load="onThumbnailLoaded"
      />

      <slot />
    </div>
  </div>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    power: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: 'base',
      validator(x) {
        return ['sm', 'base'].includes(x)
      },
    },
    thumbnail: {
      type: Object,
      default: null,
    },
  },

  data: () => ({
    // --> STATE <--

    thumbnailLoaded: false,
  }),

  methods: {
    // --> EVENT LISTENERS <--

    onMouseEnter(event) {
      this.$emit('mouseenter', event)
    },

    onMouseLeave(event) {
      this.$emit('mouseleave', event)
    },

    onPlay(event) {
      this.$emit('play', event)
    },

    onThumbnailLoaded() {
      this.thumbnailLoaded = true
    },
  },
}
</script>
