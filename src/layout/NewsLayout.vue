<template>
  <v-app class="wrapper news-layout">
    <HomeView class="pt-10" />
    <router-view />
  </v-app>
</template>

<script>
import HomeView from "@/views/HomeView.vue";
export default {
  name: "NewsLayout",
  components: {
    HomeView,
  },
};
</script>

<style scoped>
.wrapper {
  text-align: center;
}
</style>
