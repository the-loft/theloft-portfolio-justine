<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <span
    :class="{
      // --> COLORS <--

      'to-blue-500': color === 'blue',
      'to-green-500': color === 'green',
      'to-indigo-500': color === 'indigo',
      'to-orange-500': color === 'orange',
      'to-pink-500': color === 'pink',
      'to-red-500': color === 'red',
      'to-teal-500': color === 'teal',
      'to-yellow-500': color === 'yellow',
    }"
    class="block text-transparent base-gradient bg-clip-text bg-gradient-to-r from-indigo-700"
  >
    <slot />
  </span>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
      validator(x) {
        return ['blue', 'green', 'indigo', 'orange', 'pink', 'red', 'teal', 'yellow']
      },
    },
  },
}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: '.base-gradient';

#{$c} {
  &.bg-clip-text {
    -webkit-background-clip: text !important;
    background-clip: text !important;
  }
}
</style>
