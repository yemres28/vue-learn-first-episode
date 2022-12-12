import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/data-v-on-input/data-v-on-input";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/template-yapisi/template-yapisi.vue"
      ),
  },
  {
    path: "/attirbute",
    name: "attirbute",
    component: () =>
      import(
        /* webpackChunkName: "attirbute" */ "../views/attirbute-bind/attirbute-bind.vue"
      ),
  },
  {
    path: "/html",
    name: "html",
    component: () =>
      import(
        /* webpackChunkName: "html" */ "../views/html-kodunu-bas/html-kodunu-bas.vue"
      ),
  },
  {
    path: "/event",
    name: "event",
    component: () =>
      import(
        /* webpackChunkName: "event" */ "../views/event-dinlemek/event-dinlemek.vue"
      ),
  },
  {
    path: "/klavye",
    name: "klavye",
    component: () =>
      import(
        /* webpackChunkName: "klavye" */ "../views/klavye-event/klavye-event.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
