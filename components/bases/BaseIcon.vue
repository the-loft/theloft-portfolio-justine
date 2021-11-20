<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <span class="select-none" @click="onClick">
    <component
      :is="!to ? 'span' : typeof to === 'string' ? 'a' : 'nuxt-link'"
      :class="{
        // --> CURSORS <--

        'cursor-auto': cursor === 'auto',
        'cursor-not-allowed': cursor === 'not-allowed',
        'cursor-pointer': cursor === 'pointer' || $listeners.click || to,
      }"
      :href="typeof to === 'string' ? to : null"
      :target="typeof to === 'string' ? '_blank' : null"
      :to="to && typeof to === 'object' ? to : null"
      class="flex items-center justify-center w-full h-full"
    >
      <fa-icon :icon="icon" class="flex-initial w-full h-full" />
    </component>
  </span>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    cursor: {
      type: String,
      default: null,
      validator(x) {
        return ['auto', 'not-allowed', 'pointer'].includes(x)
      },
    },
    icon: {
      type: Array,
      required: true,
    },
    to: {
      type: [String, Object],
      default: null,
    },
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick(event) {
      this.$emit('click', event)
    },
  },
}
</script>
