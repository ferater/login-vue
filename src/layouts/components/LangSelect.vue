<!-- NotificationMenu -->
<template>
  <div class="q-pa-sm">
    <q-btn round dense flat icon="las la-globe-europe">
      <q-tooltip
        transition-show="scale"
        transition-hide="scale"
        :hide-delay="150"
        :offset="[10, 10]"
        content-class="tooltip-info"
        >{{ $t("langSelectMenu.langSelectToolTip") }}</q-tooltip
      >
      <q-menu
        anchor="bottom middle"
        self="top middle"
        content-style="min-width: 150px"
      >
        <q-list bordered class="rounded-borders" style="max-width: 150px">
          <q-item-label header>{{
            $t("langSelectMenu.langSelectToolTip")
          }}</q-item-label>
          <q-item
            clickable
            dense
            v-for="lang in langOptions"
            :key="lang.value"
            @click.prevent="changeLanguage(lang.value)"
            v-close-popup
          >
            <q-item-section avatar>
              <q-avatar size="32px">
                <img :src="`statics/flags/${lang.value}.png`" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label lines="1">{{ lang.label }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator inset="item" />
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
export default {
  name: 'MotificationsMenuComponent',
  data() {
    return {
      lang: this.$i18n.locale,
      langOptions: [
        { value: 'tr-tr', label: 'Türkçe' },
        { value: 'en-us', label: 'English' },
      ],
    };
  },
  methods: {
    changeLanguage(lang) {
      this.lang = lang;
    },
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>
