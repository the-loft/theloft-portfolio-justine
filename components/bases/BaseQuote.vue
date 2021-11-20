<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <div
    :class="{
      //--> GENERAL <--

      'flex-row-reverse': computedReverse,

      // --> MARGINS <--

      'my-10': margin === 10,
    }"
    class="flex justify-center w-full text-base quote"
  >
    <component
      :is="author"
      v-if="authorInfo"
      :class="{
        // --> GENERAL <--

        'w-12 h-12 sm:w-16 sm:h-16': !authorInfo.width,
        'w-16 h-12 sm:w-18 sm:h-18  quote__avatar--width-lg': authorInfo.width === 'lg',
        'w-20 h-20 sm:w-24 sm:h-24 quote__avatar--width-xl': authorInfo.width === 'xl',
        'ml-4': computedReverse,
        'mr-4': !computedReverse,
      }"
      class="flex-initial"
    />

    <div class="flex flex-col flex-1 normal-case">
      <div
        :class="{
          // --> BACKGROUNDS <--

          'bg-gray-100 border shadow-sm': background === 'gray',
          'bg-white shadow': background === 'white',
        }"
        class="px-5 py-4 text-lg leading-7 text-left text-gray-900 select-text rounded-2xl"
      >
        <div v-if="translatedContent" v-html="translatedContent"></div>

        <slot v-if="hasSlot" />
      </div>

      <span
        v-if="authorInfo && hasAuthorInfo"
        :class="{
          // --> GENERAL <--

          'cursor-pointer': authorInfo.url,
          'pointer-events-none': !authorInfo.url,
          'self-end text-left': computedReverse,
          'self-start text-right': !computedReverse,
        }"
        class="flex items-center mt-4 text-gray-800 hover:text-black group"
        @click="onOpenUrl"
      >
        <base-avatar
          v-if="authorInfo.company"
          :shadow="false"
          :src="
            require(`~/assets/images/components/common/CompanyAvatar/${authorInfo.company}.png`)
          "
          :size="5"
          background="transparent"
          class="float-left mr-2"
          rounded="base"
        />

        <span>{{ authorInfo.label }}</span>
      </span>
    </div>
  </div>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// Components
import AnthonyPeron from '@/assets/images/components/playbook/PlaybookQuote/anthony-peron.svg?inline'
import BriceMaurin from '@/assets/images/components/playbook/PlaybookQuote/brice-maurin.svg?inline'
import DenisCohen from '@/assets/images/components/playbook/PlaybookQuote/denis-cohen.svg?inline'
import JulienLeCoupanec from '@/assets/images/components/playbook/PlaybookQuote/julien-le-coupanec.svg?inline'
import NadaRifki from '@/assets/images/components/playbook/PlaybookQuote/nada-rifki.svg?inline'
import Power from '@/assets/images/components/playbook/PlaybookQuote/power.svg?inline'
import Yoda from '@/assets/images/components/playbook/PlaybookQuote/yoda.svg?inline'

export default {
  components: {
    AnthonyPeron,
    BriceMaurin,
    DenisCohen,
    JulienLeCoupanec,
    NadaRifki,
    Power,
    Yoda,
  },

  props: {
    author: {
      type: String,
      required: true,
      validator(x) {
        return [
          'anthony-peron',
          'brice-maurin',
          'dharmesh-shah',
          'denis-cohen',
          'julien-le-coupanec',
          'nada-rifki',
          'power',
          'timo-rein',
          'yoda',
        ].includes(x)
      },
    },
    background: {
      type: String,
      default: 'white',
      validator(x) {
        return ['gray', 'white'].includes(x)
      },
    },
    hasAuthorInfo: {
      type: Boolean,
      default: true,
    },
    hasSlot: {
      type: Boolean,
      default: false,
    },
    margin: {
      type: Number,
      default: 10,
    },
    reverse: {
      type: Boolean,
      default: null,
    },
  },

  computed: {
    authorInfo() {
      switch (this.author) {
        case 'anthony-peron':
          return {
            label: 'Anthony Peron, Luxury Retail Expert at LVMH',
            url: 'https://www.prospectwith.com/',
          }

        case 'brice-maurin':
          return {
            company: 'la-growth-machine',
            label: 'Brice Maurin, Founder at La Growth Machine',
            url: 'https://lagrowthmachine.com/',
          }

        case 'dharmesh-shah':
          return {
            company: 'hubspot',
            label: 'Dharmesh Shah, Founder at Hubspot',
            url: 'https://www.hubspot.com/',
          }

        case 'denis-cohen':
          return {
            company: 'dropcontact',
            label: 'Denis Cohen, Founder at Dropcontact',
            url: 'https://en.dropcontact.io/',
          }

        case 'julien-le-coupanec':
          return {
            company: 'prospectwith',
            label: 'Julien Le Coupanec, Founder at ProspectWith',
            url: 'https://www.prospectwith.com/',
          }

        case 'nada-rifki':
          return {
            company: 'prospectwith',
            label: 'Nada Rifki, Advisor at ProspectWith',
            url: 'https://www.prospectwith.com/',
            width: 'lg',
          }

        case 'power':
          return {
            company: 'prospectwith',
            label: 'Power, A.I. Assistant at ProspectWith',
            url: 'https://www.prospectwith.com/',
          }

        case 'timo-rein':
          return {
            company: 'pipedrive',
            label: 'Timo Rein, Founder at Pipedrive',
            url: 'https://www.pipedrive.com/',
          }

        case 'yoda':
          return {
            label: 'Yoda, The Sales Master',
            url: 'https://www.youtube.com/watch?v=BQ4yd2W50No',
            width: 'xl',
          }

        default:
          return null
      }
    },

    computedReverse() {
      return this.reverse !== null ? this.reverse : this.author !== 'julien-le-coupanec'
    },

    translatedContent() {
      let content = this.$slots.default[0].text

      if (content && content.includes('---')) {
        const startPosition = content.indexOf(`---${this.$locale}\n`) + 6
        const endPosition = content.indexOf('---', startPosition)

        content = content
          .substring(startPosition, endPosition > 0 ? endPosition : content.length)
          .trim()
      }

      return content
    },
  },

  methods: {
    // --> EVENT LISTENERS <--

    onOpenUrl() {
      this.$helpers.common.openLink(this.authorInfo.url)
    },
  },
}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
$c: '.quote';

#{$c} {
  #{$c}__avatar {
    &--width-xl {
      margin-top: -20px;
    }
  }
}
</style>
