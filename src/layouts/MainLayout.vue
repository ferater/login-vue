<template>
  <q-layout view="lHh Lpr lFf">
    <tool-bar @leftDrawerOpen="leftDrawerOpen = !leftDrawerOpen"></tool-bar>
    <div class="page-items">
      <q-space />
      <bread-crumbs></bread-crumbs>
    </div>
    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.name"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container class="page-container">
      <router-view />
      <!--  Sidenav    -->
      <div class="sidenav" v-if="$q.screen.gt.sm">
        <ul class="list-unstyled">
          <side-bar v-for="link in essentialLinks" :key="link.name" v-bind="link"/>
        </ul>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions } from 'vuex';
import SideBar from 'components/SideBar';
import routes from '../router/routes';
import ToolBar from './components/ToolBar';
import BreadCrumbs from './components/BreadCrumbs';

export default {
  name: 'MainLayout',

  components: {
    SideBar,
    ToolBar,
    BreadCrumbs,
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: routes[1].children,
    };
  },
  methods: {
    ...mapActions('auth', {
      logOut: 'logOut',
    }),
  },
};
</script>
