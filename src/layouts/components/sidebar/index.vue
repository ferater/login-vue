<template>
  <div class="sidenav" v-if="$q.screen.gt.sm">
    <ul class="list-unstyled">
      <side-bar-item v-for="link in routes" :key="link.name" v-bind="link" />
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SideBarItem from './SideBarItem';

export default {
  name: 'SideBar',
  components: {
    SideBarItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState('app', ['routes']),
  },
};
</script>
