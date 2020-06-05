<template>
  <div>
    <div class="sidenav" v-if="$q.screen.gt.sm">
      <ul class="list-unstyled">
        <side-bar-item v-for="link in routes" :key="link.name" v-bind="link" />
      </ul>
      <div class="sidenav-bottom">
        <q-btn flat icon="las la-cog" size="10px" @click="options = !options" />
      </div>
    </div>
    <div
      class="options-container"
      :class="{ open: options }"
      @click="options = !options"
    >
      <div class="options scroll" :class="{ open: options }" @click.stop>
        <div class="q-pa-md" style="max-width: 350px">
          <q-list>
            <q-expansion-item
              dense
              dense-toggle
              expand-separator
              icon="perm_identity"
              label="Account settings"
            >
              <div>
                <div class="q-gutter-sm">
                  <q-checkbox v-model="teal" label="Teal" />
                </div>
              </div>
            </q-expansion-item>

            <q-expansion-item
              dense
              dense-toggle
              expand-separator
              icon="signal_wifi_off"
              label="Wifi settings"
            >
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, eius reprehenderit eos corrupti commodi magni quaerat
                  ex numquam, dolorum officiis modi facere maiores architecto
                  suscipit iste eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              dense
              dense-toggle
              expand-separator
              icon="drafts"
              label="Drafts"
              header-class="text-purple"
            >
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, eius reprehenderit eos corrupti commodi magni quaerat
                  ex numquam, dolorum officiis modi facere maiores architecto
                  suscipit iste eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </div>
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
      teal: true,
    };
  },
  computed: {
    ...mapState('app', ['routes']),
  },
  methods: {},
};
</script>
