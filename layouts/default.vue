<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div
    class="z-50 antialiased leading-relaxed tracking-tight text-gray-900 select-none  has-animation default-layout"
  >
    <main class="container mt-10">
      <nuxt />
    </main>
  </div>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
html {
  @apply bg-gray-100 #{!important};
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}

a,
img {
  -webkit-user-drag: none;
}

a {
  @apply outline-none;

  &:focus {
    &:not(.no-focus-style) {
      @apply text-black;
    }
  }
}

img {
  user-select: none;
}

.default-layout.has-animation {
  .page-enter-active,
  .page-leave-active {
    transition-property: opacity, transform;
    transition-timing-function: ease-in-out;
    transition-duration: 250ms;
  }

  .page-enter {
    opacity: 0;
    transform: translateY(50px);
  }

  .page-leave-to {
    opacity: 0;
  }
}
</style>
