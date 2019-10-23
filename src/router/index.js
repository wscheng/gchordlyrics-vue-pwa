import Vue from "vue";
import VueRouter from "vue-router";
import SearchSong from "@/components/SearchSong";
import SongLyrics from "@/components/SongLyrics";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SearchSong",
    component: SearchSong
  },
  {
    path: "/lyrics/:songName",
    name: "SongLyrics",
    component: SongLyrics
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
