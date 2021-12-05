<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <base-section>
    <template #left>
      <div>
        <img
          :src="require('~/assets/images/components/sections/MainSection/MainBackground.svg')"
          class="w-full -mt-12 rounded-lg"
        />

        <base-heading
          alignment="center"
          size="lg"
          tag="h1"
          class="max-w-3xl mx-auto mb-6 -mt-5 sm:-mt-8 sm:mb-8 lg:-mt-20 xl:-mt-28"
        >
          <span class="flex flex-col">
            <span class="self-center mb-3">{{ $t('title.part1') }}</span>

            <base-gradient class="self-center leading-24" color="teal">
              <div class="inline">{{ $t('title.part2') }}</div>

              <div class="inline">{{ $t('title.part3') }}</div>
            </base-gradient>
          </span>
        </base-heading>

        <base-button
          :icon="['far', 'comment-alt-smile']"
          size="xl"
          @click="$helpers.common.triggerChatbox()"
        >
          {{ $t('chatWithMe') }}
        </base-button>
      </div>
    </template>

    <template #right>
      <div></div>
    </template>
  </base-section>
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
      "part1": "Hello, I'm Justine!",
      "part2": "I can improve the identity & branding",
      "part3": "of your SaaS or eCommerce in 30 days"
    }
  },
  "fr": {
    "title": {
      "part1": "Bonjour, je suis Justine!",
      "part2": "Je peux améliorer l'identité et l'image de marque",
      "part3": "de votre SaaS ou eCommerce en 30 jours"
    }
  }
}
</i18n>
