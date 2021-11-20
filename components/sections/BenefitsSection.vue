<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <home-section>
    <template #left>
      <div data-aos="zoom-in">
        <base-heading alignment="center" class="max-w-6xl mx-auto mb-1" size="lg" tag="h2">
          <span class="flex flex-col">
            <span class="self-center mb-0.5">
              {{ titlePart1 ? titlePart1 : $t('title.part1') }}
            </span>

            <base-gradient class="self-center" color="pink">
              {{ titlePart2 ? titlePart2 : $t('title.part2') }}
            </base-gradient>
          </span>
        </base-heading>
      </div>
    </template>

    <template #right>
      <div class="relative">
        <img
          :src="require('~/assets/images/landscapes/left-city-japan.svg')"
          class="absolute top-0 left-0 hidden mt-4 ml-10 h-112 xl:inline-block"
          loading="lazy"
        />

        <div class="relative z-10 max-w-2xl mx-auto">
          <slot />

          <div
            class="p-10 mb-4 text-gray-900 bg-white border border-gray-400 rounded-md shadow-sm  min-h-md"
          >
            <div
              v-for="(benefit, benefitIndex) of benefits"
              :key="benefitIndex"
              class="mb-8 -mt-2 last:mb-0"
            >
              <base-heading alignment="center" class="mb-2" size="xs" tag="h3">
                {{ benefit.title }}
              </base-heading>

              <base-paragraph alignment="center" class="mb-6" size="2xs" uppercase>
                {{ benefit.subtitle }}
              </base-paragraph>

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

          <base-button :icon="['fad', 'medal']" size="xl" full-width>
            {{ $t('discoverOurPricing') }}
          </base-button>
        </div>

        <img
          :src="require('~/assets/images/landscapes/right-nature-fishing.svg')"
          class="absolute top-0 right-0 hidden mt-1 mr-10 h-112 xl:inline-block"
          loading="lazy"
        />
      </div>
    </template>
  </home-section>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {
  props: {
    titlePart1: {
      type: String,
      default: null,
    },
    titlePart2: {
      type: String,
      default: null,
    },
  },

  computed: {
    benefits() {
      return [
        {
          author: 'julien-le-coupanec',
          subtitle: this.$t('benefits.benefit1.subtitle'),
          title: this.$t('benefits.benefit1.title'),
          value: this.$t('benefits.benefit1.value'),
        },
        {
          author: 'anthony-peron',
          subtitle: this.$t('benefits.benefit2.subtitle'),
          title: this.$t('benefits.benefit2.title'),
          value: this.$t('benefits.benefit2.value'),
        },
        {
          author: 'nada-rifki',
          subtitle: this.$t('benefits.benefit3.subtitle'),
          title: this.$t('benefits.benefit3.title'),
          value: this.$t('benefits.benefit3.value'),
        },
        {
          author: 'power',
          subtitle: this.$t('benefits.benefit4.subtitle'),
          title: this.$t('benefits.benefit4.title'),
          value: this.$t('benefits.benefit4.value'),
        },
        {
          author: 'yoda',
          subtitle: this.$t('benefits.benefit5.subtitle'),
          title: this.$t('benefits.benefit5.title'),
          value: this.$t('benefits.benefit5.value'),
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
      "part1": "Still not convinced?",
      "part2": "Here is why we are different from others"
    },
    "benefits": {
      "benefit1": {
        "title": "Your prospects are automatically found for you",
        "subtitle": "(Which means that no browser extension is needed)",
        "value": "You can focus on the most important thing in sales: writing your messages, doing demos, and closing customers."
      },
      "benefit2": {
        "title": "All business emails are verified using multiple providers",
        "subtitle": "(because bounce rate id bad for your campaigns)",
        "value": "This tactic makes sure we have one of the best deliverability rates on the market."
      },
      "benefit3": {
        "title": "We can find email addresses behind a catch-all",
        "subtitle": "(Believe us, this was not easy to achieve)",
        "value": "50% of companies have a catch-all. Don’t exclude them from your potential customers just because your tool can't deal with them."
      },
      "benefit4": {
        "title": "We make sure prospects are working in the company",
        "subtitle": "(Many employees change companies every two to three years)",
        "value": "We have designed our own algorithms to ensure you will not send messages to people you should not focus on."
      },
      "benefit5": {
        "title": "Our database of companies is updated every week",
        "subtitle": "(We also remove companies that went out of business)",
        "value": "Do you need to target a specific technology? A given industry? For you… We are here!"
      }
    }
  },
  "es": {
    "title": {
      "part1": "¿Todavía no estás convencido?",
      "part2": "He aquí por qué somos diferentes a los demás"
    },
    "benefits": {
      "benefit1": {
        "title": "Sus clientes potenciales se encuentran automáticamente para usted",
        "subtitle": "(Lo que significa que no se necesita ninguna extensión del navegador)",
        "value": "Puede concentrarse en lo más importante en la venta: escribir sus mensajes, hacer demostraciones y cerrar clientes."
      },
      "benefit2": {
        "title": "Todos los correos electrónicos comerciales se verifican mediante varios proveedores",
        "subtitle": "(porque el ID de la tasa de rebote es malo para sus campañas)",
        "value": "Esta táctica asegura que tengamos una de las mejores tasas de entrega del mercado."
      },
      "benefit3": {
        "title": "Podemos encontrar direcciones de correo electrónico detrás de un catch-all",
        "subtitle": "(Créanos, esto no fue fácil de lograr)",
        "value": "El 50% de las empresas tienen un catch-all. No las excluya de sus clientes potenciales solo porque su herramienta no pueda manejarlos."
      },
      "benefit4": {
        "title": "Nos aseguramos de que los prospectos sigan trabajando dentro de la empresa",
        "subtitle": "(Muchos empleados cambian de empresa cada dos o tres años)",
        "value": "Hemos diseñado nuestros propios algoritmos para garantizar que no envíe mensajes a personas en las que no debería centrarse."
      },
      "benefit5": {
        "title": "Nuestra base de datos de empresas se actualiza cada semana",
        "subtitle": "(También eliminamos empresas que cerraron)",
        "value": "¿Necesita apuntar a una tecnología específica? ¿Una industria determinada? Para usted… ¡Estamos aquí!"
      }
    }
  },
  "fr": {
    "title": {
      "part1": "Toujours pas convaincu ?",
      "part2": "Voici pourquoi nous sommes différents des autres"
    },
    "benefits": {
      "benefit1": {
        "title": "Vos prospects sont automatiquement trouvés pour vous",
        "subtitle": "(Ce qui signifie qu'aucune extension de navigateur n'est nécessaire)",
        "value": "Vous pouvez vous concentrer sur la chose la plus importante dans la vente : rédiger vos messages, faire des démos et conclure des clients."
      },
      "benefit2": {
        "title": "Tous les e-mails professionnels sont vérifiés à l'aide de plusieurs fournisseurs",
        "subtitle": "(car le taux de rebond est mauvais pour vos campagnes)",
        "value": "Cette tactique nous permet d'avoir l'un des meilleurs taux de délivrabilité du marché."
      },
      "benefit3": {
        "title": "Nous pouvons trouver des adresses e-mail derrière un catch-all",
        "subtitle": "(Croyez-nous, ce n'était pas facile à réaliser)",
        "value": "50% des entreprises ont un catch-all. Ne les excluez pas de vos clients potentiels simplement parce que votre outil ne peut pas les traiter."
      },
      "benefit4": {
        "title": "Nous nous assurons que les prospects travaillent toujours au sein de l'entreprise",
        "subtitle": "(Beaucoup d'employés changent d'entreprises tous les deux à trois ans)",
        "value": "Nous avons conçu nos propres algorithmes pour garantir que vous n'enverrez pas de messages à des personnes sur lesquelles vous ne devriez pas vous concentrer."
      },
      "benefit5": {
        "title": "Notre base de données d'entreprises est mise à jour chaque semaine",
        "subtitle": "(Nous supprimons également les entreprises qui ont fait faillite)",
        "value": "Vous avez besoin de cibler une technologie spécifique ? Une industrie donnée ? Pour vous… Nous sommes là !"
      }
    }
  }
}
</i18n>
