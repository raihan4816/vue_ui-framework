import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView.vue";
import NewsLayout from "@/layout/NewsLayout.vue";
import DetailNewsLayout from "@/layout/DetailNewsLayout.vue";
import DetailNewsView from "@/views/DetailNewsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: NewsLayout,
    children: [
      {
        path: "",
        name: "News",
        component: HomeView,
      },
    ],
  },
  {
    path: ":title",
    component: DetailNewsLayout,
    children: [
      {
        path: "",
        name: "detailnews",
        component: DetailNewsView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
