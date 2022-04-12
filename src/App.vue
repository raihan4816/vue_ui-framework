<template>
  <v-app light>
    <MenuSideComponent :drawer="drawer" />
    <v-toolbar fixed app light clipped-left color="primary" class="elevation-2">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="white--text"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">News App</v-toolbar-title>
    </v-toolbar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer class="secondary pa-5" app>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Made with
            <v-icon class="red--text">favorite</v-icon>
            by
            <a class="white--text" href="https://vuetifyjs.com" target="_blank"
              >Vuetify</a
            >
            and
            <a
              class="white--text"
              href="https://github.com/raihan4816/vue_raihan-hafizh"
              target="_blank"
              >Raihan Hafizh</a
            >
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import MenuSideComponent from "@/components/MenuSideComponent.vue";

export default {
  name: "App",
  data: () => ({
    drawer: null,
    articles: [],
    errors: [],
  }),
  components: {
    MenuSideComponent,
  },
};
</script>
