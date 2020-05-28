<template>
  <li :class="{ active: $route.path == path }" v-if="!hidden && hasPermission">
    <router-link :to="{ name: name }" tag="a">
      <q-icon :name="meta.icon" />
      {{ $t(`route.${meta.title}`) }}
    </router-link>
  </li>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SideBarItem',
  props: {
    hidden: {
      type: Boolean,
    },
    name: {
      type: String,
      required: true,
    },
    meta: {
      type: Object,
      required: true,
    },

    path: {
      type: String,
      default: '#',
    },
  },
  computed: {
    ...mapState('auth', ['permissions']),
    hasPermission() {
      if (this.meta.permissions) {
        const a = this.meta.permissions.filter((x) => this.permissions.includes(x));
        if (a.length >= 1) {
          return true;
        }
        return false;
      }
      return true;
    },
  },
  data() {
    return {};
  },
};
</script>
