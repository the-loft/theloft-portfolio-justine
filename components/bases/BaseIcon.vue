<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <span
    :class="{ relative: menuItems }"
    class="select-none"
    @click="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <component
      :is="!to ? 'span' : typeof to === 'string' ? 'a' : 'nuxt-link'"
      v-if="!loading"
      :class="{
        // --> CURSORS <--

        'cursor-auto': cursor === 'auto',
        'cursor-not-allowed': cursor === 'not-allowed',
        'cursor-pointer': cursor === 'pointer' || $listeners.click || menuItems || to,

        // --> Z-INDEXES <--

        'z-10': zIndex === 10,
        'z-20': zIndex === 20,
      }"
      :href="typeof to === 'string' ? to : null"
      :target="typeof to === 'string' ? '_blank' : null"
      :to="to && typeof to === 'object' ? to : null"
      class="flex items-center justify-center w-full h-full"
    >
      <fa-icon :icon="icon" class="flex-initial w-full h-full" />
    </component>

    <base-spinner v-else class="w-full h-full" />

    <transition name="fade">
      <base-menu
        v-if="menuItems && menuOpened && !menuDisabled"
        :items="menuItems"
        :size="menuSize"
        :width="menuWidth"
        class="z-10 pt-1"
        @item:click="onMenuItemClick"
      />
    </transition>
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
    loading: {
      type: Boolean,
      required: false,
    },
    menuDisabled: {
      type: Boolean,
      default: false,
    },
    menuHovered: {
      type: Boolean,
      default: false,
    },
    menuItems: {
      type: Array,
      default: null,
    },
    menuManagedInParent: {
      type: Boolean,
      default: false,
    },
    menuSize: {
      type: String,
      default: 'base',
      validator(x) {
        return ['sm', 'base'].includes(x)
      },
    },
    menuWidth: {
      type: String,
      default: 'base',
      validator(x) {
        return ['xs', 'sm', 'base', 'lg'].includes(x)
      },
    },
    to: {
      type: [String, Object],
      default: null,
    },
    zIndex: {
      type: Number,
      default: null,
      validator(x) {
        return [10, 20].includes(x)
      },
    },
  },

  data: () => ({
    // --> STATE <--

    menuOpened: false,
  }),

  methods: {
    // --> EVENT LISTENERS <--

    onClick(event) {
      if (this.menuItems && !this.menuManagedInParent) {
        this.menuOpened = !this.menuOpened
      }

      this.$emit('click', event)
    },

    onMenuItemClick(item, subItem, event) {
      this.$emit('item:click', item, subItem, event)
    },

    onMouseEnter() {
      if (this.menuItems && this.menuHovered && !this.menuManagedInParent) {
        this.menuOpened = true
      }
    },

    onMouseLeave() {
      if (this.menuItems && this.menuHovered && !this.menuManagedInParent) {
        this.menuOpened = false
      }
    },
  },
}
</script>
