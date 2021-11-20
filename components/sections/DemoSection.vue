<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <home-section>
    <template #left>
      <div data-aos="zoom-in">
        <base-heading alignment="center" size="lg" tag="h2" class="mb-6 sm:mb-8">
          <span class="flex flex-col">
            <span class="self-center">{{ $t('title.part1') }}</span>

            <base-gradient class="self-center" color="pink">
              {{ $t('title.part2') }}
            </base-gradient>
          </span>
        </base-heading>
      </div>
    </template>

    <template #right>
      <div class="relative flex justify-center -mt-8 md:-mt-24">
        <div class="absolute top-0 left-0 hidden mt-40 xl:block">
          <img
            :src="require('~/assets/images/landscapes/left-city-kremlin.svg')"
            class="h-104"
            loading="lazy"
          />
        </div>

        <div
          class="relative z-10 w-full calendly-inline-widget calendly-widget"
          data-url="https://calendly.com/prospectwith/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
        ></div>

        <div class="absolute top-0 right-0 hidden mt-40 xl:block">
          <img
            :src="require('~/assets/images/landscapes/right-city-bridge.svg')"
            class="h-104"
            loading="lazy"
          />
        </div>
      </div>
    </template>
  </home-section>
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
    "legend": "Book a 15-minute demo",

    "title": {
      "part1": "See our product in action with Julien",
      "part2": "the founder of ProspectWith"
    }
  },
  "fr": {
    "legend": "Réservez une démo de 15 minutes",

    "title": {
      "part1": "Découvrez notre produit en action avec Julien",
      "part2": "le fondateur de ProspectWith"
    }
  }
}
</i18n>
