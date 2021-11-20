<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <home-section>
    <template #left>
      <div data-aos="zoom-in">
        <base-heading alignment="center" size="xl" class="mb-6 sm:mb-8" tag="h2">
          <span class="flex flex-col">
            <span class="self-center">{{ $t('title.part1') }}</span>

            <base-gradient class="self-center" color="green">
              {{ $t('title.part2') }}
            </base-gradient>
          </span>
        </base-heading>

        <base-button
          :icon="['far', 'calendar-alt']"
          :size="$mqSm ? 'xl' : 'lg'"
          @click="$helpers.common.bookDemo"
        >
          {{ $t('bookDemo') }}
        </base-button>

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
        <home-section
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
                size="lg"
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
                class="mb-2 xl:mb-4"
                size="lg"
                tag="h3"
              >
                <base-gradient :color="step.color">
                  {{
                    $t(`step${stepIndex + 1}.subtitle`, {
                      count: Math.ceil(companiesCount / (1 * 1000 * 1000)),
                    })
                  }}
                </base-gradient>
              </base-heading>

              <base-paragraph
                :alignment="$mqXl ? (stepIndex % 2 === 0 ? 'left' : 'right') : 'center'"
                size="lg"
              >
                {{ $t(`step${stepIndex + 1}.description`) }}
              </base-paragraph>

              <div
                v-if="step.features && step.features.length > 0"
                :class="{ 'xl:items-end': stepIndex % 2 === 1 && $mqXl }"
                class="hidden  lg:mt-4 lg:flex lg:items-center lg:justify-center xl:flex-col xl:mt-6 xl:items-start"
              >
                <feature-details
                  v-for="(feature, featureIndex) in step.features"
                  :key="featureIndex"
                  :icon="feature.icon"
                  :label="feature.label"
                  class="flex-initial mr-8 font-medium last:mr-0 xl:mr-0 xl:mb-3 xl:last:mb-0"
                  size="xl"
                />
              </div>

              <div
                :class="{
                  // --> GENERAL <--

                  'xl:text-left': stepIndex % 2 === 0,
                  'xl:text-right': stepIndex % 2 === 1,
                }"
              >
                <base-link v-if="step.link" :to="step.link.to" class="mt-4 xl:mt-5" size="xl">
                  {{ step.link.label }}
                </base-link>
              </div>
            </div>
          </template>

          <template #right>
            <div class="relative xl:w-152">
              <screen-preview
                :class="{
                  // --> GENERAL <--

                  'xl:ml-20': stepIndex % 2 === 0,
                  'xl:-ml-16': stepIndex % 2 === 1,
                }"
                :thumbnail="step.thumbnail"
                :power="step.power"
                :video="step.video"
                class="relative z-10 max-w-xl mx-auto mt-10 xl:mt-0"
              />
            </div>
          </template>
        </home-section>

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
  </home-section>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// NPM
import { mapGetters } from 'vuex'

export default {
  computed: {
    steps() {
      return [
        {
          color: 'red',
          power: 'explorer',
          features: [
            {
              icon: this.$helpers.icon.getIconForModel('industry', 'far'),
              label:
                this.$filters.numeralRounded(this.industriesCount, true) +
                ' ' +
                this.$tc('industry', this.industriesCount),
            },
            {
              icon: this.$helpers.icon.getIconForModel('country', 'far'),
              label:
                this.$filters.numeralRounded(this.locationsCount, true) +
                ' ' +
                this.$tc('location', this.locationsCount),
            },
            {
              icon: this.$helpers.icon.getIconForModel('technology', 'far'),
              label:
                this.$filters.numeralRounded(this.technologiesCount, true) +
                ' ' +
                this.$tc('technology', this.technologiesCount),
            },
          ],
          link: {
            label: this.$t('browseCompanies'),
            to: {
              name: 'companies-search',
            },
          },
          video: {
            autoplay: true,
            loop: true,
            muted: true,
            source: '/videos/2020-09-15-companies-directory',
          },
        },
        {
          color: 'orange',
          power: 'file',
          features: [
            {
              icon: this.$helpers.icon.getIconForAttribute('email', 'far'),
              label: this.$t('step2.features.feature1'),
            },
            {
              icon: this.$helpers.icon.getIconForAttribute('jobTitle', 'far'),
              label: this.$t('step2.features.feature2'),
            },
          ],
          link: {
            label: this.$t('boostYourProspection'),
            to: {
              name: 'auth-register',
            },
          },
          video: {
            autoplay: true,
            loop: true,
            muted: true,
            source: '/videos/2021-01-05-decision-makers',
          },
        },
        {
          color: 'pink',
          power: 'king',
          features: [
            {
              icon: this.$helpers.icon.getIconForModel('integration', 'far'),
              label: this.$t('step3.features.feature1'),
            },
          ],
          link: {
            label: this.$t('browseIntegrations'),
            to: {
              name: 'integrations-directory',
            },
          },
          video: {
            autoplay: true,
            loop: true,
            muted: true,
            source: '/videos/2021-06-05-integrations-directory',
          },
        },
      ]
    },

    ...mapGetters({
      companiesCount: 'Platform/companiesCount',
      industriesCount: 'Platform/industriesCount',
      locationsCount: 'Platform/locationsCount',
      technologiesCount: 'Platform/technologiesCount',
    }),
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
      "part1": "Discover how it works",
      "part2": "in less than 10 seconds"
    },

    "step1": {
      "title": "Import or segment",
      "subtitle": "{count} million companies",
      "description": "Narrow down your search with thousands of filters in order to hit your ideal company profile."
    },

    "step2": {
      "title": "We identify",
      "subtitle": "the prospects for you automatically",
      "description": "CEOs, designers or dog food tasters. No matter who you target, we’ll get them for you.",
      "features": {
        "feature1": "Verified business emails",
        "feature2": "Filter by job titles, country etc."
      }
    },

    "step3": {
      "title": "We synchronize",
      "subtitle": "with your favorite tools",
      "description": "Synchronize your lists of prospects and companies with the tools you already use.",
      "features": {
        "feature1": "New integrations every month"
      }
    }
  },
  "fr": {
    "title": {
      "part1": "Découvrez comment cela fonctionne",
      "part2": "en moins de 10 secondes"
    },

    "step1": {
      "title": "Importez ou ciblez",
      "subtitle": "{count} millions d'entreprises",
      "description": "Affinez votre recherche avec des milliers de filtres afin d'atteindre votre profil d'entreprise idéal."
    },

    "step2": {
      "title": "Nous identifions",
      "subtitle": "les prospects automatiquement",
      "description": "PDG, designers ou dégustateurs de nourriture pour chiens. Peu importe qui vous ciblez, nous les trouverons pour vous.",
      "features": {
        "feature1": "E-mails professionnels vérifiés",
        "feature2": "Filtrer par intitulés de poste, pays, etc."
      }
    },

    "step3": {
      "title": "Nous synchronisons",
      "subtitle": "avec vos outils préférés",
      "description": "Synchronisez vos listes de prospects et d'entreprises avec les outils que vous utilisez déjà.",
      "features": {
        "feature1": "De nouvelles intégrations chaque mois"
      }
    }
  }
}
</i18n>
