<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <component
    :is="!to ? 'button' : typeof to === 'string' ? 'a' : 'nuxt-link'"
    :class="{
      // --> GENERAL <--

      'cursor-not-allowed': disabled,
      'w-full': fullWidth,
      'border background-transparent shadow-none': reverse,
      'shadow-sm': !reverse,
      'hover:text-gray-900 hover:border-black': reverse && !disabled && color !== 'white',

      // --> CIRCULAR <--

      'w-5 h-5': size === '2xs' && circular,
      'w-6 h-6': size === 'xs' && circular,
      'w-8 h-8': size === 'sm' && circular,
      'w-10 h-10': size === 'base' && circular,
      'w-12 h-12': size === 'lg' && circular,
      'w-16 h-16': size === 'xl' && circular,

      // --> COLORS <--

      'text-white bg-gray-900': color === 'black' && !reverse,
      'hover:bg-black': color === 'black' && !reverse && !disabled,
      'text-gray-900 border-gray-900': color === 'black' && reverse,

      'text-white bg-blue-700': color === 'blue' && !reverse,
      'hover:bg-blue-600': color === 'blue' && !reverse && !disabled,
      'text-blue-700 border-blue-700': color === 'blue' && reverse,

      'text-white bg-green-800': color === 'green' && !reverse,
      'hover:bg-green-700': color === 'green' && !reverse && !disabled,
      'text-green-700 border-green-700': color === 'green' && reverse,

      'text-white bg-indigo-700': color === 'indigo' && !reverse,
      'hover:bg-indigo-600': color === 'indigo' && !reverse && !disabled,
      'text-indigo-700 border-indigo-700': color === 'indigo' && reverse,

      'text-white bg-orange-700': color === 'orange' && !reverse,
      'hover:bg-orange-600': color === 'orange' && !reverse && !disabled,
      'text-orange-700 border-orange-700': color === 'orange' && reverse,

      'text-white bg-purple-700': color === 'purple' && !reverse,
      'hover:bg-purple-600': color === 'purple' && !reverse && !disabled,
      'text-purple-700 border-purple-700': color === 'purple' && reverse,

      'text-white bg-red-700': color === 'red' && !reverse,
      'hover:bg-red-600': color === 'red' && !reverse && !disabled,
      'text-red-700 border-red-700': color === 'red' && reverse,

      'text-white bg-teal-700': color === 'teal' && !reverse,
      'hover:bg-teal-600': color === 'teal' && !reverse && !disabled,
      'text-teal-700 border-teal-700': color === 'teal' && reverse,

      'text-gray-900 bg-white border border-gray-300': color === 'white' && !reverse,
      'hover:border-gray-400 hover:bg-white': color === 'white' && !reverse && !disabled,
      'text-white border-white hover:text-gray-800 hover:bg-white': color === 'white' && reverse,

      'text-white bg-yellow-600': color === 'yellow' && !reverse,
      'hover:bg-yellow-600': color === 'yellow' && !reverse && !disabled,
      'text-yellow-600 border-yellow-600': color === 'yellow' && reverse,

      // --> FONT-SIZES <--

      'text-2xs': size === '2xs',
      'text-xs': size === 'xs',
      'text-sm': ['sm', 'base'].includes(size),
      'text-base': size === 'lg',
      'text-lg': size === 'xl',

      // --> ROUNDED <--

      'rounded-none': rounded === 'none' && !circular,
      'rounded-sm': rounded === 'sm' && !circular,
      rounded: rounded === 'base' && !circular,
      'rounded-md': rounded === 'md' && !circular,
      'rounded-lg': rounded === 'lg' && !circular,
      'rounded-full': rounded === 'full' || circular,

      // --> SIZES <--

      'px-3.5 h-8': size === '2xs' && !circular,
      'px-4 h-10': size === 'xs' && !circular,
      'px-5 h-12': size === 'sm' && !circular,
      'px-6 h-13': size === 'base' && !circular,
      'px-6 h-14': size === 'lg' && !circular,
      'px-8 h-16': size === 'xl' && !circular,
    }"
    :disabled="disabled"
    :href="typeof to === 'string' ? to : null"
    :target="typeof to === 'string' ? 'blank' : null"
    :to="typeof to === 'object' ? to : null"
    :type="typeof to === 'object' ? null : type"
    class="relative inline-block font-bold tracking-tight uppercase appearance-none cursor-pointer select-none  focus:outline-none base-button"
    @click="onClick"
  >
    <span class="flex items-center justify-center h-full">
      <base-icon
        v-if="icon"
        :class="{
          // --> COLORS <--

          'text-blue-700': iconColor === 'blue',
          'text-gray-700': iconColor === 'gray',
          'text-green-700': iconColor === 'green',
          'text-indigo-700': iconColor === 'indigo',
          'text-orange-700': iconColor === 'orange',
          'text-red-700': iconColor === 'red',
          'text-white': iconColor === 'white',
          'text-yellow-600': iconColor === 'yellow',

          // --> MARGIN <--

          'mr-1.5': size === '2xs',
          'mr-2': ['xs', 'sm', 'base'].includes(size),
          'mr-2.5': ['md', 'lg'].includes(size),
          'mr-3': size === 'xl',

          // --> WIDTH <--

          'w-3 h-3': size === '2xs',
          'w-3.5 h-3.5': size === 'xs',
          'w-4 h-4': ['sm', 'base'].includes(size),
          'w-4.5 h-4.5': size === 'lg',
          'w-5 h-5': size === 'xl',
        }"
        :icon="icon"
        class="flex-initial"
      />

      <span class="flex items-center flex-initial leading-normal">
        <slot />
      </span>
    </span>
  </component>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    circular: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'black',
      validator(x) {
        return [
          'black',
          'blue',
          'green',
          'indigo',
          'purple',
          'orange',
          'red',
          'teal',
          'white',
          'yellow',
        ].includes(x)
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Array,
      default: null,
    },
    iconColor: {
      type: String,
      default: null,
      validator(x) {
        return ['blue', 'gray', 'green', 'indigo', 'red', 'white', 'yellow'].includes(x)
      },
    },
    id: {
      type: [String, Number],
      default: null,
    },

    reverse: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: String,
      default: 'md',
      validator(x) {
        return ['none', 'sm', 'base', 'md', 'lg', 'full'].includes(x)
      },
    },
    size: {
      type: String,
      default: 'base',
      validator(x) {
        return ['2xs', 'xs', 'sm', 'base', 'lg', 'xl'].includes(x)
      },
    },
    to: {
      type: [Object, String],
      default: null,
    },
    type: {
      type: String,
      default: 'button',
      validator(x) {
        return ['button', 'reset', 'submit'].includes(x)
      },
    },
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick(event) {
      this.$emit('click', this.id, event)
    },
  },
}
</script>
