<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <base-section>
    <template #left>
      <div data-aos="zoom-in">
        <base-heading alignment="center" class="max-w-6xl mx-auto mb-1" size="lg" tag="h2">
          <span class="flex flex-col">
            <span class="self-center mb-0.5">
              {{ $t('title.part1') }}
            </span>

            <base-gradient class="self-center" color="green">
              {{ $t('title.part2') }}
            </base-gradient>
          </span>
        </base-heading>
      </div>
    </template>

    <template #right>
      <div class="relative">
        <img
          :src="require('~/assets/images/landscapes/benefits-left.svg')"
          class="absolute top-0 left-0 hidden mt-10 ml-20 h-120 xl:inline-block"
          loading="lazy"
        />

        <div class="relative z-10 max-w-2xl mx-auto">
          <slot />

          <div
            class="
              p-10
              mb-4
              text-gray-900
              bg-white
              border border-gray-400
              rounded-md
              shadow-sm
              min-h-md
            "
          >
            <div
              v-for="(benefit, benefitIndex) of benefits"
              :key="benefitIndex"
              class="mb-8 -mt-2 last:mb-0"
            >
              <base-heading class="mb-4 ml-20 sm:ml-24" size="xs" tag="h3">
                {{ benefit.title }}
              </base-heading>

              <base-quote
                :author="benefit.author"
                :has-author-info="false"
                :margin="0"
                :reverse="false"
                background="gray"
              >
                {{ benefit.value }}
              </base-quote>

              <base-divider v-if="benefitIndex + 1 !== benefits.length" class="my-8" />
            </div>
          </div>

          <base-button
            :icon="['far', 'comment-alt-smile']"
            size="xl"
            full-width
            @click="$helpers.common.triggerChatbox()"
          >
            {{ $t('chatWithMe') }}
          </base-button>
        </div>

        <img
          :src="require('~/assets/images/landscapes/benefits-right.svg')"
          class="absolute top-0 right-0 hidden mt-10 mr-20 h-120 xl:inline-block"
          loading="lazy"
        />
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
    benefits() {
      return [
        {
          author: 'pricing',
          title: this.$t('benefits.benefit1.title'),
          value: this.$t('benefits.benefit1.value'),
        },
        {
          author: 'availability',
          title: this.$t('benefits.benefit2.title'),
          value: this.$t('benefits.benefit2.value'),
        },
        {
          author: 'updates',
          title: this.$t('benefits.benefit3.title'),
          value: this.$t('benefits.benefit3.value'),
        },
        {
          author: 'contact',
          title: this.$t('benefits.benefit4.title'),
          value: this.$t('benefits.benefit4.value'),
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
      "part1": "Interested in working together?",
      "part2": "Here are some common questions people ask me"
    },
    "benefits": {
      "benefit1": {
        "title": "How much do you charge?",
        "value": "I charge 300€ per day. To make sure there is no surprise for both of us, we define your needs before working together, and we figure out how much time it will take."
      },
      "benefit2": {
        "title": "Are you available right now?",
        "value": "Yes, I am available right now. Feel free to contact me to check my schedule."
      },
      "benefit3": {
        "title": "Will you be available for updates in the future?",
        "value": "Of course! You will always be able to contact me by email or here if you need some details to be adjusted."
      },
      "benefit4": {
        "title": "How can we contact you?",
        "value": "You can contact me by hitting the button below or by booking a call with me at the bottom of the page."
      }
    }
  },

  "fr": {
    "title": {
      "part1": "Intéressé pour travailler ensemble?",
      "part2": "Voici quelques questions courantes que les gens me posent"
    },
    "benefits": {
      "benefit1": {
        "title": "Quels sont vos tarifs ?",
        "value": "Je facture 300€ par jour. Pour être sûr qu'il n'y ait pas de surprise, nous définissons vos besoins avant de travailler ensemble et nous déterminons le temps que cela prendra."
      },
      "benefit2": {
        "title": "Êtes-vous disponible en ce moment ?",
        "value": "Oui, je suis disponible dès maintenant. N'hésitez pas à me contacter pour vérifier mon emploi du temps."
      },
      "benefit3": {
        "title": "Serez-vous disponible pour réaliser des mises à jour dans le futur ?",
        "value": "Bien sûr! Vous pourrez toujours me contacter par e-mail ou ici si vous avez besoin d'un ajustement de certains détails."
      },
      "benefit4": {
        "title": "Comment pouvons-nous vous contacter?",
        "value": "Vous pouvez me contacter en cliquant sur le bouton ci-dessous ou en réservant un appel avec moi au bas de la page."
      }
    }
  }
}
</i18n>
