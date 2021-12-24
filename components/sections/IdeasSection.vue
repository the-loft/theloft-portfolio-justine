<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <base-section>
    <template #right>
      <!-- IDEA 1 -->

      <div class="mb-20">
        <div class="mb-10" data-aos="zoom-in">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h2">
            {{ $t('landing.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="pink">
              {{ $t('landing.subtitle') }}
            </base-gradient>
          </base-heading>
        </div>
      </div>

      <!-- IDEA 2 -->

      <div class="mb-20">
        <div class="mb-10" data-aos="zoom-in">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h2">
            {{ $t('mascotte.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="orange">
              {{ $t('mascotte.subtitle') }}
            </base-gradient>
          </base-heading>
        </div>

        <div class="flex flex-wrap justify-center max-w-4xl mx-auto -my-4">
          <img
            v-for="power in powers"
            :key="power"
            :src="require(`~/assets/images/components/sections/IdeasSection/powers/${power}.svg`)"
            class="flex-initial h-20 m-4 md:h-24"
          />
        </div>
      </div>

      <!-- IDEA 3 -->

      <div class="mb-20">
        <div class="mb-10" data-aos="zoom-in">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h2">
            {{ $t('team.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="blue">
              {{ $t('team.subtitle') }}
            </base-gradient>
          </base-heading>
        </div>

        <div class="flex flex-wrap justify-center max-w-2xl mx-auto -my-2">
          <img
            v-for="character in characters"
            :key="character"
            :src="
              require(`~/assets/images/components/sections/IdeasSection/characters/${character}.svg`)
            "
            class="flex-initial w-16 h-16 m-2 sm:w-20 sm:h-20"
          />
        </div>
      </div>

      <!-- IDEA 4 -->

      <div class="mb-20">
        <div class="mb-10" data-aos="zoom-in">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h2">
            {{ $t('logo.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="blue">
              {{ $t('logo.subtitle') }}
            </base-gradient>
          </base-heading>
        </div>

        <div class="flex flex-wrap items-center justify-center">
          <img
            v-for="spinner in spinners"
            :key="spinner"
            :alt="`${spinner}'s loading image`"
            :src="
              require(`~/assets/images/components/sections/IdeasSection/spinners/${spinner}.gif`)
            "
            class="w-24 mx-3 border shadow-sm sm:mx-4 rounded-3xl sm:w-32"
          />
        </div>
      </div>

      <!-- IDEA 5 -->

      <div class="mb-20">
        <div class="mb-10" data-aos="zoom-in">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h2">
            {{ $t('socialNetworks.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="green">
              {{ $t('socialNetworks.subtitle') }}
            </base-gradient>
          </base-heading>
        </div>

        <div class="flex flex-col max-w-2xl mx-auto">
          <div
            v-for="banner in banners"
            :key="banner"
            class="flex-initial p-3 mb-3 overflow-hidden bg-white border shadow-sm  last:mb-0 rounded-xl"
          >
            <img
              :src="
                require(`~/assets/images/components/sections/IdeasSection/banners/${banner}.jpeg`)
              "
              class="w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      <!-- IDEA 6 -->

      <div>
        <div class="mb-10" data-aos="zoom-in">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h2">
            {{ $t('ebook.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="pink">
              {{ $t('ebook.subtitle') }}
            </base-gradient>
          </base-heading>
        </div>

        <div class="flex flex-wrap justify-center max-w-4xl mx-auto -my-2">
          <img
            v-for="cover in covers"
            :key="cover"
            :src="require(`~/assets/images/components/sections/IdeasSection/covers/${cover}.jpg`)"
            class="flex-initial h-40 m-2 sm:h-64"
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
  data: () => ({
    // --> STATE <--

    banners: ['prospectwith', 'resilienceclub'],

    characters: [
      'alex',
      'brice',
      'charles',
      'dharmesh',
      'julien',
      'marie',
      'philippe',
      'sujan',
      'vincent',
      'alexandre',
      'bruno',
      'clelie',
      'fred',
      'laetitia',
      'michael',
      'thomas',
      'anthony',
      'celia',
      'denis',
      'jonathan',
      'lars',
      'nada',
      'steli',
      'timo',
      'yunae',
      'power',
    ],

    covers: [
      'cover-outer',
      'chapter1',
      'chapter2',
      'chapter3',
      'chapter4',
      'chapter5',
      'chapter6',
      'cover-back',
    ],

    powers: [
      'power-bank',
      'power-book',
      'power-chair',
      'power-christmas',
      'power-city-bis',
      'power-city',
      'power-easter',
      'power-hourglass',
      'power-magic',
      'power-rocket',
      'power-starwars',
      'power-teach',
      'power-typewriter',
      'power-welcome',
      'power-writer',
      'power-computer-coffee',
    ],

    spinners: ['prospectwith', 'resilienceclub'],
  }),
}
</script>

<!-- *************************************************************************
     I18N
     ************************************************************************* -->

<i18n lang="json">
{
  "en": {
    "landing": {
      "title": "I can make your landing page stand out from the competition",
      "subtitle": "with animated vector illustrations"
    },
    "mascotte": {
      "title": "I can design your own mascotte",
      "subtitle": "to humanize your site"
    },
    "team": {
      "title": "I can draw your entire team",
      "subtitle": "in your favorite style"
    },
    "logo": {
      "title": "I can animate your logo",
      "subtitle": "so you can use it as a loading element"
    },
    "socialNetworks": {
      "title": "I can help you catch people's attention on your social networks",
      "subtitle": "by designing banners, animated GIFs or videos"
    },
    "ebook": {
      "title": "I can invent all the elements of your ebook",
      "subtitle": "to encourage people to download it"
    }
  },
  "fr": {
    "landing": {
      "title": "Je peux travailler à embellir votre homepage pour vous démarquer de la concurrence",
      "subtitle": "avec des illustrations vectorielles animées"
    },
    "mascotte": {
      "title": "Je peux concevoir votre propre mascotte",
      "subtitle": "pour humaniser votre site"
    },
    "team": {
      "title": "Je peux dessiner toute votre équipe",
      "subtitle": "dans votre style préféré"
    },
    "logo": {
      "title": "Je peux animer votre logo",
      "subtitle": "pour que vous puissiez l'utiliser comme élément de chargement"
    },
    "socialNetworks": {
      "title": "Je peux vous aider à attirer l'attention sur vos réseaux sociaux",
      "subtitle": "en concevant des bannières, des GIF animés ou des vidéos"
    },
    "ebook": {
      "title": "Je peux inventer tous les éléments visuels de votre ebook",
      "subtitle": "pour encourager les gens à le télécharger"
    }
  }
}
</i18n>
