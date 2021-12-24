<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <base-section>
    <template #left>
      <div>
        <MainBackground class="w-full -mt-12 rounded-lg" />

        <base-heading
          alignment="center"
          size="lg"
          tag="h1"
          class="max-w-3xl mx-auto mb-8 -mt-5 sm:-mt-8 sm:mb-8 lg:-mt-20 xl:-mt-28"
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
          class="mb-12"
          size="xl"
          @click="$helpers.common.triggerChatbox()"
        >
          {{ $t('chatWithMe') }}
        </base-button>

        <div class="-mb-4">
          <p class="mb-4 text-lg font-bold sm:text-2xl">{{ $t('trophies') }}</p>

          <div class="flex flex-col flex-wrap items-center justify-center sm:flex-row">
            <a v-for="trophy in trophies" :key="trophy.name" :href="trophy.href" target="_blank">
              <img
                :alt="trophy.name"
                :src="require(`~/assets/images/components/sections/MainSection/${trophy.name}.svg`)"
                class="h-10 m-4"
              />
            </a>
          </div>
        </div>
      </div>
    </template>
  </base-section>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// Components
import MainBackground from '@/assets/images/components/sections/MainSection/MainBackground.svg?inline'

export default {
  components: {
    MainBackground,
  },

  data: () => ({
    // --> STATE <--

    trophies: [
      {
        name: 'prospectwith',
        href: 'https://www.prospectwith.com/',
      },
      {
        name: 'resilienceclub',
        href: 'https://www.resilience.club/',
      },
    ],
  }),
}
</script>

<!-- *************************************************************************
     I18N
     ************************************************************************* -->

<i18n lang="json">
{
  "en": {
    "trophies": "I have worked with the following teams",

    "title": {
      "part1": "Hello, I'm Justine!",
      "part2": "I can improve the identity & branding",
      "part3": "of your SaaS or eCommerce in 30 days"
    }
  },
  "fr": {
    "trophies": "J'ai travaillé avec les entreprises",

    "title": {
      "part1": "Bonjour, je suis Justine!",
      "part2": "Je peux améliorer l'identité et l'image de marque",
      "part3": "de votre SaaS ou eCommerce en 30 jours"
    }
  }
}
</i18n>
