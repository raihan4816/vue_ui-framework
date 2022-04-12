<template>
  <v-app class="home">
    <HomeNews v-for="(data, index) in HomeView" :key="index.id" :news="data" />
  </v-app>
</template>

<script>
import HomeNews from "@/components/HomeNews.vue";

export default {
  name: "HomeView",
  components: {
    HomeNews,
  },
  computed: {
    HomeView() {
      return this.$store.state.lists;
    },
  },
  methods: {
    getData() {
      this.$store.dispatch("fetchNews");
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
#heading {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.home {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}
@media screen and (max-width: 660px) {
  .home {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
}
</style>
