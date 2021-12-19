<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div
    :class="{
      //--> GENERAL <--

      'flex-row-reverse': reverse,

      // --> MARGINS <--

      'my-10': margin === 10,
    }"
    class="flex justify-center w-full text-base quote"
  >
    <img
      :alt="author"
      :class="{
        // --> GENERAL <--

        'ml-4': reverse,
        'mr-4': !reverse,
      }"
      :src="require(`@/assets/images/components/bases/BaseQuote/${author}.svg`)"
      class="self-start flex-initial w-16 mt-1 sm:w-20"
    />

    <div class="flex flex-col flex-1 normal-case">
      <div
        :class="{
          // --> BACKGROUNDS <--

          'bg-gray-100 border shadow-sm': background === 'gray',
          'bg-white shadow': background === 'white',
        }"
        class="px-5 py-4 text-lg leading-7 text-left text-gray-900 select-text rounded-2xl"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    author: {
      type: String,
      required: true,
      validator(x) {
        return ['availability', 'contact', 'pricing', 'updates'].includes(x)
      },
    },
    background: {
      type: String,
      default: 'white',
      validator(x) {
        return ['gray', 'white'].includes(x)
      },
    },
    margin: {
      type: Number,
      default: 10,
    },
    reverse: {
      type: Boolean,
      default: null,
    },
  },
}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: '.quote';

#{$c} {
  #{$c}__avatar {
    &--width-xl {
      margin-top: -20px;
    }
  }
}
</style>
