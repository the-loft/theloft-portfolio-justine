<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div class="select-text">
    <component
      :is="tag"
      :class="{
        // --> COLORS <--

        'text-gray-900': color === 'gray',
        'text-white': color === 'white',

        // --> FONT WEIGHT <--

        'font-bold': ['2xs', 'xs', 'sm'].includes(size),
        'font-extrabold': ['base', 'lg', 'xl', '2xl'].includes(size),

        // --> LINE HEIGHT <--

        'leading-tight': ['2xs', 'xs', 'sm', 'base'].includes(size),
        'leading-tight sm:leading-tighter': ['lg', 'xl', '2xl'].includes(size),

        // --> TEXT ALIGNMENTS <--

        'text-center': alignment === 'center',
        'text-left': alignment === 'left',
        'text-right': alignment === 'right',

        // --> TEXT SIZES <--

        'text-sm sm:text-base': size === '2xs',
        'text-lg sm:text-2xl': size === 'xs',
        'text-xl sm:text-2xl xl:text-3xl': size === 'sm',
        'text-xl sm:text-3xl xl:text-4xl': size === 'base',
        'text-2xl sm:text-4xl xl:text-5xl': size === 'lg',
        'text-3xl sm:text-5xl xl:text-6xl': size === 'xl',
      }"
      class="tracking-tight"
    >
      <slot />
    </component>
  </div>
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
    color: {
      type: String,
      default: 'gray',
      validator(x) {
        return ['gray', 'white'].includes(x)
      },
    },
    size: {
      type: String,
      default: 'base',
      validator(x) {
        return ['2xs', 'xs', 'sm', 'base', 'lg', 'xl'].includes(x)
      },
    },
    tag: {
      type: String,
      required: true,
      validator(x) {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(x)
      },
    },
  },
}
</script>
