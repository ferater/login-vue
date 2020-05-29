<template>
  <q-page padding>
    <q-btn
      v-if="$can(['view-users'])"
      color="white"
      text-color="black"
      :label="$t('pg.getUser')"
      :loading="isBtnLoading"
      @click="getAuthUser"
    />
    <br />
    <br />
    <q-editor v-model="userFullName" min-height="5rem" />
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'IndexPage',
  data() {
    return {};
  },
  computed: {
    ...mapState('auth', ['authUser']),
    userFullName() {
      return `Kullanıcı Adı :${this.authUser.name} E-Posta Adresi :${this.authUser.email}`;
    },
    isBtnLoading() {
      return this.$store.state.app.isBtnLoading;
    },
  },
  methods: {
    ...mapActions('auth', {
      getAuthUser: 'getAuthUser',
    }),
  },
};
</script>
