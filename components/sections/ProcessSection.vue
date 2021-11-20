<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <base-section>
    <template #left>
      <div data-aos="zoom-in">
        <base-heading alignment="center" size="lg" class="mb-6 sm:mb-8" tag="h2">
          <span class="flex flex-col">
            <span class="self-center">{{ $t('title.part1') }}</span>

            <base-gradient class="self-center" color="green">
              {{ $t('title.part2') }}
            </base-gradient>
          </span>
        </base-heading>

        <div class="relative h-4 xl:h-8">
          <div
            class="
              hidden
              xl:block
              xl:absolute
              xl:top-5
              xl:h-20
              xl:w-0.5
              xl:-translate-x-1/2
              xl:bg-gray-400
              xl:left-1/2
            "
          ></div>
        </div>
      </div>
    </template>

    <template #right>
      <div class="relative">
        <base-section
          v-for="(step, stepIndex) in steps"
          :key="stepIndex"
          :class="{ 'mb-16': stepIndex + 1 !== steps.length }"
          :reverse="stepIndex % 2 === 0"
          class="relative z-10"
          direction="horizontal"
        >
          <template #left>
            <div
              :class="{
                // --> GENERAL <--

                'xl:ml-10': stepIndex % 2 === 0,
                'xl:mr-14': stepIndex % 2 === 1,
              }"
              class="xl:flex xl:flex-col xl:h-full xl:justify-center"
              data-aos="zoom-in"
            >
              <base-heading
                :alignment="$mqXl ? (stepIndex % 2 === 0 ? 'left' : 'right') : 'center'"
                class="mb-1 xl:-mt-4"
                tag="h2"
              >
                <div
                  :class="{
                    'xl:justify-start': stepIndex % 2 === 0,
                    'xl:justify-end': stepIndex % 2 === 1,
                  }"
                  class="flex items-center justify-center"
                >
                  <base-number
                    :number="stepIndex + 1"
                    :size="$mqSm ? 'lg' : 'sm'"
                    class="mr-2 xl:mr-4"
                    has-border
                  />

                  {{ $t(`step${stepIndex + 1}.title`) }}
                </div>
              </base-heading>

              <base-heading
                :alignment="$mqXl ? (stepIndex % 2 === 0 ? 'left' : 'right') : 'center'"
                tag="h3"
              >
                <base-gradient :color="step.color">
                  {{ $t(`step${stepIndex + 1}.subtitle`) }}
                </base-gradient>
              </base-heading>
            </div>
          </template>

          <template #right>
            <div class="relative xl:w-152">
              <base-screen
                :class="{
                  // --> GENERAL <--

                  'xl:ml-20': stepIndex % 2 === 0,
                  'xl:-ml-16': stepIndex % 2 === 1,
                }"
                :thumbnail="step.thumbnail"
                :power="step.power"
                class="relative z-10 max-w-xl mx-auto mt-10 xl:mt-0"
              />
            </div>
          </template>
        </base-section>

        <div
          class="
            hidden
            xl:block
            xl:absolute
            xl:top-0
            xl:bottom-0
            xl:w-0.5
            xl:-translate-x-1/2
            xl:bg-gray-400
            xl:left-1/2
          "
        ></div>
      </div>
    </template>
  </base-section>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  computed: {
    steps() {
      return [
        {
          color: 'red',
          power: 'file',
          thumbnail: {
            src: require('~/assets/images/components/sections/ProcessSection/step1.jpg'),
          },
        },
        {
          color: 'orange',
          power: 'file',
          thumbnail: {
            src: require('~/assets/images/components/sections/ProcessSection/step2.jpg'),
          },
        },
        {
          color: 'green',
          power: 'file',
          thumbnail: {
            src: require('~/assets/images/components/sections/ProcessSection/step3.jpg'),
          },
        },
      ]
    },
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
      "part1": "Discover my work process",
      "part2": "in less than 1 minute"
    },

    "step1": {
      "title": "I sketch my ideas on paper",
      "subtitle": "& I send you a Red Pen link to collect all your feedback"
    },

    "step2": {
      "title": "I design on Illustrator",
      "subtitle": "& I get back to you with another Red Pen link to apply all your adjustments"
    },

    "step3": {
      "title": "I animate with AE & Lottie",
      "subtitle": "& I give you a LottieFiles link so we can improve each detail"
    }
  },
  "fr": {
    "title": {
      "part1": "Découvrez ma méthode de travail",
      "part2": "en moins de 1 minute"
    },

    "step1": {
      "title": "Je dessine mes idées sur papier",
      "subtitle": "& je vous envoie un lien Red Pen pour collecter tout votre feedback"
    },

    "step2": {
      "title": "Je conçois sur Illustrator",
      "subtitle": "& je reviens vers vous avec un lien Red Pen pour appliquer tous vos ajustements"
    },

    "step3": {
      "title": "J'anime avec AE & Lottie",
      "subtitle": "& je vous donne un lien LottieFiles afin que nous puissions améliorer chaque détail"
    }
  }
}
</i18n>
