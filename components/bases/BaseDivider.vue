<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div
    :class="{
      // --> BORDER COLORS <--

      'border-gray-300': borderStyle === 'solid',
      'border-gray-400': borderStyle !== 'solid',

      // --> BORDER-STYLES <--

      'border-dashed': borderStyle === 'dashed',
      'border-dotted': borderStyle === 'dotted',
      'border-none': borderStyle === 'none',
      'border-solid': borderStyle === 'solid',
    }"
    class="relative block w-full text-center border-t"
    style="height: 1px"
  >
    <span
      v-if="title"
      :class="{
        // --> BACKGROUNDS <--

        'bg-gray-100': background === 'gray',
        'bg-white': background === 'white',
      }"
      class="absolute inline-block px-4 -mt-3 text-sm font-bold tracking-wide text-center uppercase transform -translate-x-1/2 "
    >
      {{ title }}
    </span>
  </div>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    background: {
      type: String,
      default: 'gray',
      validator(x) {
        return ['gray', 'white'].includes(x)
      },
    },
    borderStyle: {
      type: String,
      default: 'dashed',
      validator(x) {
        return ['dashed', 'dotted', 'none', 'solid'].includes(x)
      },
    },
    title: {
      type: String,
      default: null,
    },
  },
}
</script>
