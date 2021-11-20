<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <span class="relative" @click="onClick">
    <component
      :is="to ? 'nuxt-link' : 'div'"
      v-if="countryCode || icon || src"
      :class="{
        // --> GENERAL <--

        shadow: shadow,
        'cursor-pointer': $listeners.click,
        'border-2 border-white': bordered,

        // --> BACKGROUNDS <--

        'bg-blue-100': background === 'blue',
        'bg-gray-200': background === 'gray',
        'bg-indigo-100': background === 'indigo',
        'bg-green-100': background === 'green',
        'bg-orange-100': background === 'orange',
        'bg-pink-100': background === 'pink',
        'bg-purple-100': background === 'purple',
        'bg-red-100': background === 'red',
        'bg-transparent': background === 'transparent',
        'bg-teal-100': background === 'teal',
        'bg-yellow-100': background === 'yellow',
        'bg-white': background === 'white',

        // --> ROUNDED <--

        'rounded-none': rounded === 'none',
        'rounded-sm': rounded === 'sm',
        rounded: rounded === 'base',
        'rounded-md': rounded === 'md',
        'rounded-lg': rounded === 'lg',
        'rounded-full': rounded === 'full',

        // --> SIZES <--

        'w-4 h-4': size === 4,
        'w-5 h-5': size === 5,
        'w-6.5 h-6.5': size === 6.5,
        'w-8 h-8': size === 8,
        'w-10 h-10': size === 10,
        'w-12 h-12': size === 12,
        'w-16 h-16': size === 16,
        'w-20 h-20': size === 20,
        'w-24 h-24': size === 24,
      }"
      :style="{
        'bg-gray-100': !loaded,
        'background-image': placeholder && loaded ? `url('${placeholder}')` : null,
      }"
      :target="to ? target : null"
      :to="to ? to : null"
      class="flex items-center justify-center overflow-hidden bg-cover"
    >
      <img
        v-if="(src || srcBase64) && !error"
        :src="srcBase64 ? `data:image/${srcBase64Type};base64,${srcBase64}` : src"
        class="w-full h-full border-none"
        loading="lazy"
        @error="onError"
        @load="onLoad"
      />

      <base-icon
        v-else-if="icon"
        :class="{
          // --> ICON COLORS <--

          'text-blue-900': iconColor === 'blue',
          'text-gray-900': iconColor === 'gray',
          'text-green-900': iconColor === 'green',
          'text-indigo-900': iconColor === 'indigo',
          'text-orange-900': iconColor === 'orange',
          'text-pink-900': iconColor === 'pink',
          'text-purple-900': iconColor === 'purple',
          'text-red-900': iconColor === 'red',
          'text-teal-900': iconColor === 'teal',
          'text-yellow-900': iconColor === 'yellow',

          // --> SIZES <--

          'w-2 h-2': size === 4,
          'w-2.5 h-2.5': size === 5,
          'w-3 h-3': size === 6.5,
          'w-4 h-4': size === 8,
          'w-5 h-5': size === 10,
          'w-6 h-6': size === 12,
          'w-8 h-8': size === 16,
          'w-10 h-10': size === 20,
          'w-16 h-16': size === 24,
        }"
        :icon="icon"
      />

      <img
        v-else
        :src="require('~/assets/images/components/bases/BaseAvatar/default.svg')"
        class="w-full h-full border-none"
        loading="lazy"
      />
    </component>

    <slot />
  </span>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    background: {
      type: String,
      default: 'white',
      validator(x) {
        return [
          'blue',
          'gray',
          'green',
          'indigo',
          'orange',
          'pink',
          'purple',
          'red',
          'teal',
          'transparent',
          'yellow',
          'white',
        ].includes(x)
      },
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    bottomIcon: {
      type: Object,
      default: null,
    },
    countryCode: {
      type: String,
      default: null,
    },
    icon: {
      type: Array,
      default: null,
    },
    iconColor: {
      type: String,
      default: 'gray',
      validator(x) {
        return [
          'blue',
          'gray',
          'green',
          'indigo',
          'orange',
          'pink',
          'purple',
          'red',
          'teal',
          'yellow',
        ].includes(x)
      },
    },
    placeholder: {
      type: String,
      default: null,
    },
    rounded: {
      type: String,
      default: null,
      validator(x) {
        return ['none', 'sm', 'base', 'md', 'lg', 'full'].includes(x)
      },
    },
    shadow: {
      type: Boolean,
      default: true,
    },
    size: {
      type: Number,
      default: 16,
    },
    src: {
      type: String,
      default: null,
    },
    srcBase64: {
      type: String,
      default: null,
    },
    srcBase64Type: {
      type: String,
      default: null,
    },
    target: {
      type: String,
      default: '_self',
      validator(x) {
        return ['_blank', '_self'].includes(x)
      },
    },
    to: {
      type: Object,
      default: null,
    },
  },

  data: () => ({
    // --> STATE <--

    error: false,
    loaded: false,
  }),

  methods: {
    // --> EVENT LISTENERS <--

    onClick(event) {
      if (this.to) {
        event.stopPropagation()
      }

      this.$emit('click', event)
    },

    onError() {
      this.error = true
      this.loaded = true
    },

    onLoad() {
      this.loaded = true
    },
  },
}
</script>
