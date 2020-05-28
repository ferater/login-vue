<template>
  <q-page padding>
    {{ $can() }}
    <q-btn
      color="white"
      text-color="black"
      label="Get User"
      @click="getAuthUser"
    />
    <q-space />
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
  },
  methods: {
    ...mapActions('auth', {
      getAuthUser: 'getAuthUser',
    }),
  },
};
</script>
