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
  ></div>
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
  },
}
</script>
