<template>
  <q-page-container>
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="$emit('leftDrawerOpen')"
        />
        <q-input
          rounded
          outlined
          dense
          class="q-ml-lg toolbar-search"
          bg-color="white"
          v-model="search"
          :placeholder="$t('page.search')"
        >
          <template slot="prepend">
            <q-icon name="search" v-if="search === ''" />
            <q-icon
              @click="search = ''"
              class="cursor-pointer"
              name="clear"
              v-else
            />
          </template>
        </q-input>
        <q-toolbar-title>
          <!-- Quasar App -->
        </q-toolbar-title>

        <div class="q-pl-md q-gutter-sm row no-wrap items-center">
          <lang-select></lang-select>
          <notifications></notifications>
          <user-menu></user-menu>
        </div>
      </q-toolbar>
    </q-header>
  </q-page-container>
</template>

<script>
import UserMenu from './UserMenu';
import Notifications from './Notifications';
import LangSelect from './LangSelect';

export default {
  name: 'ToolBarComponent',
  components: { UserMenu, Notifications, LangSelect },
  data() {
    return {
      search: '',
    };
  },
};
</script>
