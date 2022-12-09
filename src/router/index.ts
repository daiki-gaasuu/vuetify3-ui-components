import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/icon",
    name: "Icon",
    component: () => import("../views/Icon.vue"),
  },
  {
    path: "/forms",
    name: "Forms",
    component: () => import("../views/Forms.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
