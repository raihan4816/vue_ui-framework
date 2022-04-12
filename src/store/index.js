import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const persistedDataState = createPersistedState({
  state: ["lists", "error", "totalResults"],
});

export default new Vuex.Store({
  plugins: [persistedDataState],
  state: {
    lists: [],
    error: "",
    totalResults: 0,
  },
  mutations: {
    setNews(state, param) {
      state.lists = param.articles;
      state.totalResults = param.totalResults;
    },
    setError(state, param) {
      state.error = param;
    },
  },
  actions: {
    fetchNews(store) {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=apple&from=2022-04-10&to=2022-04-10&sortBy=popularity&apiKey=5c8d720863304982bda9d0deaed457ba"
        )
        .then((response) => {
          store.commit("setNews", response.data);
          console.log("fetchNews set global state");
        })
        .catch((error) => {
          console.log("fetchListNews set global state error", error.message);
          console.log("error status: ", error.response.status);
          store.commit("setError", error.msg);
        });
    },
  },
  modules: {},
});
