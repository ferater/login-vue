<template>
  <q-layout view="lHh Lpr lFf">
    <tool-bar @leftDrawerOpen="leftDrawerOpen = !leftDrawerOpen"></tool-bar>
    <div class="page-items">
      <q-space />
      <bread-crumbs></bread-crumbs>
    </div>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions } from 'vuex';
import EssentialLink from 'components/EssentialLink';
import ToolBar from './components/ToolBar';
import BreadCrumbs from './components/BreadCrumbs';

export default {
  name: 'MainLayout',

  components: {
    EssentialLink,
    ToolBar,
    BreadCrumbs,
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev',
        },
      ],
    };
  },
  methods: {
    ...mapActions('auth', {
      logOut: 'logOut',
    }),
  },
};
</script>
