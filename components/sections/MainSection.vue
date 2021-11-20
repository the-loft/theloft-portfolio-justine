<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template>
  <base-section>
    <template #left>
      <div>
        <base-heading alignment="center" size="lg" tag="h1" class="mb-6 sm:mb-8">
          <span class="flex flex-col">
            <span class="self-center mb-3">{{ $t('title.part1') }}</span>

            <base-gradient class="self-center" color="teal">
              <div class="mb-2">{{ $t('title.part2') }}</div>

              <div>{{ $t('title.part3') }}</div>
            </base-gradient>
          </span>
        </base-heading>

        <base-button
          :icon="['far', 'comment-alt-smile']"
          size="xl"
          @click="$helpers.common.triggerChatbox()"
        >
          {{ $t('chatWithMe') }}
        </base-button>
      </div>
    </template>

    <template #right>
      <div></div>
    </template>
  </base-section>
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
export default {}
</script>

<!-- *************************************************************************
     I18N
     ************************************************************************* -->

<i18n lang="json">
{
  "en": {
    "title": {
      "part1": "Hello, I'm Justine!",
      "part2": "I can improve the identity & branding",
      "part3": "of your SaaS or eCommerce in 30 days"
    }
  },
  "fr": {
    "title": {
      "part1": "",
      "part2": "",
      "part3": ""
    }
  }
}
</i18n>
