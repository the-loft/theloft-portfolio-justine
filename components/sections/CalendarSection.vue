<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <base-section>
    <template #left>
      <div data-aos="zoom-in">
        <base-heading alignment="center" size="lg" tag="h2" class="mb-6 sm:mb-8">
          <span class="flex flex-col">
            <span class="self-center">{{ $t('title.part1') }}</span>

            <base-gradient class="self-center" color="green">
              {{ $t('title.part2') }}
            </base-gradient>
          </span>
        </base-heading>
      </div>
    </template>

    <template #right>
      <div class="relative flex justify-center -mt-8 md:-mt-24">
        <div class="absolute top-0 hidden mt-24 left-6 xl:block">
          <img
            :src="require('~/assets/images/landscapes/calendar-left.svg')"
            class="h-120"
            loading="lazy"
          />
        </div>

        <div
          class="relative z-10 w-full calendly-inline-widget calendly-widget"
          data-url="https://calendly.com/justine-lecoupanec/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
        ></div>

        <div class="absolute top-0 hidden mt-24 right-6 xl:block">
          <img
            :src="require('~/assets/images/landscapes/calendar-right.svg')"
            class="h-120"
            loading="lazy"
          />
        </div>
      </div>
    </template>
  </base-section>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  mounted() {
    this.$helpers.utility.addScriptTag({
      src: 'https://assets.calendly.com/assets/external/widget.js',
    })
  },
}
</script>

<!-- *************************************************************************
     I18N
     ************************************************************************* -->

<i18n lang="json">
{
  "en": {
    "title": {
      "part1": "Book a 15-minute call with me",
      "part2": "Let's improve your product's identity together"
    }
  },
  "fr": {
    "title": {
      "part1": "Réservez une appel de 15 minutes avec moi",
      "part2": "Améliorons ensemble l'identité de votre produit"
    }
  }
}
</i18n>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: '.calendly-widget';

#{$c} {
  height: 600px;

  @include mq($from: md) {
    height: 1000px;
  }

  @include mq($from: xl) {
    height: 690px;
  }
}
</style>
