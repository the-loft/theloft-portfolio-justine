<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div
    :class="{
      // --> SIZES <--

      'text-base': size === 'base',
      'text-lg': size === 'lg',
      'text-xl': size === 'xl',
    }"
    class="flex items-center text-left select-text"
  >
    <span
      :class="{ 'p-2 bg-gray-200 rounded-lg border shadow-inner': icon }"
      class="flex items-center justify-center flex-initial mr-2.5"
    >
      <base-icon
        :class="{
          // --> GENERAL <--

          'text-green-700': available && !icon,
          'text-red-700': !available && !icon,

          // --> SIZES <--

          'w-4.5 h-4.5': size === 'base',
          'w-5 h-5': size === 'lg',
          'w-6 h-6': size === 'xl',
        }"
        :icon="icon ? icon : ['fas', available ? 'check-circle' : 'times-circle']"
        class="flex-initial"
      />
    </span>

    <p class="flex-1">{{ label }}</p>
  </div>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    available: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: Array,
      default: null,
    },
    label: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'base',
      validators(x) {
        return ['base', 'lg', 'xl'].includes(x)
      },
    },
  },
}
</script>
