<template>
  <v-app>
    <div class="item">
      <div class="justify-center images">
        <img :src="news.urlToImage" />
      </div>
      <h2 class="justify-center title">{{ news.title }}</h2>
      <div class="authorDateElement pl-7 pr-7">
        <div class="author">{{ news.author }}</div>
        <div class="date">{{ news.publishedAt }}</div>
      </div>
      <div class="description pl-10">
        <div class="desc">{{ news.description }}</div>
      </div>
    </div>
    <div class="footer pl-5">
      <div class="pl-5">
        Lanjutkan Baca Ke:
        <a :href="news.url" target="_blank">Sini</a>
      </div>
      <div class="pl-5 pt-5">
        <v-btn depressed color="primary" @click="$router.go(-1)">Kembali</v-btn>
      </div>
    </div>
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

<style scoped>
.item {
  margin-bottom: 30px;
  width: 100%;
}
.title {
  text-align: center !important;
}
.images {
  margin-block: auto;
  width: 100%;
  text-align: center !important;
}
img {
  max-width: 100%;
  max-height: 100%;
  text-align: center;
}
.authorDateElement {
  display: flex;
  place-content: space-between;
  margin: 0 12px;
}
.description {
  display: block;
  margin-block-start: 16px;
  margin-block-end: 16px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: justify;
}
.footer {
  text-align: left;
}
</style>
