<template>
  <!-- ...... -->
  <q-select
    v-model="lang"
    :options="langOptions"
    :label="$t('langSelectMenu.langSelectToolTip')"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 95px"
  />
  <!-- ...... -->
</template>

<script>
export default {
  data() {
    return {
      lang: this.$i18n.locale,
      langOptions: [
        { value: 'tr-tr', label: 'Türkçe' },
        { value: 'en-us', label: 'English' },
      ],
    };
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>
