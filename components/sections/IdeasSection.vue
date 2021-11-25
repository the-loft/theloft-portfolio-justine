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
            {{ $t('idea1.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="pink">
              {{ $t('idea1.subtitle') }}
            </base-gradient>
          </base-heading>
        </div>
      </div>

      <!-- IDEA 2 -->

      <div class="mb-20">
        <div class="mb-10" data-aos="zoom-in">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h2">
            {{ $t('idea2.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="orange">
              {{ $t('idea2.subtitle') }}
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
            {{ $t('idea3.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="blue">
              {{ $t('idea3.subtitle') }}
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
            {{ $t('idea4.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="blue">
              {{ $t('idea4.subtitle') }}
            </base-gradient>
          </base-heading>
        </div>
      </div>

      <!-- IDEA 5 -->

      <div class="mb-20">
        <div class="mb-10" data-aos="zoom-in">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h2">
            {{ $t('idea5.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="green">
              {{ $t('idea5.subtitle') }}
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
            {{ $t('idea6.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="pink">
              {{ $t('idea6.subtitle') }}
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
  }),
}
</script>

<!-- *************************************************************************
     I18N
     ************************************************************************* -->

<i18n lang="json">
{
  "en": {
    "idea1": {
      "title": "I can make your landing page stand out from the competition",
      "subtitle": "with animated vector illustrations"
    },
    "idea2": {
      "title": "I can design your own mascotte",
      "subtitle": "to humanize your site"
    },
    "idea3": {
      "title": "I can draw your entire team",
      "subtitle": "in your favorite style"
    },
    "idea4": {
      "title": "I can animate your logo",
      "subtitle": "so you can use it as a spinner"
    },
    "idea5": {
      "title": "I can help you catch people's attention on your social networks",
      "subtitle": "by designing banners, animated GIFs or videos"
    },
    "idea6": {
      "title": "I can invent all the elements of your ebook",
      "subtitle": "to encourage people to download it"
    }
  },
  "fr": {
    "idea1": {
      "title": "Je peux travailler à embellir votre homepage pour vous démarquer de la concurrence",
      "subtitle": "avec des illustrations vectorielles animées"
    },
    "idea2": {
      "title": "Je peux concevoir votre propre mascotte",
      "subtitle": "pour humaniser votre site"
    },
    "idea3": {
      "title": "Je peux dessiner toute votre équipe",
      "subtitle": "dans votre style préféré"
    },
    "idea4": {
      "title": "Je peux animer votre logo",
      "subtitle": "pour que vous puissiez l'utiliser comme spinner"
    },
    "idea5": {
      "title": "Je peux vous aider à attirer l'attention sur vos réseaux sociaux",
      "subtitle": "en concevant des bannières, des GIF animés ou des vidéos"
    },
    "idea6": {
      "title": "Je peux inventer tous les éléments visuels de votre ebook",
      "subtitle": "pour encourager les gens à le télécharger"
    }
  }
}
</i18n>
