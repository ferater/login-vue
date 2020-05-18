<!-- LangSelectMenu -->
<template>
  <div class="q-pa-sm">
    <q-btn round dense flat color="white" icon="las la-globe-europe">
      <q-tooltip
        transition-show="scale"
        transition-hide="scale"
        :hide-delay="150"
        :offset="[10, 10]"
        content-class="tooltip-info"
        >{{ $t('langSelectMenu.langSelectToolTip') }}</q-tooltip
      >
      <q-menu
        anchor="bottom middle"
        self="top middle"
        content-style="min-width: 180px"
      >
        <q-list style="max-width: 180px">
          <q-item-label header>{{ $t('langSelectMenu.langSelectToolTip') }}</q-item-label>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar size="24px">
                <img src="statics/flags/turkey.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Türkçe</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar size="24px">
                <img src="statics/flags/usa.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">İngilizce (USA)</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>

export default {
  name: 'LangSelectMenuComponent',
  data() {
    return {};
  },
};
</script>
