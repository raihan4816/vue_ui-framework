<template>
  <v-app class="news-wrapper">
    <DetailNewsItem :news="detailNews" />
  </v-app>
</template>

<script>
import DetailNewsItem from "@/components/DetailNewsItem.vue";

export default {
  name: "DetailNewsView",
  components: {
    DetailNewsItem,
  },
  data() {
    return {
      data: {
        title: "test",
        value: "Kembali",
      },
    };
  },
  mounted() {},
  computed: {
    detailNews() {
      const detail = this.$store.state.lists.filter(
        (value) => value.title === this.$route.params.title
      );
      console.log("detail: ", detail);
      return detail[0];
    },
  },
  methods: {},
};
</script>
