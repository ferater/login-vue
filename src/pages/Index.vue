<template>
  <q-page class="flex flex-center">{{ cookie }} </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      cookie: this.$q.cookies.get('session_lifetime'),
    };
  },
};
</script>
