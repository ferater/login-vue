<template>
  <q-page-container>
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="lab la-ubuntu"
          aria-label="Menu"
          @click="$emit('leftDrawerOpen')"
        />

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
    return {};
  },
};
</script>
