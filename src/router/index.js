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
  {
    path: "/databinding",
    name: "databinding",
    component: () =>
      import(
        /* webpackChunkName: "databinding" */ "../views/two-way-data-binding/two-way-data-binding.vue"
      ),
  },
  {
    path: "/computed",
    name: "computed",
    component: () =>
      import(
        /* webpackChunkName: "computed" */ "../views/computed-properties/computed-properties.vue"
      ),
  },
  {
    path: "/css",
    name: "css",
    component: () =>
      import(
        /* webpackChunkName: "css" */ "../views/dinamik-stillendirme-css/dinamik-stillendirme-css.vue"
      ),
  },
  {
    path: "/v-if",
    name: "v-if",
    component: () =>
      import(/* webpackChunkName: "v-if" */ "../views/v-if/v-if.vue"),
  },
  {
    path: "/v-for",
    name: "v-for",
    component: () =>
      import(/* webpackChunkName: "v-for" */ "../views/v-for/v-for.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
