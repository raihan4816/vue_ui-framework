<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      clipped
      class="drawer-style"
      id="style-1"
    >
      <v-list dense class="pt-3 white--text">
        <v-list-tile>
          <v-list-tile-action>
            <v-avatar size="32px">
              <img
                class="img-circle elevation-7 mb-1"
                :src="getImgUrl(index.id)"
              />
            </v-avatar>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ news.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "DetailNewsItem",
  props: {
    news: Object,
  },
};
</script>
