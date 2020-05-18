<!-- NotificationMenu -->
<template>
  <div class="q-pa-sm">
    <q-btn round dense flat color="white" icon="lar la-comment-alt">
      <q-badge color="red" text-color="white" floating>
        2
      </q-badge>
      <q-tooltip
        transition-show="scale"
        transition-hide="scale"
        :hide-delay="150"
        :offset="[10, 10]"
        content-class="tooltip-info"
        >{{ $t('notificationMenu.notificationToolTip') }}</q-tooltip
      >
      <q-menu
        anchor="bottom left"
        self="top left"
        content-style="min-width: 250px"
      >
        <q-list bordered class="rounded-borders" style="max-width: 350px">
          <q-item-label header>{{
            $t('notificationMenu.notificationToolTip')
          }}</q-item-label>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar>
                <img src="statics/avatars/avatar-1.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Brunch this weekend?</q-item-label>
              <q-item-label caption lines="2">
                <span class="text-weight-bold">Janet</span>
                -- I'll be in your neighborhood doing errands this weekend. Do
                you want to grab brunch?
              </q-item-label>
            </q-item-section>

            <q-item-section side top>
              1 min ago
            </q-item-section>
          </q-item>

          <q-separator inset="item" />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar>
                <img src="statics/avatars/avatar-4.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Linear Project</q-item-label>
              <q-item-label caption lines="2">
                <span class="text-weight-bold">John</span>
                -- Can we schedule a call for tomorrow?
              </q-item-label>
            </q-item-section>

            <q-item-section side top>
              1 min ago
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>

export default {
  name: 'MotificationsMenuComponent',
  data() {
    return {};
  },
};
</script>
