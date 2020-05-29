<template>
  <div class="sidenav" v-if="$q.screen.gt.sm">
    <ul class="list-unstyled">
      <side-bar-item v-for="link in routes" :key="link.name" v-bind="link" />
    </ul>
    <div class="sidenav-bottom">
      <q-btn flat icon="las la-cog" size="10px" @click="options = !options" />
    </div>
    <!-- <div class="options-container">
      <div class="options" :class="{ open: options }">
      sd
    </div>
    </div> -->
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
    return {
      options: false,
    };
  },
  computed: {
    ...mapState('app', ['routes']),
  },
  methods: {},
};
</script>
