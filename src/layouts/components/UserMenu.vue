      <!-- UserMenu -->
<template>
  <div class="q-pa-sm">
    <q-btn round dense size="md">
        <q-avatar size="36px">
        <img src="statics/avatars/avatar-2.png">
      </q-avatar>
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">{{ $t('userMenu.settings') }}</div>
            <q-toggle v-model="mobileData" label="Use Mobile Data" />
            <q-toggle v-model="bluetooth" label="Bluetooth" />
          </div>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar size="72px">
              <img src="statics/avatars/avatar-2.png">
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">{{ authUser.name }}</div>

            <q-btn
              color="primary"
              :label="$t('userMenu.logOut')"
              push
              size="sm"
              @click.prevent="logOut"
            />
          </div>
        </div>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'UserMenuComponent',
  data() {
    return {
      mobileData: true,
      bluetooth: false,
    };
  },
  computed: {
    ...mapState('auth', ['authUser']),
  },
  methods: {
    ...mapActions('auth', {
      getAuthUser: 'getAuthUser',
      logOut: 'logOut',
    }),
  },
  created() {
    this.getAuthUser();
  },
};
</script>
