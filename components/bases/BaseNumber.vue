<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div
    :class="{
      // --> SIZES <--

      'w-4 h-4': size === '2xs',
      'w-5 h-5': size === 'xs',
      'w-8 h-8': size === 'sm',
      'w-10 h-10': size === 'base',
      'w-12 h-12': size === 'lg',
      'w-16 h-16': size === 'xl',
    }"
    class="relative flex items-center justify-center bg-gray-900 rounded-full select-none"
  >
    <span
      :class="{
        // --> SIZES <--

        'text-2xs': size === '2xs',
        'text-xs': size === 'xs',
        'text-sm': size === 'sm',
        'text-base': size === 'base',
        'text-lg': size === 'lg',
        'text-xl': size === 'xl',
      }"
      class="font-extrabold leading-6 text-white"
    >
      {{ number }}
    </span>

    <div
      v-if="hasBorder"
      :class="{
        // --> BORDERS <--

        border: ['2xs', 'xs', 'sm', 'base'].includes(size),
        'border-2': ['lg', 'xl'].includes(size),

        // --> SIZES <--

        'w-3 h-3': size === '2xs',
        'w-4 h-4': size === 'xs',
        'w-6 h-6': size === 'sm',
        'w-8 h-8': size === 'base',
        'w-10 h-10': size === 'lg',
        'w-12 h-12': size === 'xl',
      }"
      class="absolute transform -translate-x-1/2 -translate-y-1/2 border-white rounded-full top-1/2 left-1/2"
    ></div>
  </div>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    hasBorder: {
      type: Boolean,
      default: false,
    },
    number: {
      type: [String, Number],
      required: true,
    },
    size: {
      type: String,
      default: 'base',
      validator(x) {
        return ['2xs', 'xs', 'sm', 'base', 'lg', 'xl'].includes(x)
      },
    },
  },
}
</script>
