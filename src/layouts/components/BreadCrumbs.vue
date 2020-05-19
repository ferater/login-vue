<template>
  <div class="breadcrumbs">
    <q-breadcrumbs
      gutter="xs"
      separator=""
      separator-color="primary"
      active-color="primary"
    >
      <q-breadcrumbs-el
        :label="$t(`route.home`)"
        :to="{ name: 'home' }"
        active-class="breadcrumbs-active"
        exact-active-class="breadcrumbs-exact-active"
      />
      <q-breadcrumbs-el
        :label="route.name ? $t(`route.${route.name}`) : ''"
        v-for="route in crumbs"
        :key="route.name"
        :to="{ name: route.name }"
        active-class="breadcrumbs-active"
        exact-active-class="breadcrumbs-exact-active"
      />
    </q-breadcrumbs>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    crumbs() {
      const bread = this.$route.path.split('/');
      bread.shift();
      const breadcrumbs = bread.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          path,
          to: breadcrumbArray[idx - 1]
            ? `${breadcrumbArray[idx - 1].name}`
            : `/${path}`,
          name: this.$route.matched[idx].meta.title || path,
        });
        return breadcrumbArray;
      }, []);
      return breadcrumbs;
    },
  },
};
</script>
