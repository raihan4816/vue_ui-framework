<template>
  <v-layout row wrap align-center>
    <v-flex xs8 offset-xs2>
      <div class="maincontent">
        <v-card class="my-3" hover>
          <router-link
            :to="{ name: 'detailnews', params: { title: news.title } }"
            class="component"
          >
            <v-img height="350px" v-bind:src="news.urlToImage"></v-img>
          </router-link>
          <v-container fill-height fluid>
            <v-layout>
              <v-flex xs12 align-end d-flex>
                <span class="headline">{{ news.title }}</span>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-text>
            {{ news.description }}
          </v-card-text>
          <v-card-actions>
            <v-chip small color="secondary" class="white--text">
              {{ news.source.name }}
            </v-chip>
            <v-spacer></v-spacer>
            <v-btn icon class="red--text">
              <v-icon small>fa-reddit</v-icon>
            </v-btn>
            <v-btn icon class="light-blue--text">
              <v-icon small>fa-twitter</v-icon>
            </v-btn>
            <v-btn icon class="blue--text text--darken-4">
              <v-icon small>fa-facebook</v-icon>
            </v-btn>
            <v-btn icon class="red--text">
              <v-icon small>fa-google-plus</v-icon>
            </v-btn>
            <v-btn icon class="blue--text text--darken-4">
              <v-icon small>fa-linkedin</v-icon>
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn
              small
              replace
              color="info"
              v-bind:href="news.url"
              target="_blank"
              >Read More</v-btn
            >
          </v-card-actions>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "HomeNews",
  props: {
    news: Object,
  },
};
</script>

<style scoped>
.component {
  width: 50%;
  color: #2c3e50;
}
.item {
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  background-color: #e3eee8;
  text-decoration: none;
}
.detailing {
  width: 60%;
  text-align: left;
  padding-left: 10px;
  padding: 10px;
  justify-content: center;
  font-weight: bold;
  font-size: small;
}
.author {
  text-decoration: none;
  padding-bottom: 20px;
  padding-top: 10px;
}
.title {
  text-decoration: none;
  padding-bottom: 20px;
}
.date {
  text-decoration: none;
  padding-bottom: 20px;
}
img {
  width: 30%;
  margin-block: auto;
}
@media screen and (max-width: 660px) {
  .component {
    width: 100%;
    color: #2c3e50;
  }
}
</style>
