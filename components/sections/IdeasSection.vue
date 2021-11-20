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

            <base-gradient class="self-center" color="teal">
              {{ $t('title.part2') }}
            </base-gradient>
          </span>
        </base-heading>
      </div>
    </template>

    <template #right>
      <div class="mb-20">
        <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h3">
          {{ $t('idea1.title') }}
        </base-heading>

        <base-heading alignment="center" tag="h4">
          <base-gradient color="pink">
            {{ $t('idea1.subtitle') }}
          </base-gradient>
        </base-heading>
      </div>

      <div class="mb-20">
        <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h3">
          {{ $t('idea2.title') }}
        </base-heading>

        <base-heading alignment="center" tag="h4">
          <base-gradient color="orange">
            {{ $t('idea2.subtitle') }}
          </base-gradient>
        </base-heading>
      </div>

      <div class="mb-20">
        <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h3">
          {{ $t('idea3.title') }}
        </base-heading>

        <base-heading alignment="center" tag="h4">
          <base-gradient color="green">
            {{ $t('idea3.subtitle') }}
          </base-gradient>
        </base-heading>
      </div>

      <div>
        <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h3">
          {{ $t('idea4.title') }}
        </base-heading>

        <base-heading alignment="center" tag="h4">
          <base-gradient color="blue">
            {{ $t('idea4.subtitle') }}
          </base-gradient>
        </base-heading>
      </div>
    </template>
  </home-section>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {}
</script>

<!-- *************************************************************************
     I18N
     ************************************************************************* -->

<i18n lang="json">
{
  "en": {
    "title": {
      "part1": "Here are some ideas we can do together",
      "part2": "to improve your branding"
    },

    "idea1": {
      "title": "Make your landing page stand out from the crowd",
      "subtitle": "with optimized vector animations"
    },
    "idea2": {
      "title": "Create your own mascotte",
      "subtitle": "to humanize your site"
    },
    "idea3": {
      "title": "Draw your entire team",
      "subtitle": "by following your favorite style"
    },
    "idea4": {
      "title": "Create beautiful illustrations for your social networks",
      "subtitle": "like banners, animated GIFs or videos"
    }
  },
  "fr": {
    "title": {
      "part1": "Voici quelques idées que nous pouvons faire ensemble",
      "part2": "pour améliorer votre image de marque"
    },

    "idea1": {
      "title": "",
      "subtitle": ""
    },

    "idea2": {
      "title": "",
      "subtitle": ""
    },

    "idea3": {
      "title": "",
      "subtitle": ""
    }
  }
}
</i18n>
