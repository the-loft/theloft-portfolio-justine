<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div>
    <main-section />

    <base-divider class="my-10 sm:my-16" />

    <ideas-section class="-mt-2" />

    <base-divider class="my-10 sm:my-16" />

    <!-- <process-section class="-mt-2" />

    <base-divider class="my-10 sm:my-16" /> -->

    <benefits-section class="-mt-2" />

    <base-divider class="my-10 sm:my-16" />

    <calendar-section class="-mt-2" />
  </div>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// NPM
import AOS from 'aos'

export default {
  mounted() {
    AOS.init({ once: true })
  },
}
</script>
