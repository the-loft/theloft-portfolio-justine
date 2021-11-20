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
        <div class="mb-10">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h3">
            {{ $t('idea1.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="pink">
              {{ $t('idea1.subtitle') }}
            </base-gradient>
          </base-heading>
        </div>
      </div>

      <div class="mb-20">
        <div class="mb-10">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h3">
            {{ $t('idea2.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="green">
              {{ $t('idea2.subtitle') }}
            </base-gradient>
          </base-heading>
        </div>

        <div class="flex flex-col max-w-2xl mx-auto">
          <div
            v-for="banner in banners"
            :key="banner"
            class="flex-initial p-3 mb-3 overflow-hidden bg-white border shadow-sm last:mb-0 rounded-xl"
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

      <div class="mb-20">
        <div class="mb-10">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h3">
            {{ $t('idea3.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="orange">
              {{ $t('idea3.subtitle') }}
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

      <div class="mb-20">
        <div class="mb-10">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h3">
            {{ $t('idea4.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="blue">
              {{ $t('idea4.subtitle') }}
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

      <div>
        <div class="mb-10">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h3">
            {{ $t('idea5.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="pink">
              {{ $t('idea5.subtitle') }}
            </base-gradient>
          </base-heading>
        </div>

        <div class="flex flex-wrap justify-center max-w-2xl mx-auto -my-2">
          <img
            v-for="cover in covers"
            :key="cover"
            :src="require(`~/assets/images/components/sections/IdeasSection/covers/${cover}.svg`)"
            class="flex-initial h-40 m-2 sm:h-64"
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

    covers: ['cover-outer', 'cover-inner', 'backcover'],

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
    "title": {
      "part1": "Here are some ideas we can do together",
      "part2": "to improve your branding"
    },
    "idea1": {
      "title": "Make your landing page stand out from the competition",
      "subtitle": "with animated vector illustrations"
    },
    "idea2": {
      "title": "Help you catch people's attention on your social networks",
      "subtitle": "by designing banners, animated GIFs or videos"
    },
    "idea3": {
      "title": "Design your own mascotte",
      "subtitle": "to humanize your site"
    },
    "idea4": {
      "title": "Draw your entire team",
      "subtitle": "in your favorite style"
    },
    "idea5": {
      "title": "Invent all the elements of your ebook",
      "subtitle": "to encourage people to download it"
    }
  },
  "fr": {
    "title": {
      "part1": "Voici quelques idées que nous pouvons faire ensemble",
      "part2": "pour améliorer votre image de marque"
    },
    "idea1": {
      "title": "Travailler à embellir votre homepage pour vous démarquer de la concurrence",
      "subtitle": "avec des illustrations vectorielles animées"
    },
    "idea2": {
      "title": "Vous aider à attirer l'attention sur vos réseaux sociaux",
      "subtitle": "en concevant des bannières, des GIF animés ou des vidéos"
    },
    "idea3": {
      "title": "Concevoir votre propre mascotte",
      "subtitle": "pour humaniser votre site"
    },
    "idea4": {
      "title": "Dessinez toute votre équipe",
      "subtitle": "dans votre style préféré"
    },
    "idea5": {
      "title": "Inventer tous les éléments visuels de votre ebook",
      "subtitle": "pour encourager les gens à le télécharger"
    }
  }
}
</i18n>
