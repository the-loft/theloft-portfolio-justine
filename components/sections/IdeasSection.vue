<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <base-section>
    <template #right>
      <!-- IDEA: LANDING -->

      <div class="mb-20">
        <div class="mb-12" data-aos="zoom-in">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h2">
            {{ $t('landing.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="blue">
              {{ $t('landing.subtitle') }}
            </base-gradient>
          </base-heading>
        </div>

        <div class="grid justify-center max-w-4xl grid-cols-1 gap-10 mx-auto sm:grid-cols-2">
          <habits-animation />

          <tasks-animation />
        </div>
      </div>

      <!-- IDEA: MASCOTTE -->

      <div class="mb-20">
        <div class="mb-12" data-aos="zoom-in">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h2">
            {{ $t('mascotte.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="blue">
              {{ $t('mascotte.subtitle') }}
            </base-gradient>
          </base-heading>
        </div>

        <div class="flex flex-wrap justify-center max-w-4xl mx-auto">
          <img
            v-for="power in powers"
            :key="power"
            :src="require(`~/assets/images/components/sections/IdeasSection/powers/${power}.svg`)"
            class="flex-initial h-20 m-4 md:h-24"
          />
        </div>
      </div>

      <!-- IDEA: TEAM -->

      <div class="mb-20">
        <div class="mb-12" data-aos="zoom-in">
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

      <!-- IDEA: SOCIAL NETWORKS -->

      <div class="mb-20">
        <div class="mb-12" data-aos="zoom-in">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h2">
            {{ $t('socialNetworks.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="blue">
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

      <!-- IDEA: GIFS -->

      <div class="mb-20">
        <div class="mb-12" data-aos="zoom-in">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h2">
            {{ $t('gifs.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="blue">
              {{ $t('gifs.subtitle') }}
            </base-gradient>
          </base-heading>
        </div>

        <div class="grid justify-center max-w-3xl grid-cols-1 gap-6 mx-auto sm:grid-cols-3">
          <img
            v-for="gif in gifs"
            :key="gif"
            :alt="`${gif}'s loading image`"
            :src="require(`~/assets/images/components/sections/IdeasSection/gifs/${gif}.gif`)"
            class="h-48 mx-auto md:h-56"
          />
        </div>
      </div>

      <!-- IDEA: 3D -->

      <!-- <div class="mb-20">
        <div class="mb-12" data-aos="zoom-in">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h2">
            {{ $t('3D.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="blue">
              {{ $t('3D.subtitle') }}
            </base-gradient>
          </base-heading>
        </div>
      </div> -->

      <!-- IDEA: SPINNERS -->

      <div class="mb-20">
        <div class="mb-12" data-aos="zoom-in">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h2">
            {{ $t('spinners.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="blue">
              {{ $t('spinners.subtitle') }}
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

      <!-- IDEA: LOGOS -->

      <div class="mb-20">
        <div class="mb-12" data-aos="zoom-in">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h2">
            {{ $t('logos.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="blue">
              {{ $t('logos.subtitle') }}
            </base-gradient>
          </base-heading>
        </div>

        <div
          class="grid justify-center max-w-4xl grid-cols-1 gap-10 mx-auto md:grid-cols-3 md:gap-12"
        >
          <img
            v-for="logo in logos"
            :key="logo"
            :src="require(`~/assets/images/components/sections/IdeasSection/logos/${logo}.svg`)"
            class="h-16 mx-auto md:h-24"
          />
        </div>
      </div>

      <!-- IDEA: EBOOK -->

      <div>
        <div class="mb-12" data-aos="zoom-in">
          <base-heading alignment="center" class="mb-1 xl:-mt-4" tag="h2">
            {{ $t('ebook.title') }}
          </base-heading>

          <base-heading alignment="center" tag="h4">
            <base-gradient color="blue">
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

    landingPages: ['resilienceclub'],
    banners: ['prospectwith', 'resilienceclub'],
    gifs: ['enveloppe', 'robotVille', 'main'],

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
    logos: ['logo-ECPC', 'logo-EGC', 'logo-interagro'],

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
    "logos": {
      "title": "I can design your logo",
      "subtitle": "to develop your brand image"
    },
    "mascotte": {
      "title": "I can design your own mascotte",
      "subtitle": "to humanize your site"
    },
    "team": {
      "title": "I can draw your entire team",
      "subtitle": "in your favorite style"
    },
    "spinners": {
      "title": "I can animate your logo",
      "subtitle": "so you can use it as a loading element"
    },
    "socialNetworks": {
      "title": "I can help you catch people's attention on your social networks",
      "subtitle": "by designing banners"
    },
    "3D": {
      "title": "I can model 3D objects and animate them",
      "subtitle": "for videos and websites"
    },
    "gifs": {
      "title": "I can make animated badges",
      "subtitle": "to bring your app to life"
    },
    "ebook": {
      "title": "I can invent all the elements of your ebook",
      "subtitle": "to encourage people to download it"
    }
  },
  "fr": {
    "landing": {
      "title": "Je peux embellir votre homepage",
      "subtitle": "avec des illustrations vectorielles animées"
    },
    "logos": {
      "title": "Je peux concevoir ou modifier votre logo",
      "subtitle": "pour développer votre image de marque"
    },
    "mascotte": {
      "title": "Je peux concevoir votre propre mascotte",
      "subtitle": "pour humaniser votre site"
    },
    "team": {
      "title": "Je peux dessiner toute votre équipe",
      "subtitle": "dans votre style préféré"
    },
    "spinners": {
      "title": "Je peux animer votre logo",
      "subtitle": "pour que vous puissiez l'utiliser comme élément de chargement"
    },
    "socialNetworks": {
      "title": "Je peux vous aider à attirer l'attention sur vos réseaux sociaux",
      "subtitle": "en concevant des bannières"
    },
    "3D": {
      "title": "Je peux modéliser des objets 3D et les animer",
      "subtitle": "pour des vidéos et des sites web"
    },
    "gifs": {
      "title": "Je peux réaliser des badges animés",
      "subtitle": "pour donner vie à votre application"
    },
    "ebook": {
      "title": "Je peux inventer tous les éléments visuels de votre ebook",
      "subtitle": "pour encourager les gens à le télécharger"
    }
  }
}
</i18n>
