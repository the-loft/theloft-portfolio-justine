<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <p
    :class="{
      // --> GENERAL <--

      'uppercase font-medium': uppercase,

      // --> ALIGNMENTS <--

      'text-center': alignment === 'center',
      'text-left': alignment === 'left',
      'text-right': alignment === 'right',

      // --> COLORS <--

      'text-gray-600': ['2xs'].includes(size),
      'text-gray-700': ['xs', 'sm', 'lg', 'xl'].includes(size),
      'text-gray-800': ['base'].includes(size),

      // --> LINE HEIGHT <--

      'leading-normal': ['2xs', 'xs', 'sm', 'lg', 'xl'].includes(size),
      'leading-relaxed': ['base'].includes(size),

      // --> SIZES <--

      'text-sm': size === '2xs',
      'text-sm sm:text-base': size === 'xs',
      'text-base sm:text-lg': size === 'sm',
      'text-base sm:text-lg md:text-xl': size === 'base',
      'text-lg sm:text-xl lg:text-2xl': size === 'lg',
      'text-lg sm:text-2xl lg:text-3xl': size === 'xl',

      // --> TRACKING <--

      'tracking-tighter': size === '2xs',
    }"
    class="font-normal select-text"
  >
    <slot />
  </p>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    alignment: {
      type: String,
      default: 'left',
      validator(x) {
        return ['center', 'left', 'right'].includes(x)
      },
    },
    size: {
      type: String,
      default: 'base',
      validator(x) {
        return ['2xs', 'xs', 'sm', 'base', 'lg', 'xl'].includes(x)
      },
    },
    uppercase: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
