<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div
    class="z-50 antialiased font-bold leading-relaxed tracking-tight text-gray-900  select-none safe-top safe-left safe-right safe-bottom default-layout"
  >
    <div
      class="max-w-screen-md px-4 pt-4 mx-auto sm:px-6 pb-10"
    >

        <nuxt />

    </div>

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
    @apply text-black;
  }
}

img {
  user-select: none;
}

.default-layout.has-animation {
  .page-enter-active,
  .page-leave-active {
    transition-timing-function: ease-in-out;
    transition-duration: 250ms;
    transition-property: opacity, transform;
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
